/**
 * Conways Game of Life but with cows in vr
 */

const app = document.querySelector('#app');
const scene = document.createElement('a-scene');
const createPosition = (x, y, z='0') => [x, y, z].map(x => `${x}`).join(' ');
const createCow = (x, y) => {
  const cow = document.createElement('a-box');
  cow.setAttribute('position', createPosition(x, y));
  cow.setAttribute('position', '-1 0.5 -3');
  cow.setAttribute('rotation', '0 0 0');
  cow.setAttribute('color', '#4CC3D9');
  return cow;
}
const createGround = () => {
  const ground = document.createElement('a-box');
  ground.setAttribute('color', '#00FF00');
  ground.setAttribute('height', '2');
  ground.setAttribute('width', '4');
  ground.setAttribute('depth', '4');
  return ground;
};
scene.appendChild(createGround());
app.appendChild(scene);
