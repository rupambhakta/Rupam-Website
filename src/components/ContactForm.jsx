import React from 'react';

export default function ContactForm() {
  const [sent, setSent] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`From: ${data.get('name')} <${data.get('email')}>\n\n${data.get('msg')}`);
    window.location.href = `mailto:rupambhakta2020@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="contact-form reveal" onSubmit={onSubmit}>
      <div className="field"><label>Your name</label><input type="text" name="name" required placeholder="Jane Doe"/></div>
      <div className="field"><label>Email</label><input type="email" name="email" required placeholder="jane@company.com"/></div>
      <div className="field"><label>What are you building?</label><textarea name="msg" required placeholder="A quick note on the project, timeline, and what you need from me…"></textarea></div>
      <button type="submit" className="form-submit" data-cursor="hover">Send message →</button>
      {sent && <div className="form-success">✓ Opening your email client… Thanks for reaching out!</div>}
    </form>
  );
}
