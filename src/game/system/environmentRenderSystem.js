const TYPES = ["environment", "position"];

const createEnvironmentRenderSystem = world => {
  const context = world.context;

  world.setSystem(world => {
    const ids = world.getEntities(TYPES);
    for (let id of ids) {
      const p = world.getComponent(id, "position");
      context.fillStyle = "#ffffff";
      context.fillRect(p.x, p.y + 45, 300, 5);
      context.fillRect(p.x + 125, p.y + 20, 50, 30);
    }
  });
};

export default createEnvironmentRenderSystem;
