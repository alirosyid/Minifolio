'use client';

import { useRef, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
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
                    I&apos;m{' '}
                    <span id="role" ref={el}>
                        {' '}
                    </span>
                    
                    {/* Perbaikan Tata Letak: Memaksa Flexbox sejajar, membuang kelas .boxes pengganggu */}
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
                        <a 
                            className="button" 
                            href="https://calendly.com/aliahmadarrosyid/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ margin: 0 }} // Menimpa margin aneh dari hero.css
                        >
                            Book an Audit
                        </a>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <a href="https://github.com/alirosyid" target="_blank" rel="noopener noreferrer" style={{ color: '#00a99d', transition: '0.2s', display: 'flex' }}>
                                <Github size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/alirosyid-ai-automation" target="_blank" rel="noopener noreferrer" style={{ color: '#00a99d', transition: '0.2s', display: 'flex' }}>
                                <Linkedin size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Perbaikan Jarak: Membuang div px50 ganda yang membuat ruang kosong raksasa */}
            <div id="about" style={{ paddingTop: '60px' }} />
        </>
    );
}
