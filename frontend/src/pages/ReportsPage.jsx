import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Download, Search, Filter, ChevronRight, FileSpreadsheet, FileText, Calendar, History, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = 'http://localhost:8000';

const ReportsPage = () => {
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchBatches();
    }, []);

    const fetchBatches = async () => {
        try {
            const response = await axios.get(`${API_URL}/batches`);
            setBatches(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const filteredBatches = batches.filter(b =>
        b.batch_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.final_grade.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const downloadCSV = () => {
        if (batches.length === 0) return;
        const headers = Object.keys(batches[0]).join(',');
        const rows = batches.map(b => Object.values(b).join(','));
        const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join('\n');
        const link = document.createElement("a");
        link.setAttribute("href", encodeURI(csvContent));
        link.setAttribute("download", `MaizeScan_FullAudit_${new Date().getTime()}.csv`);
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div style={{ maxWidth: '1400px', margin: '4rem auto', padding: '0 2rem', position: 'relative' }}>
            {/* Background Pattern */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'url("/images/pattern.png")',
                backgroundSize: '400px',
                opacity: 0.05,
                zIndex: -1,
                pointerEvents: 'none'
            }} />
            {/* Header Area */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <div className="section-tag shimmer">System Audit Trail</div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.8rem' }}>Batch <span className="gradient-text">Master List</span></h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', fontWeight: 600 }}>Manage, audit, and export historical seed inspection records.</p>
                </motion.div>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                    <button className="btn btn-secondary shimmer" onClick={downloadCSV}>
                        <FileSpreadsheet size={20} /> Export Audit Logs
                    </button>
                    <button className="btn btn-primary shimmer">
                        <Download size={20} /> Generate PDF
                    </button>
                </div>
            </div>

            {/* Filter Panel */}
            <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search size={22} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                    <input
                        type="text"
                        placeholder="Search by ID, grade, or timestamp..."
                        className="form-input"
                        style={{ paddingLeft: '3.5rem', fontSize: '1.1rem', background: 'white' }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-secondary">
                        <Calendar size={18} /> Date Range
                    </button>
                    <button className="btn btn-secondary">
                        <Filter size={18} /> Filter by Grade
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <div className="glass-panel" style={{ overflow: 'hidden', padding: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.75rem' }}>
                    <thead>
                        <tr style={{ textAlign: 'left' }}>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Batch Identity</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Timestamp</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Throughput</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Quality Index</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Status</th>
                            <th style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>Management</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan="6" style={{ padding: '6rem', textAlign: 'center', color: 'var(--text-light)', fontWeight: 700 }}>Intelligent audit in progress...</td></tr>
                        ) : filteredBatches.length === 0 ? (
                            <tr><td colSpan="6" style={{ padding: '6rem', textAlign: 'center', color: 'var(--text-light)', fontWeight: 700 }}>No historical records available.</td></tr>
                        ) : filteredBatches.map((batch, idx) => (
                            <motion.tr
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={batch.id}
                                style={{ background: 'white', cursor: 'pointer', transition: 'all 0.3s' }}
                                className="report-row"
                            >
                                <td style={{ padding: '1.25rem 1.5rem', borderRadius: '1rem 0 0 1rem', fontWeight: 900, color: 'var(--primary-dark)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <History size={18} opacity={0.3} />
                                        {batch.batch_id}
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)', fontWeight: 600 }}>{new Date(batch.timestamp).toLocaleString()}</td>
                                <td style={{ padding: '1.25rem 1.5rem', fontWeight: 800 }}>{batch.total_count} <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>Seeds</span></td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '50px', height: '6px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                                            <div style={{ width: `${100 - (batch.bad_percentage + batch.worst_percentage)}%`, height: '100%', background: 'var(--excellent)' }} />
                                        </div>
                                        <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{(100 - (batch.bad_percentage + batch.worst_percentage)).toFixed(1)}%</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem' }}>
                                    <span style={{
                                        padding: '0.5rem 1rem', borderRadius: '0.75rem', fontSize: '0.85rem', fontWeight: 900,
                                        background: batch.final_grade === 'A' ? 'var(--excellent)15' : batch.final_grade === 'B' ? 'var(--good)15' : '#fee2e2',
                                        color: batch.final_grade === 'A' ? 'var(--excellent)' : batch.final_grade === 'B' ? '#eab308' : '#dc2626',
                                        border: `1px solid ${batch.final_grade === 'A' ? 'var(--excellent)' : batch.final_grade === 'B' ? '#eab308' : '#dc2626'}33`
                                    }}>
                                        GRADE {batch.final_grade}
                                    </span>
                                </td>
                                <td style={{ padding: '1.25rem 1.5rem', borderRadius: '0 1rem 1rem 0' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button className="btn-icon" onClick={() => alert(`MAIZE SEED BATCH REPORT\n\nBatch ID: ${batch.batch_id}\nFinal Grade: ${batch.final_grade}\n\nRecommendation:\n${batch.recommendation || 'No recommendation available.'}`)} title="Quick View Results"><FileText size={18} /></button>
                                        <button className="btn-icon" style={{ color: '#ef4444' }} onClick={async () => { if (confirm('Delete this audit record?')) { await axios.delete(`${API_URL}/batches/${batch.id}`); fetchBatches(); } }}><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <style>{`
                .report-row:hover {
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    transform: scale(1.01);
                    z-index: 10;
                }
                .btn-icon {
                    background: transparent;
                    border: 1px solid #f1f5f9;
                    padding: 0.5rem;
                    border-radius: 0.75rem;
                    cursor: pointer;
                    color: var(--text-light);
                    transition: all 0.3s;
                }
                .btn-icon:hover {
                    background: #f8fafc;
                    color: var(--primary);
                    border-color: var(--primary);
                }
            `}</style>
        </div>
    );
};

export default ReportsPage;
