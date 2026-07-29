import { poppins } from '@/utils/fonts';
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
                        <div className="text">Tech Stack</div>
                        <br />
                        <div className="textMain">
                            n8n, Docker &amp; Linux<br />
                            Python &amp; FastAPI
                            <br />
                            Groq, Llama &amp; Private AI
                        </div>
                        <div className="btnC">
                            <a
                                className="btn btn-custom btn-lg btn-about a"
                                href="mailto:ali@alirosyid-architect.cloud"
                            >
                                {' '}
                                Schedule Discovery{' '}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottomC" />
            </div>
        </>
    );
}
