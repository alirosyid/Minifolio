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
                        <div className="right">AI WORKFLOW ORCHESTRATION</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <Cpu size={40} />
                        </div>
                        <div className="right">PRIVATE LLM INTEGRATION</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <Database size={40} />
                        </div>
                        <div className="right">BACKEND & INFRASTRUCTURE</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <MonitorPlay size={40} />
                        </div>
                        <div className="right">PROGRAMMATIC MEDIA</div>
                    </div>
                    <div className="buttonCont">
                        <a
                            className="btn btn-custom btn-lg btn-skills"
                            href="https://github.com/alirosyid"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
