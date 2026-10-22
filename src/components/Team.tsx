import type { CSSProperties } from "react";
import mosima from "@/assets/team/mosima-selekiso.jpg";
import kopano from "@/assets/team/kopano-sekhitla.jpg";
import reitumetsi from "@/assets/team/reitumetsi-selekisho.jpg";

const members = [
  { name: "Mosima Selekiso", image: mosima, role: "Managing Director" },
  { name: "Kopano Sekhitla", image: kopano },
  { name: "Reitumetse Selekisho", image: reitumetsi },
];

const Team = () => (
  <section id="team" className="team-section py-16 md:py-24" aria-labelledby="team-heading">
    <div className="container mx-auto px-4">
      <div className="team-heading mb-10 md:mb-14">
        <div>
          <span className="section-eyebrow">The People Behind Pishon</span>
          <h2 id="team-heading" className="text-4xl md:text-5xl text-secondary mt-4">Meet Our <span className="text-primary">Team</span></h2>
        </div>
        <span className="team-heading-rule" aria-hidden="true" />
      </div>
      <div className="team-grid">
        {members.map((member, index) => (
          <article key={member.name} className={`team-member ${member.role ? "team-member-md" : ""}`} style={{ "--team-delay": `${index * 160}ms` } as CSSProperties} data-reveal>
            <div className="team-portrait">
              <img src={member.image} alt={member.name} width={2304} height={3456} loading="lazy" decoding="async" />
              {member.role && <span className="team-role-badge">{member.role}</span>}
            </div>
            <div className="team-member-caption">
              <span className="team-member-number" aria-hidden="true">0{index + 1}</span>
              <h3 className="font-heading text-xl md:text-2xl text-secondary">{member.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
