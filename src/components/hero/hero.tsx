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
                'an Enterprise Systems Architect',
                'a Private AI Specialist',
                'an Automation Engineer',
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
                    <div className="icons-container" />
                    Hi, my name is <span>Ali Rosyid</span> <br />
                    I&apos;m{' '}
                    <span id="role" ref={el}>
                        {' '}
                    </span>
                    <a className="button" href="mailto:ali@alirosyid-architect.cloud">
                        Book an Audit
                    </a>
                    <a className="buttonIcon">
                        <div className="boxes" onClick={() => window.open('https://github.com/alirosyid', '_blank')} style={{ cursor: 'pointer' }}>
                            <Github />
                        </div>
                        <div className="boxes" onClick={() => window.open('https://www.linkedin.com/in/alirosyid-ai-automation', '_blank')} style={{ cursor: 'pointer' }}>
                            <Linkedin />
                        </div>
                    </a>
                </div>
            </div>
            <div className="px50" />
            <div className="px50" id="about" />
        </>
    );
}
