import { InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../common/Logo";

const groups = {
  Properties: ["Penthouses", "Villas", "Estates", "Off-Market"],
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Offices: ["Dubai", "New York", "London", "Monaco"],
};

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid shell">
        <div className="footer-brand">
          <Logo />
          <p>Curating the world’s most extraordinary properties since 2009, with discreet access to exceptional off-market residences.</p>
        </div>
        {Object.entries(groups).map(([title, items]) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>{items.map((item) => <li key={item}><Link to={title === "Properties" ? "/properties" : "/contact"}>{item}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} Luxe Realty International.</span>
        <div className="socials">
          <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedinLogo /></a>
          <a href="https://x.com" aria-label="X"><XLogo /></a>
          <a href="https://instagram.com" aria-label="Instagram"><InstagramLogo /></a>
        </div>
      </div>
    </footer>
  );
}
