import { useEffect, useState } from "react";

const testimonials = [
  ["Luxe Realty found our dream home in Monaco within three weeks. Their network is unmatched, and the experience was seamless from first call to keys.", "Alexander Steele", "Co-Founder, Vertex Capital", "AS"],
  ["The team’s knowledge of London is extraordinary. They secured an off-market Mayfair apartment before it reached public listings.", "Priya Sharma", "Managing Director, Apex Group", "PS"],
  ["Every detail was handled with absolute precision. This is luxury service in every sense of the word.", "Khalid Al-Rashid", "Chairman, Gulf Holdings", "KR"],
];

export function TestimonialSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);
  const [quote, author, role, initials] = testimonials[active];
  return (
    <section className="testimonial section">
      <div className="testimonial__inner shell">
        <span className="quote-mark">“</span>
        <blockquote>{quote}</blockquote>
        <div className="testimonial__author"><span>{initials}</span><div><strong>{author}</strong><small>{role}</small></div></div>
        <div className="testimonial__dots">{testimonials.map((_, index) => <button key={index} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} />)}</div>
      </div>
    </section>
  );
}
