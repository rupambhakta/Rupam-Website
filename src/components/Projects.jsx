import React from 'react';

const PROJECTS = [
  {
    id: 'nextalk',
    tag: 'REAL-TIME · MERN',
    title: 'NexTalk',
    desc: 'Full-stack real-time chat with live presence, OTP auth, JWT, bcrypt security, and Cloudinary media. Try the live demo →',
    stack: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'JWT', 'Tailwind'],
    category: 'web',
    demo: 'NexTalkDemo',
  },
  {
    id: 'eventure',
    tag: 'PLATFORM · NEXT.JS',
    title: 'Eventure',
    desc: 'Event resource management connecting venue owners with organizers. QR check-ins, bookings, real-time scanning. Scan a QR to test →',
    stack: ['Next.js', 'Strapi', 'QR', 'Tailwind', 'Postgres'],
    category: 'web',
    demo: 'EventureDemo',
  },
  {
    id: 'agent-ops',
    tag: 'AGENTIC AI · n8n',
    title: 'OpsAgent',
    desc: 'An autonomous AI agent that triages support tickets, queries internal docs via RAG, and posts to Slack. Watch it reason →',
    stack: ['n8n', 'Claude', 'RAG', 'Webhooks', 'Slack'],
    category: 'ai',
    demo: 'OpsAgentDemo',
  },
  {
    id: 'auto-pipe',
    tag: 'AUTOMATION · n8n',
    title: 'LeadPipe',
    desc: 'A multi-step n8n automation that captures leads, scores them with an LLM, enriches via APIs, and routes to the right inbox.',
    stack: ['n8n', 'OpenAI', 'Webhooks', 'Sheets', 'Email'],
    category: 'automation',
    demo: 'LeadPipeDemo',
  },
  {
    id: 'resume-bot',
    tag: 'AGENTIC AI · HUGGING FACE',
    title: 'Rupam AI Twin',
    desc: 'A personal resume chatbot trained on my bio, projects, and stack. Hosted as a Gradio Space on Hugging Face — ask it anything about me.',
    stack: ['Hugging Face', 'Gradio', 'LLM', 'Python'],
    category: 'ai',
    demo: 'ResumeBotDemo',
  },
];

