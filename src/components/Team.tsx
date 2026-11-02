import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import mosima from "@/assets/team/mosima-selekiso.jpg";
import kopano from "@/assets/team/kopano-sekhitla.jpg";
import reitumetsi from "@/assets/team/reitumetsi-selekisho.jpg";
import profiles from "@/data/team-profiles.json";

const members = [
  { name: "Mosima Selekiso", image: mosima, role: "Founder & Managing Director", lead: true, biography: profiles.mosima },
  { name: "Kopano Sekhitla", image: kopano, role: "Research Associate", lead: false, biography: profiles.kopano },
  { name: "Reitumetse Selekisho", profileName: "Reitumetse (Itu) Selekisho", image: reitumetsi, role: "Research Associate", lead: false, biography: profiles.itu },
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
          <Dialog key={member.name}>
            <article className={`team-member ${member.lead ? "team-member-md" : ""}`} style={{ "--team-delay": `${index * 160}ms` } as CSSProperties} data-reveal>
              <DialogTrigger asChild>
                <button type="button" className="team-portrait team-profile-photo" aria-label={`View ${member.name}'s profile`}>
                  <img src={member.image} alt={member.name} width={2304} height={3456} loading="lazy" decoding="async" />
                  {member.lead && <span className="team-role-badge">Managing Director</span>}
                  <span className="team-profile-photo-icon" aria-hidden="true"><ArrowUpRight size={20} /></span>
                </button>
              </DialogTrigger>
              <div className="team-member-caption">
                <span className="team-member-number" aria-hidden="true">0{index + 1}</span>
                <h3 className="font-heading text-xl md:text-2xl text-secondary">{member.name}</h3>
              </div>
              <DialogTrigger asChild>
                <button type="button" className="team-profile-button" aria-label={`Read ${member.name}'s profile`}>View Profile <ArrowUpRight size={15} /></button>
              </DialogTrigger>
            </article>
            <DialogContent className="team-profile-modal">
              <div className="team-profile-modal-portrait">
                <img src={member.image} alt={member.name} width={2304} height={3456} />
                <span>Pishon Executive Search</span>
              </div>
              <div className="team-profile-modal-copy">
                <header className="team-profile-modal-heading">
                  <p className="section-eyebrow">Meet the Team</p>
                  <DialogTitle>{member.profileName ?? member.name}</DialogTitle>
                  <DialogDescription>{member.role}</DialogDescription>
                </header>
                <div className="team-profile-biography" role="region" aria-label={`${member.name}'s biography`} tabIndex={0}>
                  {member.biography.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
