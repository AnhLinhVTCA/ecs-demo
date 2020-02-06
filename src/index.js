import "./index.css";
import createWorld from "./ecs";
import createPhysicsSystem from "./game/system/physicsSystem";
import createTestInputSystem from "./game/system/testInputSystem";
import createBulletRenderSystem from "./game/system/bulletRenderSystem";
import createEnvironmentRenderSystem from "./game/system/environmentRenderSystem";
import createEntityDebugSystem from "./game/system/entityDebugSystem";
import createBulletExpireSystem from "./game/system/bulletExpireSystem";

const canvas = document.getElementById("main");
const context = canvas.getContext("2d");

const world = createWorld();
world.canvas = canvas;
world.context = context;

createPhysicsSystem(world);
createTestInputSystem(world);
createBulletRenderSystem(world);
createEntityDebugSystem(world);
createEnvironmentRenderSystem(world);
createBulletExpireSystem(world);

const update = delta => {
  context.clearRect(0, 0, 300, 600);
  world.setDelta(delta);
  world.process();
};

let lastUpdate = Date.now();
(function loop() {
  const delta = Date.now() - lastUpdate;
  lastUpdate = Date.now();
  update(delta / 1000);
  requestAnimationFrame(loop);
})();