function NexTalkDemo() {
  const [msgs, setMsgs] = React.useState([
    { who: 'Aarav', text: 'yo, you up?', at: '14:02', me: false },
    { who: 'You', text: 'always. what\'s up?', at: '14:02', me: true },
    { who: 'Aarav', text: 'check this out — group chat works ⚡', at: '14:03', me: false },
  ]);
  const [draft, setDraft] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [msgs, typing]);

  const send = () => {
    if (!draft.trim()) return;
    const now = new Date().toTimeString().slice(0,5);
    setMsgs(m => [...m, { who: 'You', text: draft, at: now, me: true }]);
    setDraft('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const replies = ['nice 🔥', 'haha for real', 'pushing the latest commit now', 'lol same', 'send me the link?'];
      setMsgs(m => [...m, { who: 'Aarav', text: replies[Math.floor(Math.random()*replies.length)], at: new Date().toTimeString().slice(0,5), me: false }]);
    }, 900 + Math.random() * 800);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', height: '100%' }}>
      <div style={{ background: '#0a0a0a', borderRight: '1px solid #1a1a1c', padding: 16 }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#6e6e72', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Chats</div>
        {[{n:'Aarav', a:true},{n:'Design Team',a:false},{n:'Sneha',a:false},{n:'#general',a:false}].map(c => (
          <div key={c.n} style={{ padding: '10px 12px', borderRadius: 6, marginBottom: 4, background: c.a ? '#0f0f10' : 'transparent', borderLeft: c.a ? '2px solid #00ff88' : '2px solid transparent', fontSize: 13 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.a ? '#00ff88' : '#2a2a2e' }}></div>
              {c.n}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid #1a1a1c', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#00ff88,#0088ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000' }}>A</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Aarav</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#00ff88' }}>● online</div>
          </div>
        </div>
        <div ref={ref} style={{ flex: 1, padding: 20, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ alignSelf: m.me ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
              <div style={{ padding: '10px 14px', borderRadius: 14, background: m.me ? '#00ff88' : '#0f0f10', color: m.me ? '#000' : '#f5f5f5', borderBottomRightRadius: m.me ? 4 : 14, borderBottomLeftRadius: m.me ? 14 : 4, fontSize: 14, lineHeight: 1.4, border: m.me ? 'none' : '1px solid #1a1a1c' }}>
                {m.text}
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6e6e72', marginTop: 4, textAlign: m.me ? 'right' : 'left' }}>{m.at}</div>
            </div>
          ))}
          {typing && (
            <div style={{ alignSelf: 'flex-start', padding: '10px 14px', background: '#0f0f10', border: '1px solid #1a1a1c', borderRadius: 14, borderBottomLeftRadius: 4 }}>
              <span className="typing"><i></i><i></i><i></i></span>
            </div>
          )}
        </div>
        <div style={{ padding: 16, borderTop: '1px solid #1a1a1c', display: 'flex', gap: 8 }}>
          <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Type a message…"
            style={{ flex: 1, background: '#0f0f10', border: '1px solid #1a1a1c', color: '#f5f5f5', padding: '10px 14px', borderRadius: 8, fontFamily: 'inherit', fontSize: 14 }}/>
          <button onClick={send} style={{ padding: '10px 18px', background: '#00ff88', color: '#000', border: 0, borderRadius: 8, fontWeight: 600 }}>Send</button>
        </div>
      </div>
    </div>
  );
}

function EventureDemo() {
  const [scanned, setScanned] = React.useState(false);
  const [event] = React.useState({
    name: 'TechFest 2026',
    venue: 'Bangalore International Center',
    date: 'May 15, 2026',
    attendees: 247,
    cap: 300,
  });
  return (
    <div style={{ padding: 32, height: '100%', overflowY: 'auto', background: '#050505' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }}>
        <div style={{ background: '#0f0f10', border: '1px solid #1a1a1c', padding: 24, borderRadius: 8 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#00ff88', textTransform: 'uppercase', letterSpacing: '.1em' }}>Live Event</div>
          <div style={{ fontSize: 24, fontWeight: 700, margin: '8px 0' }}>{event.name}</div>
          <div style={{ color: '#b5b5b8', fontSize: 14, marginBottom: 20 }}>{event.venue} · {event.date}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20 }}>
            <div style={{ padding: 14, background: '#000', border: '1px solid #1a1a1c', borderRadius: 6 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#00ff88' }}>{event.attendees + (scanned ? 1 : 0)}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6e6e72', textTransform: 'uppercase' }}>Checked-in</div>
            </div>
            <div style={{ padding: 14, background: '#000', border: '1px solid #1a1a1c', borderRadius: 6 }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>{event.cap}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6e6e72', textTransform: 'uppercase' }}>Capacity</div>
            </div>
          </div>
          <div style={{ height: 6, background: '#1a1a1c', borderRadius: 3, marginTop: 16, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${((event.attendees + (scanned?1:0)) / event.cap) * 100}%`, background: '#00ff88', transition: 'width .5s' }}></div>
          </div>
        </div>
        <div style={{ background: '#0f0f10', border: '1px solid #1a1a1c', padding: 24, borderRadius: 8, textAlign: 'center' }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#6e6e72', textTransform: 'uppercase', letterSpacing: '.1em' }}>Your Pass</div>
          <div style={{ width: 180, height: 180, background: '#fff', margin: '20px auto', display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: 1, padding: 12, borderRadius: 8 }}>
            {Array.from({ length: 225 }).map((_, i) => (
              <div key={i} style={{ background: ((i * 7919 + 31) % 5 < 2) ? '#000' : 'transparent', aspectRatio: 1 }}></div>
            ))}
          </div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#6e6e72' }}>EVT-{event.name.replace(/\s/g,'').toUpperCase().slice(0,8)}-7K9X</div>
          <button onClick={() => setScanned(true)} disabled={scanned}
            style={{ marginTop: 20, padding: '12px 24px', background: scanned ? '#1a1a1c' : '#00ff88', color: scanned ? '#6e6e72' : '#000', border: 0, borderRadius: 999, fontWeight: 600, fontSize: 13, width: '100%' }}>
            {scanned ? '✓ Checked in' : 'Simulate scan'}
          </button>
        </div>
      </div>
    </div>
  );
}

function OpsAgentDemo() {
  const [running, setRunning] = React.useState(false);
  const [steps, setSteps] = React.useState([]);
  const SCRIPT = [
    { kind: 'thought', text: 'New ticket received: "Login broken on mobile, urgent". Classifying severity…' },
    { kind: 'tool', name: 'classify(severity)', text: 'severity=high · category=auth · platform=mobile' },
    { kind: 'tool', name: 'rag.query(docs)', text: 'Found 3 related docs · "Mobile JWT expiry bug v2.4.1"' },
    { kind: 'thought', text: 'Likely a known JWT refresh edge-case. Drafting response…' },
    { kind: 'tool', name: 'slack.post(#oncall)', text: 'Notified @auth-team · ticket #4471 attached' },
    { kind: 'tool', name: 'reply.draft()', text: '"Hi! We\'ve identified this as our v2.4.1 mobile JWT issue. Hotfix deploys in ~2h."' },
    { kind: 'done', text: 'Resolved in 4.2s · escalated · auto-replied · logged' },
  ];

  const run = async () => {
    setSteps([]); setRunning(true);
    for (const s of SCRIPT) {
      await new Promise(r => setTimeout(r, 700));
      setSteps(prev => [...prev, s]);
    }
    setRunning(false);
  };

  return (
    <div style={{ padding: 32, height: '100%', overflowY: 'auto', background: '#050505', fontFamily: 'JetBrains Mono' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: '#00ff88', textTransform: 'uppercase' }}>Agent · OpsAgent v1.2</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#f5f5f5', fontFamily: 'Calibri, Carlito, sans-serif' }}>Triaging incoming support ticket</div>
          </div>
          <button onClick={run} disabled={running}
            style={{ padding: '10px 18px', background: running ? '#1a1a1c' : '#00ff88', color: running ? '#6e6e72' : '#000', border: 0, borderRadius: 999, fontWeight: 600, fontSize: 12 }}>
            {running ? 'Reasoning…' : '▶ Run agent'}
          </button>
        </div>
        <div style={{ background: '#000', border: '1px solid #1a1a1c', borderRadius: 8, padding: 20, fontSize: 13, lineHeight: 1.6, minHeight: 400 }}>
          {steps.length === 0 && <div style={{ color: '#6e6e72' }}>{'// click "Run agent" to start. The agent will classify, search docs via RAG, notify slack, and draft a reply.'}</div>}
          {steps.map((s, i) => (
            <div key={i} style={{ marginBottom: 14, animation: 'fadeUp .3s' }}>
              {s.kind === 'thought' && (<><span style={{ color: '#6e6e72' }}>thought:</span> <span style={{ color: '#b5b5b8' }}>{s.text}</span></>)}
              {s.kind === 'tool' && (<><span style={{ color: '#00ff88' }}>{'>'} {s.name}</span><div style={{ color: '#f5f5f5', paddingLeft: 16, marginTop: 2 }}>{s.text}</div></>)}
              {s.kind === 'done' && (<div style={{ color: '#00ff88', fontWeight: 700, padding: '8px 12px', background: 'rgba(0,255,136,.08)', borderLeft: '2px solid #00ff88' }}>✓ {s.text}</div>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeadPipeDemo() {
  const [active, setActive] = React.useState(0);
  const NODES = [
    { name: 'Webhook', sub: 'POST /lead', icon: '⚡' },
    { name: 'Validate', sub: 'zod schema', icon: '✓' },
    { name: 'LLM Score', sub: 'Claude · 0-100', icon: '🧠' },
    { name: 'Enrich', sub: 'Clearbit API', icon: '◈' },
    { name: 'Route', sub: 'if/else', icon: '⇶' },
    { name: 'Email', sub: 'sales@', icon: '✉' },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % NODES.length), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ padding: 40, height: '100%', overflow: 'auto', background: '#050505' }}>
      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#00ff88', textTransform: 'uppercase', textAlign: 'center', marginBottom: 8 }}>n8n workflow · LeadPipe</div>
      <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 700, marginBottom: 32 }}>Live execution trace</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, flexWrap: 'wrap', maxWidth: 900, margin: '0 auto' }}>
        {NODES.map((n, i) => (
          <React.Fragment key={i}>
            <div style={{
              width: 120, padding: 16, background: i === active ? '#0f1f15' : '#0f0f10',
              border: `1px solid ${i === active ? '#00ff88' : '#1a1a1c'}`,
              borderRadius: 8, textAlign: 'center', transition: 'all .3s',
              boxShadow: i === active ? '0 0 24px rgba(0,255,136,.3)' : 'none',
            }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{n.icon}</div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{n.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6e6e72', marginTop: 2 }}>{n.sub}</div>
            </div>
            {i < NODES.length - 1 && (
              <div style={{ width: 20, height: 1, background: i < active ? '#00ff88' : '#2a2a2e', transition: 'background .3s' }}></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ maxWidth: 720, margin: '32px auto 0', background: '#000', border: '1px solid #1a1a1c', borderRadius: 8, padding: 16, fontFamily: 'JetBrains Mono', fontSize: 12, lineHeight: 1.6 }}>
        <div style={{ color: '#6e6e72' }}>{'// last execution'}</div>
        <div><span style={{ color: '#00ff88' }}>{'>'} </span>lead.email = "founder@startup.io"</div>
        <div><span style={{ color: '#00ff88' }}>{'>'} </span>llm.score = <b style={{ color: '#f5f5f5' }}>87</b> · <span style={{ color: '#b5b5b8' }}>"high intent, technical buyer"</span></div>
        <div><span style={{ color: '#00ff88' }}>{'>'} </span>enriched = {'{ company: "Acme AI", size: "11-50", funding: "$2M seed" }'}</div>
        <div><span style={{ color: '#00ff88' }}>{'>'} </span>routed → <b style={{ color: '#00ff88' }}>sales@micronix.dev</b></div>
        <div style={{ color: '#00ff88', marginTop: 4 }}>✓ done · 1.8s</div>
      </div>
    </div>
  );
}

function ResumeBotDemo() {
  return (
    <iframe
      src="https://rohanday28-rupam-personal-resume.hf.space"
      title="Rupam AI Twin · Hugging Face Space"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, background: '#050505', display: 'block' }}
      allow="clipboard-read; clipboard-write"
    />
  );
}

const DEMOS = { NexTalkDemo, EventureDemo, OpsAgentDemo, LeadPipeDemo, ResumeBotDemo };

function ProjectPreview({ id }) {
  if (id === 'nextalk') return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at 30% 50%, rgba(0,255,136,.1), transparent 60%)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, transform: 'rotate(-2deg)' }}>
        <div style={{ alignSelf: 'flex-start', padding: '8px 12px', background: '#0f0f10', border: '1px solid #1a1a1c', borderRadius: 12, borderBottomLeftRadius: 2, fontSize: 13 }}>yo, you up?</div>
        <div style={{ alignSelf: 'flex-end', padding: '8px 12px', background: '#00ff88', color: '#000', borderRadius: 12, borderBottomRightRadius: 2, fontSize: 13, fontWeight: 600 }}>always 🔥</div>
        <div style={{ alignSelf: 'flex-start', padding: '8px 12px', background: '#0f0f10', border: '1px solid #1a1a1c', borderRadius: 12, borderBottomLeftRadius: 2, fontSize: 13 }}>group chat works ⚡</div>
      </div>
    </div>
  );
  if (id === 'eventure') return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 120, height: 120, background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 1, padding: 8, borderRadius: 6 }}>
        {Array.from({length: 144}).map((_,i)=>(<div key={i} style={{background: ((i*7919+31)%5<2)?'#000':'transparent', aspectRatio:1}}></div>))}
      </div>
    </div>
  );
  if (id === 'agent-ops') return (
    <div style={{ position: 'absolute', inset: 0, padding: 24, fontFamily: 'JetBrains Mono', fontSize: 11, color: '#6e6e72', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
      <div>thought: <span style={{color:'#b5b5b8'}}>classifying ticket…</span></div>
      <div style={{color:'#00ff88'}}>{'>'} rag.query(docs)</div>
      <div style={{paddingLeft:12,color:'#f5f5f5'}}>found 3 related docs</div>
      <div style={{color:'#00ff88'}}>{'>'} slack.post(#oncall)</div>
      <div style={{color:'#00ff88',marginTop:4}}>✓ resolved in 4.2s</div>
    </div>
  );
  if (id === 'resume-bot') return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at 70% 50%, rgba(0,255,136,.08), transparent 60%)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 220 }}>
        <div style={{ alignSelf: 'flex-end', padding: '8px 12px', background: '#00ff88', color: '#000', borderRadius: 12, borderBottomRightRadius: 2, fontSize: 13, fontWeight: 600 }}>tell me about Rupam</div>
        <div style={{ alignSelf: 'flex-start', padding: '8px 12px', background: '#0f0f10', border: '1px solid #1a1a1c', borderRadius: 12, borderBottomLeftRadius: 2, fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#00ff88', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>R</div>
          full-stack + AI engineer, MERN…
        </div>
      </div>
    </div>
  );
  if (id === 'auto-pipe') return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
      {['⚡','✓','🧠','◈','✉'].map((ic,i)=>(
        <React.Fragment key={i}>
          <div style={{width:48,height:48,background:'#0f0f10',border:'1px solid #1a1a1c',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{ic}</div>
          {i<4 && <div style={{width:12,height:1,background:'#00ff88'}}></div>}
        </React.Fragment>
      ))}
    </div>
  );
  return null;
}

export default function Projects() {
  const [filter, setFilter] = React.useState('all');
  const [demo, setDemo] = React.useState(null);
  const filtered = PROJECTS.filter(p => filter === 'all' || p.category === filter);
  const FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'Agentic AI' },
    { id: 'automation', label: 'Automation' },
    { id: 'web', label: 'Web Apps' },
  ];

  React.useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setDemo(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const DemoComponent = demo ? DEMOS[demo.demo] : null;

  return (
    <>
      <div className="filter-row reveal in">
        {FILTERS.map(f => (
          <button key={f.id} className={`filter-chip ${filter===f.id?'active':''}`} onClick={() => setFilter(f.id)} data-cursor="hover">{f.label}</button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map(p => (
          <div key={p.id} className="project-card reveal in" data-cursor="hover">
            <div className="project-preview"><ProjectPreview id={p.id} /></div>
            <div className="project-body">
              <div className="project-tag">{p.tag}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              <div className="project-actions">
                <button className="play-pill" onClick={() => setDemo(p)} data-cursor="hover">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  Play demo
                </button>
                <button className="ghost-pill" data-cursor="hover">Source ↗</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`demo-modal ${demo?'open':''}`} onClick={e => e.target.classList.contains('demo-modal') && setDemo(null)}>
        <div className="demo-shell">
          <div className="demo-head">
            <div className="dots"><i></i><i></i><i></i></div>
            <div className="demo-title">{demo?.title} · interactive demo</div>
            <button className="demo-close" onClick={() => setDemo(null)} data-cursor="hover">×</button>
          </div>
          <div className="demo-body">
            {DemoComponent && <DemoComponent />}
          </div>
        </div>
      </div>
    </>
  );
}
