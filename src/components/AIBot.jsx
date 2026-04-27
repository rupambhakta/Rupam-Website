import React from 'react';

const HF_SPACE = 'rohanday28/rupam_personal_resume';

let clientPromise = null;
function getClient() {
  if (!clientPromise) {
    clientPromise = import('@gradio/client').then(({ Client }) => Client.connect(HF_SPACE));
  }
  return clientPromise;
}

function extractText(data) {
  if (data == null) return '';
  if (typeof data === 'string') return data;
  if (Array.isArray(data)) return data.map(extractText).filter(Boolean).join('\n');
  if (typeof data === 'object') {
    if (typeof data.response === 'string') return data.response;
    if (typeof data.text === 'string') return data.text;
    if (typeof data.message === 'string') return data.message;
    return JSON.stringify(data);
  }
  return String(data);
}

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
      const client = await getClient();
      const result = await client.predict('/chat', { message: q });
      const reply = extractText(result?.data).trim();
      setMsgs(m => [...m, { who: 'bot', text: reply || "I'm not sure how to answer that — try emailing rupambhakta2020@gmail.com." }]);
    } catch (err) {
      console.error('Gradio call failed', err);
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
