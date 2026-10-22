import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/pishon-logo-transparent.png";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Our Process" },
  { href: "#about", label: "About Us" },
  { href: "#team", label: "Our Team" },
  { href: "#testimonials", label: "Testimonials" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const list = useRef<HTMLUListElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 20);
      const threshold = (header.current?.offsetHeight ?? 104) + 140;
      const current = navLinks
        .map(link => ({ href: link.href, top: document.getElementById(link.href.slice(1))?.getBoundingClientRect().top }))
        .filter(link => link.top !== undefined && link.top <= threshold)
        .sort((a, b) => b.top! - a.top!)[0];
      const contact = document.getElementById("contact");
      setActive(contact && contact.getBoundingClientRect().top <= threshold ? "#contact" : current?.href ?? "");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useLayoutEffect(() => {
    const element = list.current;
    if (!element) return;
    let disposed = false;
    const measure = () => {
      if (disposed) return;
      const link = element.querySelector<HTMLAnchorElement>(`a[href="${preview ?? active}"]`);
      if (!link) { setIndicator(previous => ({ ...previous, opacity: 0 })); return; }
      const bounds = link.getBoundingClientRect();
      const parent = element.getBoundingClientRect();
      setIndicator({ left: bounds.left - parent.left, width: bounds.width, opacity: 1 });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    document.fonts.ready.then(measure);
    return () => { disposed = true; observer.disconnect(); };
  }, [active, preview]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        header.current?.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  return (
    <header ref={header} className={`executive-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <a href="/#" className="executive-brand flex items-center" aria-label="Pishon Executive Search home" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logo} alt="Pishon Executive Search" className="header-logo w-auto" />
          </a>
          <ul
            ref={list}
            className="executive-nav-list hidden lg:flex items-center"
            onMouseLeave={() => setPreview(null)}
            onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPreview(null); }}
          >
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="executive-nav-link" aria-current={active === link.href ? "location" : undefined} onMouseEnter={() => setPreview(link.href)} onFocus={() => setPreview(link.href)} onClick={() => setActive(link.href)}>{link.label}</a>
              </li>
            ))}
            <li className="executive-nav-indicator" aria-hidden="true" style={{ width: indicator.width, opacity: indicator.opacity, transform: `translateX(${indicator.left}px)` }} />
          </ul>
          <a href="#contact" className="header-contact hidden lg:inline-flex group" aria-current={active === "#contact" ? "location" : undefined}>Contact Us <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          <button className="executive-menu-toggle lg:hidden p-2" onClick={() => setIsMobileMenuOpen(value => !value)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="executive-mobile-menu lg:hidden absolute top-full left-0 right-0">
            <ul>
              {navLinks.map(link => (
                <li key={link.href}><a href={link.href} aria-current={active === link.href ? "location" : undefined} onClick={() => { setActive(link.href); setIsMobileMenuOpen(false); }}>{link.label}</a></li>
              ))}
              <li><a href="#contact" className="mobile-contact-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us <ArrowUpRight size={16} /></a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
