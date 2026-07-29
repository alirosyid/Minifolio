'use client';

import { useRef, useEffect } from 'react';
import { Linkedin, Github, Building2, Briefcase, Landmark } from 'lucide-react';
import Typed from 'typed.js';

import './hero.css';

export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'an Enterprise Systems Architect.',
                'a Private AI Specialist.',
                'an Automation Engineer.',
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    
    return (
        <>
            <div id="hero" className="hero">
                <div className="container">
                    Hi, my name is <span>Ali Rosyid</span> <br />
                    I&apos;m <span id="role" ref={el}></span>

                    {/* 1. UPGRADE: The Outcome Statement (Fokus pada ROI Klien) */}
                    <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6', color: '#666', maxWidth: '650px', fontWeight: 400 }}>
                        I help B2B companies eliminate redundant data entry and accelerate operational workflows using autonomous AI pipelines and stateful orchestration.
                    </p>
                    
                    {/* PERBAIKAN LAYOUT: Hard Override CSS untuk Tombol & Ikon */}
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginTop: '35px', flexWrap: 'wrap' }}>
                        <a 
                            href="https://calendly.com/aliahmadarrosyid/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: '#00a99d',
                                color: 'white',
                                padding: '14px 32px',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                transition: '0.3s'
                            }}
                        >
                            Book an Audit
                        </a>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <a href="https://github.com/alirosyid" target="_blank" rel="noopener noreferrer" style={{ color: '#00a99d', display: 'flex', textDecoration: 'none' }}>
                                <Github size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/alirosyid-ai-automation" target="_blank" rel="noopener noreferrer" style={{ color: '#00a99d', display: 'flex', textDecoration: 'none' }}>
                                <Linkedin size={32} />
                            </a>
                        </div>
                    </div>

                    {/* 3. UPGRADE: The Trust Void (Pita Bukti Sosial Industri B2B) */}
                    <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #eaeaea' }}>
                        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#999', marginBottom: '15px' }}>Architecting Systems For</p>
                        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', color: '#a0a0a0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Building2 size={20} /> <span style={{ fontWeight: 600 }}>B2B Agencies</span></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Briefcase size={20} /> <span style={{ fontWeight: 600 }}>Healthcare Tech</span></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Landmark size={20} /> <span style={{ fontWeight: 600 }}>Enterprise SaaS</span></div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Perbaikan Jarak ke About */}
            <div id="about" style={{ paddingTop: '80px' }} />
        </>
    );
}
