import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Globe, Cpu, ArrowRight, BarChart, Server, CreditCard, DollarSign } from 'lucide-react';

const RevenuePage = () => {
    return (
        <div style={{ padding: '3rem 2rem', minHeight: '100vh', background: 'var(--background)' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="section-tag" style={{ background: 'var(--primary-dark)', color: 'white', margin: '0 auto 1.5rem' }}>Monetization Hub</div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 950, letterSpacing: '-2.5px', color: 'var(--primary-dark)' }}>
                        Sustainable <span style={{ color: 'var(--primary-light)' }}>Agri-Economy</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '750px', margin: '1.5rem auto', lineHeight: 1.6, fontWeight: 500 }}>
                        MaizeScan operates on a hybrid SaaS model designed to empower local farmers while providing high-end industrial analytics.
                    </p>
                </motion.div>
            </div>

            {/* Pricing Tiers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', maxWidth: '1300px', margin: '0 auto 6rem' }}>
                <PricingCard 
                    tier="Harvest Basic"
                    price="Free"
                    desc="Perfect for small-scale local farmers needing objective quality verification."
                    features={[
                        "10 AI Scans per day",
                        "Standard Grading",
                        "Local History Storage",
                        "Basic Disease Analysis"
                    ]}
                    buttonText="Get Started"
                    isPopular={false}
                />
                <PricingCard 
                    tier="Professional Operator"
                    price="$49"
                    period="/mo"
                    desc="Designed for grain inspection centers and commercial milling units."
                    features={[
                        "Unlimited AI Scans",
                        "Audit PDF Reports",
                        "Multi-Seed Detection",
                        "Cloud Batch Sync",
                        "Full API Access"
                    ]}
                    buttonText="Go Premium"
                    isPopular={true}
                />
                <PricingCard 
                    tier="Enterprise "
                    price="Custom"
                    desc="End-to-end supply chain integration for global agricultural exporters."
                    features={[
                        "Fine-tuned YOLO v8",
                        "Regional Heatmaps",
                        "Blockchain Sync",
                        "24/7 Field Support",
                        "White-label Portal"
                    ]}
                    buttonText="Contact Sales"
                    isPopular={false}
                />
            </div>

            {/* Revenue Streams Grid */}
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 950, marginBottom: '4rem', textAlign: 'center', color: 'var(--primary-dark)', letterSpacing: '-1.5px' }}>Strategic Revenue Channels</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <RevenueStream 
                        icon={<Zap color="var(--primary)" />} 
                        title="SaaS Subscriptions" 
                        desc="Recurring revenue from professional operators and labs using our premium detection and reporting features." 
                    />
                    <RevenueStream 
                        icon={<Server color="var(--primary)" />} 
                        title="Vision-as-a-Service" 
                        desc="Pay-per-scan API access for 3rd party sorting hardware and commercial drone manufacturers." 
                    />
                    <RevenueStream 
                        icon={<Globe color="var(--primary)" />} 
                        title="Regional Big Data" 
                        desc="Selling anonymized regional crop quality trends to governments and commodity traders." 
                    />
                    <RevenueStream 
                        icon={<Shield color="var(--primary)" />} 
                        title="Grading Certification" 
                        desc="Small transaction fees for issuing encrypted 'Digital Quality Certificates' for bulk market trade." 
                    />
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="glass-panel" style={{ marginTop: '7rem', padding: '5rem', textAlign: 'center', background: 'var(--primary-dark)', color: 'white', border: 'none', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                <h2 style={{ fontSize: '2.8rem', fontWeight: 950, marginBottom: '1.25rem', letterSpacing: '-1.5px' }}>Fuel the Future of Agri-Tech</h2>
                <p style={{ opacity: 0.8, marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem' }}>Join our ecosystem as an early partner or industrial investor.</p>
                <button className="btn btn-primary" style={{ background: 'white', color: 'var(--primary-dark)', padding: '1.25rem 3.5rem', borderRadius: '1rem', fontWeight: 800 }}>
                    Download Investor Deck <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                </button>
            </div>
        </div>
    );
};

const PricingCard = ({ tier, price, period, desc, features, buttonText, isPopular }) => (
    <motion.div 
        whileHover={{ y: -8 }}
        className="glass-panel" 
        style={{ 
            padding: '4rem 2.5rem', 
            position: 'relative', 
            border: isPopular ? '2px solid var(--primary-light)' : '1px solid rgba(0,0,0,0.05)',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}
    >
        {isPopular && (
            <div style={{ 
                position: 'absolute', top: '1.5rem', right: '1.5rem', 
                background: 'var(--primary)', color: 'white', padding: '0.5rem 1.25rem', 
                borderRadius: '2rem', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '1px'
            }}>
                RECOMMENDED
            </div>
        )}
        <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>{tier}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 950, color: 'var(--primary-dark)' }}>{price}</span>
                {period && <span style={{ color: 'var(--text-light)', fontWeight: 700, fontSize: '1.2rem' }}>{period}</span>}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: 1.6, fontWeight: 500 }}>{desc}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                {features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.95rem', fontWeight: 600 }}>
                        <div style={{ background: 'var(--accent)', color: 'var(--primary)', padding: '6px', borderRadius: '50%', display: 'flex' }}><Check size={14} /></div>
                        {f}
                    </div>
                ))}
            </div>
        </div>

        <button className={isPopular ? 'btn btn-primary' : 'btn btn-secondary'} style={{ width: '100%', padding: '1.25rem', borderRadius: '1rem', fontWeight: 800 }}>
            {buttonText}
        </button>
    </motion.div>
);

const RevenueStream = ({ icon, title, desc }) => (
    <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', background: 'white' }}>
        <div style={{ background: 'var(--accent)', padding: '1.25rem', borderRadius: '1.5rem', display: 'flex', color: 'var(--primary-dark)' }}>
            {React.cloneElement(icon, { size: 40 })}
        </div>
        <div>
            <h3 style={{ fontWeight: 950, fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary-dark)', letterSpacing: '-0.5px' }}>{title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>{desc}</p>
        </div>
    </div>
);

export default RevenuePage;
