import { ArrowUpRight, Buildings, Car, ChefHat, Elevator, ShieldCheck, SwimmingPool } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/common/SectionHeading";

const amenities = [
  [SwimmingPool, "Private pool"],
  [Car, "4 parking"],
  [Elevator, "Private lift"],
  [ChefHat, "Chef’s kitchen"],
  [ShieldCheck, "Concierge"],
  [Buildings, "360° views"],
];

export function FeaturedSection() {
  return (
    <section className="section shell" id="featured">
      <SectionHeading eyebrow="Featured listing">The <em>Obsidian</em><br />Tower Penthouse</SectionHeading>
      <div className="featured">
        <div className="featured__media">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" alt="Obsidian Tower penthouse interior" />
          <div className="featured__overlay">
            <span className="tag">Exclusive listing</span>
            <h3>Obsidian Tower</h3>
            <p>Downtown Dubai, UAE</p>
            <div><strong>$12.5M</strong><Link className="circle-link" to="/properties/marina-heights"><ArrowUpRight /></Link></div>
          </div>
        </div>
        <div className="featured__details">
          <dl>
            <div><dt>Property type</dt><dd>Ultra-luxury penthouse — 52nd floor</dd></div>
            <div><dt>Total area</dt><dd>8,400 sq ft · 780 m²</dd></div>
            <div><dt>Configuration</dt><dd>5 beds · 6 baths · private terrace</dd></div>
          </dl>
          <div>
            <p className="detail-label">Amenities</p>
            <div className="amenities">
              {amenities.map(([Icon, label]) => <span key={label}><Icon />{label}</span>)}
            </div>
          </div>
          <div className="featured__actions">
            <Link className="button button--primary" to="/contact">Schedule viewing</Link>
            <button className="text-link" onClick={() => window.print()}>Download brochure <ArrowUpRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
