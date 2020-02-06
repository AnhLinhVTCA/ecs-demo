import { createEnvironment, createBullet } from "../util/entityFactory";

const createTestInputSystem = world => {
  let firing = false;
  const mouse = { x: 0, y: 0 };
  world.canvas.addEventListener("click", e => {
    const rect = world.canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    firing = true;
  });

  world.setSystem(world => {
    createEnvironment(world, 0, 20);
    if (firing) {
      createBullet(world, 150, 50, mouse.x, mouse.y);
      firing = false;
    }
  });
};

export default createTestInputSystem;
