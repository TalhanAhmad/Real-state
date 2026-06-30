import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="hero__grid" />
      <div className="hero__content shell">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>Est. 2009 — Dubai, New York, London</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.8 }}>
          Where <em>luxury</em><br />meets <span>home</span>.
        </motion.h1>
        <motion.p className="hero__copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          We curate the world’s most extraordinary properties—a seamless bridge between discerning buyers and their perfect residence.
        </motion.p>
        <motion.div className="hero__actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          <Link className="button button--primary" to="/properties">Explore properties <ArrowRight /></Link>
          <a className="text-link" href="#featured">View featured <ArrowDown /></a>
        </motion.div>
      </div>
      <div className="hero__stats">
        <div><strong>2,400<sup>+</sup></strong><span>Properties sold</span></div>
        <div><strong>$4B<sup>+</sup></strong><span>Total volume</span></div>
        <div><strong>98<sup>%</sup></strong><span>Client satisfaction</span></div>
      </div>
    </section>
  );
}
