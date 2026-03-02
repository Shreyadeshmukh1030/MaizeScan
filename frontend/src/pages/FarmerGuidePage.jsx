import React from 'react';
import { BookOpen, CheckCircle2, AlertTriangle, XCircle, Info, ArrowRight, Lightbulb, ShieldCheck, Microscope, Zap, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FarmerGuidePage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 2rem' }}>
            {/* Cinematic Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>The <span className="gradient-text">Master Class</span> on Seed Sorting</h1>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', fontWeight: 600 }}>Empower your agricultural yield with AI-driven precision. Learn how MaizeScan grades every single grain.</p>
                </motion.div>
            </div>

            {/* Seed Quality Comparison */}
            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Visual <span className="gradient-text">Grading</span> Standards</h2>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>Our AI models are trained on thousands of samples to recognize subtle defects. Use this guide to understand why a seed is categorized under a specific grade.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <GuidePoint icon={<CheckCircle2 color="#00C853" />} title="Excellent Seeds" desc="Uniform golden color, plump, no cracks or spots. Highest germination potential." />
                        <GuidePoint icon={<AlertTriangle color="#FFD600" />} title="Average Seeds" desc="Slight discoloration or minor size variation. Acceptable for general use." />
                        <GuidePoint icon={<XCircle color="#D50000" />} title="Bad/Worst Seeds" desc="Severe mold, insect holes, or physical breakage. Must be removed to prevent contamination." />
                    </div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
                    <img src="/images/comparison.png" alt="Seed Comparison" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>
            </div>

            {/* Roadmap Navigation Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <button className="section-tag" style={{ background: '#6ee7b7', color: '#064e3b', cursor: 'pointer', border: 'none' }}>Seed Quality Tips</button>
                <button className="section-tag" style={{ background: '#334155', color: '#e2e8f0', cursor: 'pointer', border: 'none' }}>Production Methodology</button>
                <button className="section-tag" style={{ background: '#334155', color: '#e2e8f0', cursor: 'pointer', border: 'none' }}>Silo Storage</button>
            </div>

            {/* Official Seed Quality Standards from Roadmap */}
            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '3rem', background: '#0f172a', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'url("/images/seed_defects.png")', backgroundSize: 'cover' }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem', color: '#6ee7b7' }}>Maize <span style={{ color: 'white' }}>Production Guide</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '2px solid #334155', paddingBottom: '0.5rem' }}>Seed Quality Tips</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ padding: '1rem', background: 'rgba(110, 231, 183, 0.1)', borderRadius: '1rem', borderLeft: '4px solid #6ee7b7' }}>
                                    <div style={{ fontWeight: 900, marginBottom: '0.25rem' }}>Excellent/Good Seeds</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Suitable for sowing with extremely high germination potential (~90%+). Ideal for primary seed stock.</div>
                                </div>
                                <div style={{ padding: '1rem', background: 'rgba(253, 224, 71, 0.1)', borderRadius: '1rem', borderLeft: '4px solid #fde047' }}>
                                    <div style={{ fontWeight: 900, marginBottom: '0.25rem' }}>Average Seeds</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Use with caution. May have lower germination rates. Avoid long-term storage as viability decreases faster.</div>
                                </div>
                                <div style={{ padding: '1rem', background: 'rgba(248, 113, 113, 0.1)', borderRadius: '1rem', borderLeft: '4px solid #f87171' }}>
                                    <div style={{ fontWeight: 900, marginBottom: '0.25rem' }}>Bad/Worst Seeds</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Do NOT use for sowing. Recommended for immediate sale as low-grade grain or processing for animal feed.</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Certified Seed Standards</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <div style={{ width: '8px', height: '8px', background: '#6ee7b7', borderRadius: '50%' }} />
                                    Minimum 90% Germination
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <div style={{ width: '8px', height: '8px', background: '#6ee7b7', borderRadius: '50%' }} />
                                    ~99% Genetic & Physical Purity
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <div style={{ width: '8px', height: '8px', background: '#6ee7b7', borderRadius: '50%' }} />
                                    Moisture Content below 12.5%
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <div style={{ width: '8px', height: '8px', background: '#6ee7b7', borderRadius: '50%' }} />
                                    Chemical Treatment Verification
                                </li>
                            </ul>
                            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(110, 231, 183, 0.05)', borderRadius: '1rem', fontSize: '0.85rem', lineHeight: 1.6, opacity: 0.7 }}>
                                Following these standards ensures a <span style={{ color: '#6ee7b7', fontWeight: 800 }}>30% higher harvest yield</span> compared to manual inspection methods.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post-Inspection Storage Infrastructure */}
            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <img src="/images/storage_facility.png" alt="Silo Storage" style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
                <div>
                    <div className="section-tag" style={{ border: 'none', background: '#dcfce7', color: '#166534' }}>Post-Detection Logistics</div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', marginTop: '1rem' }}>Intelligent <span className="gradient-text">Silo Storage</span></h2>
                    <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                        Once seeds are graded, they are routed to separate storage siloes based on their quality index. MaizeScan provides digital API endpoints to integrate directly with automated storage switches.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ flex: 1, padding: '1rem', background: 'white', border: '1px solid #f1f5f9', borderRadius: '1rem' }}>
                            <div style={{ fontWeight: 800, fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>PRIMARY SILO</div>
                            <div style={{ fontWeight: 600 }}>Grade A (Certified)</div>
                        </div>
                        <div style={{ flex: 1, padding: '1rem', background: 'white', border: '1px solid #f1f5f9', borderRadius: '1rem' }}>
                            <div style={{ fontWeight: 800, fontSize: '0.8rem', color: '#ea580c', marginBottom: '0.25rem' }}>SEC. SILO</div>
                            <div style={{ fontWeight: 600 }}>Grade B (Market)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* In-depth Grading Table */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', textAlign: 'center' }}>Detailed <span className="gradient-text">Grading Criteria</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
                    <GradeCard grade="Excellent" color="#00C853" criteria="100% Intact, Bright Color, Optimal Moisture" status="Premium" />
                    <GradeCard grade="Good" color="#FFD600" criteria="95% Intact, Slight Size Variation" status="Select" />
                    <GradeCard grade="Average" color="#FF9100" criteria="Minor Specs, Surface Abrasions" status="Market" />
                    <GradeCard grade="Bad" color="#D50000" criteria="Fungal Growth, Major Cracks" status="Reject" />
                    <GradeCard grade="Worst" color="#1e293b" criteria="Decomposed, Shriveled, Insect Eaten" status="Dangerous" />
                </div>
            </div>

            {/* Optimization Protocol */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2.5rem', textAlign: 'center' }}>The <span className="gradient-text">Preparation Protocol</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '3rem', marginBottom: '1rem', opacity: 0.2 }}>01</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Surface Cleaning</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>Remove all "fine material" including dust, cob fragments, and silk. Debris can cause "false positives" where the AI misidentifies trash as bad seeds.</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '3rem', marginBottom: '1rem', opacity: 0.2 }}>02</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Moisture Balancing</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>Ensure seeds are dried to approx. 13-14% moisture content. High moisture creates a "glossy" reflection that can hide internal cracks from the lens.</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '3rem', marginBottom: '1rem', opacity: 0.2 }}>03</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Lighting & Backdrop</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>Use a matte, non-reflective background (preferably blue or black). Avoid direct sunlight; diffuse midday light provides the most color-accurate logs.</p>
                    </div>
                </div>
            </div>

            {/* Biological Defect Profiles */}
            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', background: '#f8fafc' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem' }}>Biological <span className="gradient-text">Defect Profiles</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: '1rem', height: 'max-content' }}><Zap size={20} /></div>
                            <div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>Insect Damage (Weevils)</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Identified by perfectly circular holes or "windowing" on the seed coat. These seeds lose 40% of their mass and cannot be used for seed stock.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: '1rem', height: 'max-content' }}><Zap size={20} /></div>
                            <div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>Fungal Mold (Aflatoxin)</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Detected via specialized color histogram analysis. AI looks for greyish-green or blackish surface patterns that indicate dangerous contamination.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#fff7ed', color: '#ea580c', padding: '0.75rem', borderRadius: '1rem', height: 'max-content' }}><Zap size={20} /></div>
                            <div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>Germination Cracks</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Micro-fractures caused by mechanical shelling. AI identifies these as sharp, jagged high-contrast lines across the kernel's crown.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div style={{ background: '#fff7ed', color: '#ea580c', padding: '0.75rem', borderRadius: '1rem', height: 'max-content' }}><Zap size={20} /></div>
                            <div>
                                <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>Heat Scorch</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Discoloration from improper drying temperatures. AI flags kernels that fall outside the "Golden Yellow" range into darker, charred hues.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post-Inspection Logistics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: 'var(--accent)', padding: '0.75rem', borderRadius: '1rem', color: 'var(--primary)' }}>
                            <Lightbulb size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Pro-Tips for Better Yield</h3>
                    </div>
                    <ul style={{ color: 'var(--text-light)', paddingLeft: '1.5rem', lineHeight: 2, fontWeight: 500 }}>
                        <li>Ensure even lighting during the scanning process.</li>
                        <li>Clean the seeds of dust and debris before inspection.</li>
                        <li>Sow 'Excellent' and 'Good' grade seeds separately for best results.</li>
                        <li>Store rejected seeds in a dry, isolated container.</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: 'var(--accent)', padding: '0.75rem', borderRadius: '1rem', color: 'var(--primary)' }}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Storage Logistics</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ borderLeft: '3px solid #00C853', paddingLeft: '1rem' }}>
                            <div style={{ fontWeight: 800, color: 'var(--text-main)' }}>Excellent Grade</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Keep in hermetic bags for up to 18 months for seed stock.</div>
                        </div>
                        <div style={{ borderLeft: '3px solid #FFD600', paddingLeft: '1rem' }}>
                            <div style={{ fontWeight: 800, color: 'var(--text-main)' }}>Market Grade</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Standard ventilation; ideal for direct mill distribution.</div>
                        </div>
                        <div style={{ borderLeft: '3px solid #D50000', paddingLeft: '1rem' }}>
                            <div style={{ fontWeight: 800, color: 'var(--text-main)' }}>Reject Grade</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Process immediately for industrial fuel or separate for lab study.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="glass-panel" style={{ padding: '3.5rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary) 0%, #1b4332 100%)', color: 'white', borderRadius: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to Sort With Precision?</h2>
                <p style={{ opacity: 0.9, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Join the thousand-strong network of farmers who trust MaizeScan for their quality audits.</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <button className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem' }} onClick={() => navigate('/detect')}>Launch Detection Engine</button>
                    <button className="btn" style={{ border: '1px solid white', color: 'white', padding: '1rem 2.5rem' }} onClick={() => navigate('/analytics')}>View Your History</button>
                </div>
            </div>
        </div>
    );
};

const GuidePoint = ({ icon, title, desc }) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{ marginTop: '4px' }}>{icon}</div>
        <div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{title}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{desc}</div>
        </div>
    </div>
);

const GradeCard = ({ grade, color, criteria, status }) => (
    <motion.div whileHover={{ y: -5 }} className="glass-panel" style={{ padding: '1.5rem', borderBottom: `4px solid ${color}`, minHeight: '180px' }}>
        <div style={{ color: color, fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{status}</div>
        <div style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem' }}>{grade}</div>
        <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.5 }}>{criteria}</p>
    </motion.div>
);

export default FarmerGuidePage;
