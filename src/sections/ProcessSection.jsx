import { SectionHeading } from "../components/common/SectionHeading";

const steps = [
  ["01", "Discovery consultation", "We begin by understanding your vision, lifestyle, and investment goals to create a bespoke search profile."],
  ["02", "Curated shortlist", "Our advisors handpick properties from a private global network, including exceptional off-market opportunities."],
  ["03", "Private viewings", "We arrange discreet, unhurried viewings with your dedicated property specialist, wherever you are."],
  ["04", "Negotiation & close", "Our negotiators secure the best terms and manage every detail through successful completion."],
];

export function ProcessSection() {
  return (
    <section className="process section" id="process">
      <div className="process__grid shell">
        <div>
          <SectionHeading eyebrow="Our method">How we <em>work</em></SectionHeading>
          <div className="steps">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
        <div className="market-card-wrap" aria-label="Luxe Realty market performance">
          <div className="market-card market-card--small"><span>Market index</span><strong>↑ 12.4%</strong><small>YoY growth</small></div>
          <div className="market-card market-card--main">
            <span>Featured asset</span><strong>$12.5M</strong><h3>Obsidian Tower Penthouse</h3>
            <label>Offers <b>78% to ask</b></label><progress value="78" max="100" />
            <label>Interest <b>High</b></label><progress value="92" max="100" />
          </div>
          <div className="market-card market-card--score"><span>Client score</span><strong>98%</strong><small>Satisfaction rate</small></div>
        </div>
      </div>
    </section>
  );
}
