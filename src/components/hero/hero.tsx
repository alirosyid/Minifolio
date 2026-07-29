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
                    
                    {/* High-conversion CTA & Socials Layout */}
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
                        <a className="button" href="https://calendly.com/aliahmadarrosyid/30min" target="_blank" rel="noopener noreferrer">
                            Book an Audit
                        </a>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://github.com/alirosyid" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', cursor: 'pointer' }}>
                                <Github size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/alirosyid-ai-automation" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', cursor: 'pointer' }}>
                                <Linkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px50" />
            <div className="px50" id="about" />
        </>
    );
}
