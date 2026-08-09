import { Server, Workflow, BrainCircuit, Webhook, ArrowRight, Database, MonitorSmartphone } from "lucide-react";
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
      
      <div style={{ maxWidth: '900px', margin: '0 auto 50px auto', background: '#f8f9fa', padding: '35px', borderRadius: '12px', border: '1px solid #eaeaea' }}>
        <div style={{ textAlign: 'center', fontSize: '13px', color: '#666', marginBottom: '30px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
          Event-Driven RAG & Automation Pipeline
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <Webhook size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>API Gateway</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <Database size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>Redis Broker</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <BrainCircuit size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>Celery Workers</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <Workflow size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>Vector DB</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <MonitorSmartphone size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>Secure Output</span>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="serviceItem">
          <div className="serviceIcon">
            <Workflow size={40} />
          </div>
          <div className="serviceText">
            <div className="text">Stateful AI Orchestration</div>
            <div className="textMain">
              Engineered closed-loop outbound engines (n8n, Llama-3). Designed custom RAM hijacking and deterministic caching to strictly prevent duplicate outreach, saving clients 100+ hours of manual SDR data entry monthly.
            </div>
          </div>
        </div>

        <div className="serviceItem">
          <div className="serviceIcon">
            <BrainCircuit size={40} />{" "}
          </div>
          <div className="serviceText">
            <div className="text">Enterprise RAG & LLM Engine</div>
            <div className="textMain">
              Deployed scalable vector search pipelines (FastAPI, Qdrant) with asynchronous processing. Implemented parallel grading microservices to systematically block LLM hallucinations and enforce strict PII redaction.
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
              Architected decoupled, event-driven backends using Redis and Celery. Bypassed API timeout bottlenecks and reduced query latency by shifting heavy LLM inference to background worker nodes within secure Docker networks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
