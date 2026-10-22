import boardroomBg from "@/assets/executives-boardroom.png";

const TreeSpacer = () => (
  <section className="team-parallax relative overflow-hidden" aria-label="Executive leadership">
    <div
      className="team-parallax-background absolute inset-0"
      style={{ backgroundImage: `url(${boardroomBg})` }}
      role="img"
      aria-label="Illustrative executive boardroom discussion"
    />
    <div className="absolute inset-0 bg-secondary/15" aria-hidden="true" />
  </section>
);

export default TreeSpacer;
