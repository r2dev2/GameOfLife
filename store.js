/**
 * Makeshift state manager
 *
 * @template {T}
 * @type {(value: T) => [() => T, (newValue: T) => void, (cb: (value: T) => void) => void]}
 */
const useState = value => {
  const subscribers = [];
  return [
    function get() { return value; },
    function set(newValue) {
      if (newValue == value) return;
      value = newValue;
      subscribers.forEach(cb => cb(value));
    },
    function subscribe(cb) {
      subscribers.push(cb);
      cb(value);
    }
  ]
};


export const [rows, setRows, subRows] = useState(20);
export const [cols, setCols, subCols] = useState(20);

const initialBoard = Array(rows()).fill(Array(cols()).fill(false)).map(x => [...x]);
export const [board, setBoard, subBoard] = useState(initialBoard);

// Random board start
const threshold = parseFloat(new URLSearchParams(location.search).get('amount')) || .5
setBoard(board().map(row => row.map(() => Math.random() < threshold)));
