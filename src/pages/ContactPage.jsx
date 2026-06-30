import { CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <main className="page contact-page shell">
      <div>
        <p className="eyebrow">Private consultation</p>
        <h1>Let’s find your<br /><em>next address.</em></h1>
        <p>Tell us what you are looking for. A senior advisor will contact you to arrange a discreet consultation.</p>
        <div className="contact-details"><span>Dubai · New York · London</span><a href="mailto:concierge@luxerealty.com">concierge@luxerealty.com</a><a href="tel:+97145550188">+971 4 555 0188</a></div>
      </div>
      {sent ? (
        <div className="form-success"><CheckCircle size={44} weight="thin" /><h2>Thank you.</h2><p>Your private advisor will be in touch shortly.</p><button className="text-link" onClick={() => setSent(false)}>Send another enquiry</button></div>
      ) : (
        <form className="contact-form" onSubmit={submit}>
          <label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
          <label>Email address<input type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label>
          <label>Area of interest<select name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Buying a residence</option><option>Selling a property</option><option>Investment advisory</option><option>Private tour</option></select></label>
          <label>How can we help?<textarea name="message" required rows="5" placeholder="Share a little about what you are looking for…" /></label>
          <button className="button button--primary" type="submit">Request consultation</button>
        </form>
      )}
    </main>
  );
}
