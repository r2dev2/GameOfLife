import { nextBoard } from './conway.js';
const assert = require('assert');


const o = true;
const _ = false;

const stills = [
  [
    [ _, _, _, _ ],
    [ _, o, o, _ ],
    [ _, o, o, _ ],
    [ _, _, _, _ ],
  ],
  [
    [ _, _, _, _, _, _ ],
    [ _, _, o, o, _, _ ],
    [ _, o, _, _, o, _ ],
    [ _, _, o, _, o, _ ],
    [ _, _, _, o, _, _ ],
    [ _, _, _, _, _, _ ],
  ],
  [
    [ _, _, _, _, _ ],
    [ _, _, o, _, _ ],
    [ _, o, _, o, _ ],
    [ _, _, o, _, _ ],
    [ _, _, _, _, _ ],
  ]
];

for (const still of stills) {
  assert.deepEqual(still, nextBoard(still));
}
