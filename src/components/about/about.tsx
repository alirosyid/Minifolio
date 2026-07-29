import { poppins } from '@/utils/fonts';
import { Terminal, Container, Bot, ShieldCheck } from 'lucide-react';
import "./about.css";

export default function About() {
    return (
        <>
            <div className="aboutC" style={{ marginBottom: "60px" }}>
                <div className="title">ABOUT</div>
                <div className="titleGap" />
                <div className="titleSmall">The Architect</div>
                <div className="containerGap" />
                <div className={`container ${poppins.className}`}>
                    <div className="leftC">
                        <div className="text">Enterprise Systems Architect</div>
                        <br />
                        <div className="textMain">
                            Enterprises today don&apos;t just need AI; they need AI that is secure, predictable, and fully integrated. I leverage advanced workflow orchestration (n8n, Python), containerized local servers (Docker, FastAPI), and ultra-low-latency LLMs (Llama via Groq). I build the invisible engines that run modern companies on autopilot—ensuring zero data leakage and maximum operational ROI.
                        </div>
                    </div>
                    <div className="rightC">
                        <div className="text">Core Stack</div>
                        <br />
                        <div className="textMain" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {/* Visualisasi Tech Stack dengan Icon */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Terminal size={20} color="#00a99d" />
                                <span>n8n, Python & FastAPI</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Container size={20} color="#00a99d" />
                                <span>Docker & Linux Infrastructure</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Bot size={20} color="#00a99d" />
                                <span>Groq, Llama & Private LLMs</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <ShieldCheck size={20} color="#00a99d" />
                                <span>Stateful Caching & OAuth</span>
                            </div>
                        </div>
                        
                        <div className="btnC" style={{ marginTop: '25px' }}>
                            <a
                                className="btn btn-custom btn-lg btn-about a"
                                href="https://calendly.com/aliahmadarrosyid/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule Discovery
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottomC" />
            </div>
        </>
    );
}
