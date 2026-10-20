import treeBg from "@/assets/tree-bg.png";

const TreeSpacer = () => {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${treeBg})` }}
      />
      <div className="absolute inset-0 bg-charcoal/40" />
    </section>
  );
};

export default TreeSpacer;
