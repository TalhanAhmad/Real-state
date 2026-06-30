import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../common/Logo";

const links = [
  { label: "Properties", to: "/properties" },
  { label: "Featured", to: "/#featured" },
  { label: "Process", to: "/#process" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const followHash = (event, to) => {
    if (!to.includes("#")) return;
    event.preventDefault();
    const hash = to.split("#")[1];
    if (pathname !== "/") navigate(`/#${hash}`);
    requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }));
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <Logo />
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X size={24} /> : <List size={24} />}
      </button>
      <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary navigation">
        {links.map((link) =>
          link.to.includes("#") ? (
            <Link key={link.label} to={link.to} onClick={(event) => followHash(event, link.to)}>
              {link.label}
            </Link>
          ) : (
            <NavLink key={link.label} to={link.to}>
              {link.label}
            </NavLink>
          ),
        )}
        <Link className="button button--small button--outline" to="/contact">Book a tour</Link>
      </nav>
    </header>
  );
}
