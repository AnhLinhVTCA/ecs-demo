const TYPES = ["position", "velocity", "bullet"];

const createBulletRenderSystem = world => {
  const context = world.context;

  world.setSystem(world => {
    const ids = world.getEntities(TYPES);
    for (let id of ids) {
      const p = world.getComponent(id, "position");
      context.fillStyle = "#ffffff";
      context.fillRect(p.x - 10, p.y, 20, 20);
      context.fillRect(
        p.x,
        p.y,
        2,
        -Math.floor(
          Math.sqrt((p.x - 150) * (p.x - 150) + (p.y - 50) * (p.y - 50))
        )
      );
    }
  });
};

export default createBulletRenderSystem;
