'use client';

import { useRef, useEffect } from 'react';
import { Twitter, Linkedin, Instagram, Link } from 'lucide-react';
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
                    <a className="button" href="#about">
                        Know more
                    </a>
                    <a className="buttonIcon">
                        <div className="boxes">
                            <Twitter />
                        </div>
                        <div className="boxes">
                            <Linkedin />
                        </div>
                        <div className="boxes">
                            <Instagram />
                        </div>
                        <div className="boxes">
                            <Link />
                        </div>
                    </a>
                </div>
            </div>
            <div className="px50" />
            <div className="px50" id="about" />
        </>
    );
}
