const createBulletExpireSystem = world => {
  const BULLET_TYPES = ["bullet"];
  world.setSystem(world => {
    const ids = world.getEntities(BULLET_TYPES);
    for (let id of ids) {
      const p = world.getComponent(id, "position");
      if (
        p.x > world.canvas.width ||
        p.x < 0 ||
        p.y < 0 ||
        p.y > world.canvas.height
      ) {
        world.destroyEntity(id);
      }
    }
  });
};

export default createBulletExpireSystem;
