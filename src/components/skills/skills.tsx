import { Workflow, Cpu, Database, MonitorPlay } from 'lucide-react';
import "./skills.css";

export default function Skills() {
    return (
        <>
            <div id="skills" style={{ marginBottom: "60px" }} />
            <div className="skillsC">
                <div className="title">SKILLS</div>
                <div className="titleGap" />
                <div className="titleGap" />
                <div className="titleSmall">The Tech Stack</div>
                <div className="containerGap" />
                <div className="titleGap" />
                <div className="titleGap" />
                <div className="container">
                    <div className="boxes">
                        <div className="left">
                            <Workflow size={40} />
                        </div>
                        <div className="right">B2B PIPELINE AUTOMATION</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <Cpu size={40} />
                        </div>
                        <div className="right">ENTERPRISE RAG & VECTOR DBS</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <Database size={40} />
                        </div>
                        <div className="right">EVENT-DRIVEN BACKEND (FASTAPI)</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <MonitorPlay size={40} />
                        </div>
                        <div className="right">DOCKER & CLOUD ORCHESTRATION</div>
                    </div>
                    
                    <div className="buttonCont">
                        <a
                            className="btn btn-custom btn-lg btn-skills"
                            href="https://github.com/alirosyid"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ padding: '15px 35px', fontWeight: 'bold' }}
                        >
                            View GitHub Repositories
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
