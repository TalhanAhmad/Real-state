const labels = ["Penthouse Collection", "Oceanfront Estates", "Urban Sanctuaries", "Mountain Retreats", "Heritage Villas", "Private Islands"];

export function MarqueeSection() {
  return (
    <section className="marquee" aria-label="Property collections">
      <div className="marquee__track">
        {[...labels, ...labels].map((label, index) => <span key={`${label}-${index}`}>{label}<i /></span>)}
      </div>
    </section>
  );
}
