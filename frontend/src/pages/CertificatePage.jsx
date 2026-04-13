import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
    Download, Printer, ArrowLeft, QrCode, CheckSquare
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const CertificatePage = ({ user }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [batch, setBatch] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBatch = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${API_URL}/batches/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBatch(response.data);
            } catch (err) {
                console.error("Failed to load certificate data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchBatch();
    }, [id]);

    const handlePrint = () => window.print();

    const handleDownloadPDF = async () => {
        const element = document.getElementById('certificate-template');
        if (!element) return;
        const canvas = await html2canvas(element, { scale: 3, useCORS: true });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
        pdf.save(`MaizeScan_Official_Cert_${batch?.batch_id || 'CERT'}.pdf`);
    };

    if (loading) return <div style={fullScreenCenter}><h3>Authenticating Digital Certificate...</h3></div>;
    if (!batch) return <div style={fullScreenCenter}><h3 style={{color: '#ef4444'}}>Certificate Authentication Failed.</h3></div>;

    const sound = Number(batch.excellent_percentage) + Number(batch.good_percentage);
    const defective = Number(batch.bad_percentage) + Number(batch.worst_percentage);
    
    // Core Grading Logic (Matching Reports/Backend)
    const isGradeA = (sound >= 90 && defective <= 3);
    const isGradeB = !isGradeA && (sound >= 80 && defective <= 7);
    const gradeLetter = isGradeA ? 'A' : (isGradeB ? 'B' : 'C');
    const finalRatingText = isGradeA ? 'PREMIUM QUALITY' : (isGradeB ? 'COMMERCIAL QUALITY' : 'INDUSTRIAL USE');
    const qualityScoreValue = isGradeA ? 95 : (isGradeB ? 82 : 54);

    // Data for Chart
    const chartData = [
        { name: 'Excellent', value: Number(batch.excellent_count), color: '#15803d' },
        { name: 'Good', value: Number(batch.good_count), color: '#22c55e' },
        { name: 'Average', value: Number(batch.average_count), color: '#eab308' },
        { name: 'Bad', value: Number(batch.bad_count), color: '#ef4444' },
        { name: 'Worst', value: Number(batch.worst_count), color: '#000000' }
    ].filter(d => d.value > 0);

    return (
        <div style={{ background: '#e2e8f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px', paddingBottom: '100px' }}>
            {/* Action Bar */}
            <div style={{ width: '800px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <button onClick={() => navigate('/reports')} style={actionBtn}><ArrowLeft size={18}/> Back to Ledger</button>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={handleDownloadPDF} style={actionBtn}><Download size={18}/> Official PDF</button>
                    <button onClick={handlePrint} style={actionBtn}><Printer size={18}/> Print Cert</button>
                </div>
            </div>

            {/* MAIN TEMPLATE - VERTICAL PORTRAIT */}
            <div id="certificate-template" className="cert-container portrait">
                <div className="cert-border-outer">
                    <div className="cert-border-inner">
                        
                        {/* HEADER */}
                        <header className="cert-header">
                            <h1 className="main-title">MAIZESCAN AGRI-CERT LABS</h1>
                            <p className="sub-title">AI-ASSISTED SEED QUALITY CERTIFICATION UNIT</p>
                            <div className="logo-wrapper">
                                <img src="/images/logo.png" alt="MaizeScan Logo" className="cert-logo" />
                            </div>
                            <h2 className="cert-type-title">CERTIFIED MAIZE SEED QUALITY CERTIFICATE</h2>
                        </header>

                        <div className="cert-body">
                            
                            {/* TOP SECTION: GRADE CARD */}
                            <div className="body-section grade-wrap">
                                <div className="grade-card portrait-mode">
                                    <h4 className="grade-star">★ GRADE {gradeLetter} ★</h4>
                                    <p className="final-rating">FINAL RATING: {finalRatingText}</p>
                                    
                                    <div className="stats-main">
                                        <div className="stat-box"><label>VISUAL PURITY</label><strong>{sound.toFixed(1)}%</strong></div>
                                        <div className="stat-box"><label>DEFECTIVE RATE</label><strong>{defective.toFixed(1)}%</strong></div>
                                        <div className="stat-box"><label>QUALITY SCORE</label><strong>{qualityScoreValue}/100</strong></div>
                                    </div>
                                </div>
                                <p className="validation-text">Validated against IMS-2024 industrial standards based on AI vision analysis.</p>
                            </div>

                            {/* MID SECTION: TWO COLUMNS (ANALYSIS & IDENTITY) */}
                            <div className="mid-split">
                                <div className="split-col">
                                    <h3 className="section-head">DETAILED ANALYSIS</h3>
                                    <div className="chart-area">
                                        <div style={{width: '90px', height: '90px'}}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie data={chartData} innerRadius={20} outerRadius={40} paddingAngle={2} dataKey="value">
                                                        {chartData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                                        ))}
                                                    </Pie>
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                        <div className="chart-legend vertical">
                                            {[{n: 'Excellent', c: '#15803d'}, {n: 'Good', c: '#22c55e'}, {n: 'Average', c: '#eab308'}, {n: 'Damaged', c: '#ef4444'}].map((d, i) => (
                                                <div key={i} className="leg-item"><span style={{background: d.c}}/> {d.n}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="split-col">
                                    <h3 className="section-head">CERTIFICATE IDENTITY</h3>
                                    <div className="data-stack">
                                        <div className="data-row"><label>Certificate ID:</label> <span>MSC-2026-{batch.batch_id}</span></div>
                                        <div className="data-row"><label>Batch ID:</label> <span>{batch.batch_id}</span></div>
                                        <div className="data-row"><label>Date:</label> <span>{new Date(batch.timestamp).toLocaleDateString()}</span></div>
                                        <div className="data-row"><label>Client:</label> <span>Hermoine Granger</span></div>
                                        <div className="data-row"><label>Operator:</label> <span>MS-OPERATOR-4</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM SECTION: RECOMMENDATIONS & VERIFICATION */}
                            <div className="bottom-wrap">
                                <div className="reco-box">
                                    <h3 className="section-head">MARKET SUITABILITY</h3>
                                    <div className="reco-list vertical">
                                        <RecoItem label="Suitable for Certified Seed Production" active={isGradeA} />
                                        <RecoItem label="Suitable for Premium Market Sale" active={isGradeA || isGradeB} />
                                        <RecoItem label="Suitable for Replanting (tested)" active={isGradeA} />
                                    </div>
                                </div>
                                
                                <div className="verification-row">
                                    <div className="qr-wrap">
                                        <QrCode size={70} color="#334155" />
                                        <p>VALIDATE AUTHENTICITY</p>
                                    </div>
                                    
                                    <div className="stamp-wrap-portrait">
                                        <div className="verified-stamp small">
                                            <div className="stamp-top">MAIZESCAN CERTIFIED</div>
                                            <div className="stamp-mid">AI VERIFIED</div>
                                            <div className="stamp-bot">QUALITY APPROVED</div>
                                        </div>
                                    </div>

                                    <div className="sig-wrap">
                                        <p className="sig-font">Digital Signature</p>
                                        <div className="sig-line" />
                                        <p className="sig-label">Authorized Officer</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <footer className="cert-footer">
                            AI-generated quality report for commercial maize seeds based on YOLOv8 deep learning visual inspection. Official certification requires additional molecular and germination validation.
                        </footer>

                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Great+Vibes&family=Playfair+Display:wght@700&family=Montserrat:wght@400;700&display=swap');

                @media print {
                    @page { size: A4 portrait; margin: 0; }
                    html, body { 
                        height: 297mm; overflow: hidden !important; 
                        margin: 0 !important; padding: 0 !important; 
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .cert-container.portrait { 
                        position: absolute !important; top: 0 !important; left: 0 !important; 
                        width: 210mm !important; height: 297mm !important; 
                        margin: 0 !important; padding: 15mm !important; 
                        transform: scale(0.98); transform-origin: top center;
                        box-shadow: none !important; border: none !important;
                        box-sizing: border-box !important;
                    }
                    button, .action-bar { display: none !important; }
                }

                .cert-container.portrait {
                    width: 794px; /* Approx 210mm at 96dpi */
                    height: 1123px; /* Approx 297mm at 96dpi */
                    background: #fdfbf7;
                    padding: 24px;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.15);
                    position: relative;
                    background-image: radial-gradient(#d4af3715 1px, transparent 1px);
                    background-size: 25px 25px;
                    overflow: hidden;
                    box-sizing: border-box;
                }

                .cert-border-outer {
                    border: 4px solid #1b4332;
                    height: 100%; width: 100%; padding: 8px; position: relative;
                }
                
                .cert-border-outer::before, .cert-border-outer::after {
                    content: ''; position: absolute; width: 40px; height: 40px;
                    border: 6px solid #d4af37; z-index: 5;
                }
                .cert-border-outer::before { top: -10px; left: -10px; border-right: 0; border-bottom: 0; }
                .cert-border-outer::after { bottom: -10px; right: -10px; border-left: 0; border-top: 0; }

                .cert-border-inner {
                    border: 2px solid #d4af37; height: 100%; width: 100%; padding: 30px;
                    background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(1px);
                    display: flex; flex-direction: column;
                }

                .cert-header { text-align: center; margin-bottom: 12px; }
                .main-title { font-family: 'Cinzel', serif; color: #9a7b4f; font-size: 1.6rem; margin: 0; text-align: center; }
                .sub-title { font-family: 'Montserrat', sans-serif; color: #1b4332; font-size: 0.65rem; font-weight: 700; margin: 2px 0 6px; text-align: center; letter-spacing: 0.5px; }
                
                .logo-wrapper { display: flex; justify-content: center; margin-bottom: 8px; }
                .cert-logo { height: 65px; border-radius: 50%; border: 1px solid #d4af37; padding: 2px; background: white; }
                
                .cert-type-title { font-family: 'Playfair Display', serif; color: #1b4332; font-size: 1.15rem; text-align: center; border-top: 1.5px solid #1b4332; border-bottom: 1.5px solid #1b4332; padding: 3px 0; margin-bottom: 12px; }

                .cert-body { flex: 1; display: flex; flex-direction: column; gap: 10px; overflow: hidden; }

                .grade-card.portrait-mode {
                    background: white; border: 1.5px solid #d4af37; border-radius: 8px;
                    padding: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }
                .grade-star { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #9a7b4f; margin: 0; }
                .final-rating { font-size: 0.7rem; font-weight: 800; color: #1b4332; margin: 3px 0 12px; letter-spacing: 0.4px; }
                
                .stats-main { display: flex; justify-content: space-around; border-top: 1px solid #f1f5f9; padding-top: 10px; }
                .stat-box label { display: block; font-family: 'Montserrat', sans-serif; font-size: 0.5rem; color: #94a3b8; font-weight: 800; margin-bottom: 3px; }
                .stat-box strong { font-size: 1rem; color: #1b4332; }

                .validation-text { text-align: center; font-size: 0.6rem; color: #64748b; margin-top: 4px; font-style: italic; }

                .mid-split { display: flex; gap: 15px; margin-top: 4px; }
                .split-col { flex: 1; }

                .chart-area { display: flex; align-items: center; gap: 6px; }
                .chart-legend.vertical { display: flex; flex-direction: column; gap: 2px; font-size: 0.6rem; font-weight: 700; color: #475569; }
                .leg-item { display: flex; align-items: center; gap: 4px; }
                .leg-item span { width: 7px; height: 7px; border-radius: 2px; }

                .section-head { font-family: 'Montserrat', sans-serif; font-size: 0.7rem; font-weight: 800; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 3px; margin-bottom: 8px; letter-spacing: 0.2px; }
                .data-row { font-size: 0.7rem; margin-bottom: 5px; display: flex; justify-content: space-between; border-bottom: 1px dashed #f1f5f9; padding-bottom: 2px; }
                .data-row label { font-weight: 800; color: #64748b; }
                .data-row span { font-weight: 700; color: #1e293b; font-family: monospace; }

                .bottom-wrap { margin-top: auto; padding-top: 5px; }
                .reco-list.vertical { display: flex; flex-direction: column; gap: 3px; margin-bottom: 12px; }
                
                .verification-row { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 5px; }
                .qr-wrap { text-align: center; opacity: 0.7; scale: 0.7; transform-origin: bottom left; }
                .qr-wrap p { font-size: 0.45rem; font-weight: 900; color: #94a3b8; margin-top: 1px; }

                .stamp-wrap-portrait { transform: rotate(-6deg) scale(0.7); margin-bottom: 0px; }
                .verified-stamp.small { border-width: 1.5px; padding: 3px 8px; color: #991b1b; border-color: #991b1b; }
                .stamp-mid { font-size: 0.9rem; border-top: 1px solid #991b1b; border-bottom: 1px solid #991b1b; }

                .sig-wrap { text-align: right; scale: 0.75; transform-origin: bottom right; }
                .sig-font { font-family: Great Vibes, cursive; font-size: 1.4rem; color: #475569; margin-bottom: -10px; }
                .sig-line { border-bottom: 1.5px solid #1e293b; width: 120px; margin-left: auto; height: 12px; }
                .sig-label { font-size: 0.6rem; font-weight: 700; margin-top: 3px; color: #1e293b; }

                .cert-footer { border-top: 1px solid #e2e8f0; padding-top: 6px; margin-top: 10px; font-size: 0.55rem; color: #94a3b8; text-align: center; line-height: 1.2; }
            `}</style>
        </div>
    );
};

const RecoItem = ({ label, active }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: active ? 1 : 0.35 }}>
        <CheckSquare size={16} color={active ? '#15803d' : '#94a3b8'} fill={active ? '#dcfce7' : 'transparent'} />
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1b4332' }}>{label}</span>
    </div>
);

const fullScreenCenter = { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', fontStyle: 'italic' };
const actionBtn = { padding: '10px 20px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '14px', color: '#475569' };

export default CertificatePage;
