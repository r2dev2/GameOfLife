'use strict';

/**
 * Conways Game of Life but with cows in vr
 */
import { board, setBoard, subBoard } from './store.js';
import { nextBoard } from './conway.js';

const timeBetweenBoards = 1000;
const bigCowSize = '0.025';
const smolCowSize = '0.015';
const bigCow = `${bigCowSize} `.repeat(3).trim();
const smolCow = `${smolCowSize} `.repeat(3).trim();
const bigCowAnimation = 'property: rotation; to: 0 360 0; loop: true; dur: 5000';
const smolCowAnimation = '';
const bigCowRotation = '0 0 0';
const smolCowRotation = '0 45 0';
const assetLinks = [
  { id: 'cow', src: './assets/cow.glb' }
];

const app = document.querySelector('#app');
const scene = document.createElement('a-scene');
const createPosition = (x, y) => `${x / 8} 1.2 ${-y / 8}`;
const createCow = (x, y) => {
  const cow = document.createElement('a-gltf-model');
  cow.setAttribute('position', createPosition(x, y));
  cow.setAttribute('rotation', smolCowRotation);
  cow.setAttribute('color', '#4CC3D9');
  cow.setAttribute('scale', smolCow);
  cow.setAttribute('src', '#cow');
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
const createAssets = () => {
  const assets = document.createElement('a-assets');
  assetLinks.forEach(({ id, src }) => {
    const asset = document.createElement('a-asset-item');
    asset.setAttribute('id', id);
    asset.setAttribute('src', src);
    assets.appendChild(asset);
  });
  return assets;
};
scene.appendChild(createAssets());
scene.appendChild(createGround());
const cows = board().map((row, i) => row.map((_isFilled, j) => {
  return createCow(i - 10, j - 10);
}));
cows.flat().forEach(cow => scene.appendChild(cow));
app.appendChild(scene);

subBoard(board => board.forEach((row, i) => row.map((isFilled, j) => {
  cows[i][j].setAttribute('scale', isFilled ? bigCow : smolCow);
  cows[i][j].setAttribute('animation', isFilled ? bigCowAnimation : smolCowAnimation);
  cows[i][j].setAttribute('rotation', isFilled ? bigCowRotation : smolCowRotation);
})));

setInterval(() => {
  setBoard(nextBoard(board()));
}, timeBetweenBoards);
