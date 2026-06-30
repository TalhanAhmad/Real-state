import { Link } from "react-router-dom";

export function CtaSection() {
  return (
    <section className="cta section shell">
      <div className="cta__inner">
        <p className="eyebrow">Begin your journey</p>
        <h2>Find your <em>perfect</em><br />residence today.</h2>
        <p>Speak with a property specialist and access our exclusive off-market collection.</p>
        <div><Link className="button button--primary" to="/contact">Schedule consultation</Link><Link className="button button--outline" to="/properties">View all listings</Link></div>
      </div>
    </section>
  );
}
