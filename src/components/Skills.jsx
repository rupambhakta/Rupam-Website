import React from 'react';

const SKILL_CATEGORIES = {
  'AI & Agents': [
    { name: 'Agentic AI', meta: 'tool-use · planning', lvl: 0.92 },
    { name: 'LLM Pipelines', meta: 'RAG · prompts', lvl: 0.88 },
    { name: 'n8n', meta: 'workflows · webhooks', lvl: 0.95 },
    { name: 'Claude / GPT APIs', meta: 'chat · tools', lvl: 0.9 },
    { name: 'Vector DBs', meta: 'pinecone · pgvector', lvl: 0.78 },
    { name: 'Voice & Vision', meta: 'whisper · clip', lvl: 0.7 },
  ],
  'Front-End': [
    { name: 'React.js', meta: 'hooks · suspense', lvl: 0.95 },
    { name: 'Next.js', meta: 'app router · SSR', lvl: 0.9 },
    { name: 'Tailwind CSS', meta: 'design systems', lvl: 0.93 },
    { name: 'TypeScript', meta: 'strict mode', lvl: 0.82 },
    { name: 'Framer Motion', meta: 'micro-interactions', lvl: 0.78 },
    { name: 'JavaScript', meta: 'ES2024+', lvl: 0.96 },
  ],
  'Back-End': [
    { name: 'Node.js', meta: 'runtime · streams', lvl: 0.94 },
    { name: 'Express.js', meta: 'middleware · REST', lvl: 0.92 },
    { name: 'Socket.IO', meta: 'realtime · rooms', lvl: 0.88 },
    { name: 'Strapi CMS', meta: 'headless · plugins', lvl: 0.85 },
    { name: 'JWT · Auth', meta: 'OTP · bcrypt', lvl: 0.9 },
    { name: 'Java', meta: 'OOP · spring basics', lvl: 0.7 },
  ],
  'Data & Infra': [
    { name: 'MongoDB', meta: 'aggregation · atlas', lvl: 0.9 },
    { name: 'SQL', meta: 'postgres basics', lvl: 0.7 },
    { name: 'Cloudinary', meta: 'media pipeline', lvl: 0.85 },
    { name: 'Git / GitHub', meta: 'flow · actions', lvl: 0.93 },
    { name: 'Docker', meta: 'compose · ci', lvl: 0.72 },
    { name: 'Vercel / Render', meta: 'deploy · edge', lvl: 0.88 },
  ],
};

export default function Skills() {
  const cats = Object.keys(SKILL_CATEGORIES);
  const [active, setActive] = React.useState(cats[0]);
  return (
    <div className="skills-wrap">
      <div className="skills-cat reveal in">
        {cats.map(c => (
          <button key={c} className={`cat-btn ${c === active ? 'active' : ''}`} onClick={() => setActive(c)} data-cursor="hover">
            {c}
          </button>
        ))}
      </div>
      <div className="skills-grid" key={active}>
        {SKILL_CATEGORIES[active].map((s, i) => (
          <div key={s.name} className="skill-chip reveal in" style={{ '--lvl': s.lvl, animation: `fadeUp .5s ${i * 0.05}s both` }} data-cursor="hover">
            <div className="skill-name">{s.name}</div>
            <div className="skill-meta">{s.meta}</div>
            <div className="skill-bar" style={{ '--lvl': s.lvl }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
