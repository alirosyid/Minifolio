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
      
      {/* 2. UPGRADE: Visual Workflow Diagram (Arsitektur Pipeline B2B) */}
      <div style={{ maxWidth: '900px', margin: '0 auto 50px auto', background: '#f8f9fa', padding: '35px', borderRadius: '12px', border: '1px solid #eaeaea' }}>
        <div style={{ textAlign: 'center', fontSize: '13px', color: '#666', marginBottom: '30px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600 }}>
          Standard AI Orchestration Pipeline
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <Webhook size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>Data Ingestion</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <Workflow size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>n8n Router</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <BrainCircuit size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>LLM Processing</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <Database size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>Stateful Cache</span>
            </div>
            <ArrowRight size={24} color="#ccc" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00a99d' }}>
                <MonitorSmartphone size={36} />
                <span style={{ fontSize: '13px', marginTop: '10px', fontWeight: 600, color: '#333' }}>Client Output</span>
            </div>
        </div>
      </div>

      {/* Daftar Studi Kasus */}
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
