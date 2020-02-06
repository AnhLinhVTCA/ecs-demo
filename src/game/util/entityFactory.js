import Vector2 from "gdxjs/lib/vector2";

export const createEnvironment = (world, x, y) => {
  const id = world.createEntity();
  world.addComponent(id, "position", new Vector2(x, y));
  world.addComponent(id, "environment", true);
  return id;
};

export const createBullet = (world, x, y, vX, vY) => {
  const id = world.createEntity();
  world.addComponent(id, "position", new Vector2(x, y));
  world.addComponent(
    id,
    "velocity",
    new Vector2(vX, vY)
      .subVector(new Vector2(x, y))
      .nor()
      .scale(200)
  );
  world.addComponent(id, "bullet", true);
  return id;
};
