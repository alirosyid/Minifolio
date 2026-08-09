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
                        <div className="text">AI Backend & Automation Architect</div>
                        <br />
                        <div className="textMain">
                            Enterprises today don&apos;t just need AI wrappers; they need intelligent pipelines that are secure, deterministic, and fully integrated with their proprietary data. I engineer robust backend architectures utilizing Python, FastAPI, Redis, and containerized environments. I build the invisible event-driven engines that ensure zero data leakage (PII compliant) and eliminate manual operational bottlenecks.
                        </div>
                    </div>
                    <div className="rightC">
                        <div className="text">Core Architecture Stack</div>
                        <br />
                        <div className="textMain" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Terminal size={20} color="#00a99d" />
                                <span>Python, FastAPI & Celery</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Bot size={20} color="#00a99d" />
                                <span>PostgreSQL & Redis (Stateful Memory)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <ShieldCheck size={20} color="#00a99d" />
                                <span>Qdrant & LangChain (Enterprise RAG)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Container size={20} color="#00a99d" />
                                <span>Docker, Linux & n8n Routing</span>
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
