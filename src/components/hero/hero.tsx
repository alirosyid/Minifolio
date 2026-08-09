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
                'an AI Backend Architect.',
                'an Automation Engineer.',
                'an Event-Driven Systems Architect.',
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 2000,
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
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 10px 0', color: '#333' }}>
                        Hi, my name is <span style={{ color: '#00a99d' }}>Ali Rosyid</span>
                    </h1>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 'normal', margin: '0', color: '#555' }}>
                        I&apos;m <span id="role" ref={el} style={{ fontWeight: 'bold', color: '#333' }}></span>
                    </h2>

                    <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6', color: '#666', maxWidth: '700px', fontWeight: 400 }}>
                        I architect event-driven microservices and stateful B2B automation pipelines. I bridge the gap between raw LLMs and production-grade business infrastructure, ensuring zero-trust security, strict deduplication, and algorithmic efficiency.
                    </p>
                    
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '35px', flexWrap: 'wrap' }}>
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

                        <a 
                            href="#services" 
                            style={{
                                backgroundColor: 'transparent',
                                color: '#00a99d',
                                padding: '12px 28px',
                                borderRadius: '6px',
                                border: '2px solid #00a99d',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                transition: '0.3s'
                            }}
                        >
                            View Architecture
                        </a>

                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginLeft: '10px' }}>
                            <a href="https://github.com/alirosyid" target="_blank" rel="noopener noreferrer" style={{ color: '#00a99d', display: 'flex', textDecoration: 'none' }}>
                                <Github size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/alirosyid-ai-automation" target="_blank" rel="noopener noreferrer" style={{ color: '#00a99d', display: 'flex', textDecoration: 'none' }}>
                                <Linkedin size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '0 20px', paddingBottom: '80px', paddingTop: '20px' }}>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#999', marginBottom: '15px' }}>Architecting Systems For</p>
                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', color: '#666' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Building2 size={20} /> <div style={{ fontWeight: 600, fontSize: '15px' }}>B2B Agencies</div></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Briefcase size={20} /> <div style={{ fontWeight: 600, fontSize: '15px' }}>Healthcare Tech</div></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Landmark size={20} /> <div style={{ fontWeight: 600, fontSize: '15px' }}>Enterprise SaaS</div></div>
                </div>
            </div>

            <div id="about" style={{ paddingTop: '20px' }} />
        </>
    );
}
