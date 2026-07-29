import { Server, Workflow, BrainCircuit } from "lucide-react";
import "./services.css";

export default function Services() {
  return (
    <div className="servicesC" id="services" style={{ marginBottom: "60px" }}>
      <div className="title">SOLUTIONS</div>
      <div className="titleGap" />
      <div className="titleGap" />
      <div className="titleSmall">Enterprise Case Studies</div>
      <div className="containerGap" />
      <div className="titleGap" />
      <div className="container">
        
        <div className="serviceItem">
          <div className="serviceIcon">
            <Workflow size={40} />
          </div>
          <div className="serviceText">
            <div className="text">Stateful Lead Orchestration</div>
            <div className="textMain">
              Engineered custom n8n caching nodes to track 1,000+ endpoints in real-time memory, reducing redundant API processing costs by 40% and eliminating rate limits.
            </div>
          </div>
        </div>

        <div className="serviceItem">
          <div className="serviceIcon">
            <BrainCircuit size={40} />{" "}
          </div>
          <div className="serviceText">
            <div className="text">Autonomous LLM Engine</div>
            <div className="textMain">
              Migrated corporate outreach to ultra-fast Llama models via Groq. Delivered context-aware, hyper-personalized sales agents at scale, achieving a 3x faster response time with zero human intervention.
            </div>
          </div>
        </div>

        <div className="serviceItem">
          <div className="serviceIcon">
            <Server size={40} />{" "}
          </div>
          <div className="serviceText">
            <div className="text">Private AI Infrastructure</div>
            <div className="textMain">
              Deployed secure, containerized backends (FastAPI/Docker) paired with custom OAuth routing to keep sensitive corporate data strictly isolated and 100% compliant.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
