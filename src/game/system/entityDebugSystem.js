const BULLET_TYPES = ["bullet"];

const createEntityDebugSystem = world => {
  const info = document.getElementById("info");
  world.setSystem(world => {
    const bullets = world.getEntities(BULLET_TYPES);
    info.innerHTML = `Bullets: ${bullets.length}`;
  });
};

export default createEntityDebugSystem;
