import Vector2 from "gdxjs/lib/vector2";

const TYPES = ["velocity", "position", "bullet"];

const createPhysicsSystem = world => {
  const tmp = new Vector2();
  world.setSystem(world => {
    const delta = world.getDelta();
    const ids = world.getEntities(TYPES);
    for (let id of ids) {
      const p = world.getComponent(id, "position");
      const v = world.getComponent(id, "velocity");
      if (
        p.x > world.canvas.width ||
        p.x < 0 ||
        p.y < 0 ||
        p.y > world.canvas.height
      ) {
        tmp
          .setVector(
            new Vector2(150, 50)
              .subVector(new Vector2(p.x, p.y))
              .nor()
              .scale(100)
          )
          .scale(delta);
      } else {
        tmp.setVector(v).scale(delta);
      }
      p.addVector(tmp);
    }
  });
};

export default createPhysicsSystem;
