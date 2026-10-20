import { useEffect, useRef, type ReactNode } from "react";

/** Observe content independently so animations begin when it enters the viewport. */
export default function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!root.current || !('IntersectionObserver' in window)) return;
    const elements = root.current.querySelectorAll('section > .container > div, [data-reveal]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    elements.forEach(element => {
      element.classList.add('scroll-reveal');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return <div ref={root}>{children}</div>;
}
