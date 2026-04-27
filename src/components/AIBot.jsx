import React from 'react';

const SYSTEM = `You are an AI assistant representing Rupam Bhakta, a Full-Stack Developer & AI/Automation Engineer at Micronix System in Kolkata, India. Reply in first person AS Rupam, but warmly and concisely (max 3 short sentences). Key facts:
- Stack: MERN (MongoDB, Express, React, Node), Next.js, Tailwind, JavaScript/Java
- Specialties: agentic AI systems, n8n workflow automation, real-time apps
- Notable projects: NexTalk (real-time chat with Socket.IO + JWT), Eventure (Next.js + Strapi event/QR platform)
- Education: B.Tech CSE, Calcutta Institute of Technology, 2025, CGPA 8.2
- Past: ASP OL Media (email infra, DNS/SMTP, Mar-Jul 2025)
- Contact: rupambhakta2020@gmail.com, +91 91442 68665, github.com/rupambhakta
- Available for freelance / full-time / interesting AI experiments.
If asked for contact, politely point them to the contact section. Stay on topic — politely deflect off-topic asks.`;

export default function AIBot() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([
    { who: 'bot', text: "Hey 👋 I'm Rupam's AI twin. Ask me about his projects, stack, availability, or just say hi." },
  ]);
  const [input, setInput] = React.useState('');
  const [pending, setPending] = React.useState(false);
  const msgsRef = React.useRef(null);

  React.useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [msgs, pending]);

  const send = async (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || pending) return;
    setInput('');
    setMsgs(m => [...m, { who: 'user', text: q }]);
    setPending(true);
    try {
      const reply = await window.claude?.complete?.({
        messages: [{ role: 'user', content: `${SYSTEM}\n\nUser: ${q}\n\nRupam:` }],
      });
      setMsgs(m => [...m, { who: 'bot', text: (reply || '').trim() || "I'm not sure how to answer that — try emailing rupambhakta2020@gmail.com." }]);
    } catch {
      setMsgs(m => [...m, { who: 'bot', text: "Sorry, I'm offline right now. Email me at rupambhakta2020@gmail.com." }]);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <button className="bot-fab" id="botFab" data-cursor="hover" aria-label="Open chat" onClick={() => setOpen(o => !o)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
      <div className={`bot-panel ${open ? 'open' : ''}`}>
        <div className="bot-head">
          <div className="bot-avatar">R</div>
          <div>
            <div className="bot-title">Ask Rupam (AI)</div>
            <div className="bot-sub">trained on my bio · powered by Claude</div>
          </div>
        </div>
        <div className="bot-msgs" ref={msgsRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`bot-msg ${m.who}`}>{m.text}</div>
          ))}
          {pending && (
            <div className="bot-msg bot">
              <span className="typing"><i></i><i></i><i></i></span>
            </div>
          )}
        </div>
        <form className="bot-input" onSubmit={send}>
          <input type="text" value={input} onChange={e => setInput(e.target.value)}
                 placeholder="What did you build with n8n?" autoComplete="off" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
