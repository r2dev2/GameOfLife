/**
 * Conways Game of Life but with cows in vr
 */
import { board } from './store.js';

const app = document.querySelector('#app');
const scene = document.createElement('a-scene');
const createPosition = (x, y) => `${x / 8} 1.2 ${-y / 8}`;
const createCow = (x, y) => {
  const cow = document.createElement('a-box');
  cow.setAttribute('position', createPosition(x, y));
  cow.setAttribute('rotation', '0 0 0');
  cow.setAttribute('color', '#4CC3D9');
  cow.setAttribute('scale', '.075 .075 .075');
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
const cows = board().map((row, i) => row.map((isFilled, j) => {
  return createCow(i - 10, j - 10);
}));
cows.flat().forEach(cow => scene.appendChild(cow));
app.appendChild(scene);