import boardroomBg from "@/assets/pishon-team-boardroom-v3.png";

const TreeSpacer = () => (
  <section className="team-parallax relative overflow-hidden" aria-label="Executive leadership">
    <div
      className="team-parallax-background absolute inset-0"
      style={{ backgroundImage: `url(${boardroomBg})` }}
      role="img"
      aria-label="Pishon team seated at a boardroom table facing the camera"
    />
    <div className="absolute inset-0 bg-secondary/15" aria-hidden="true" />
  </section>
);

export default TreeSpacer;
