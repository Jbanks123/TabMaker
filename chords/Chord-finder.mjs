const guitar = [
  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2],
  [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6],
  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
];

const chordTypes = [
  [0, 4, 7],
  [0, 3, 7],
  [0, 7],
  [0, 4, 7, 10],
  [0, 4, 7, 11],
  [0, 3, 7, 10],
  [0, 3, 7, 11],
  [0, 5, 7],
  [0, 2, 7],
  [0, 4, 7, 9],
  [0, 3, 7, 9],
  [0, 2, 4, 7, 10],
  [0, 2, 3, 7, 10],
  [0, 2, 3, 7, 11],
  [0, 2, 4, 5, 7, 10],
  [0, 2, 3, 5, 7, 10],
  [0, 2, 4, 5, 7, 11],
  [0, 2, 3, 5, 7, 11],
  [0, 2, 4, 7],
  [0, 2, 3, 7],
  [0, 2, 4, 7, 9],
  [0, 2, 3, 7, 9],
  [0, 4, 5, 7, 10],
  [0, 4, 5, 7, 11],
  [0, 3, 5, 7, 10],
  [0, 3, 5, 7, 11],
  [0, 4, 7, 9, 10],
  [0, 4, 7, 9, 11],
  [0, 3, 7, 9, 10],
  [0, 3, 7, 9, 11],
  [0, 4, 6, 10],
  [0, 4, 8],
  [0, 4, 8, 10],
  [0, 1, 4, 7, 10],
  [0, 3, 4, 7, 10],
  [0, 1, 4, 8, 10],
  [0, 3, 6, 10],
  [0, 3, 8, 10],
  [0, 1, 3, 7, 10],
  [0, 5, 7, 9],
  [0, 2, 7, 9],
  [0, 5, 7, 10],
  [0, 2, 7, 10],
  [0, 5, 7, 11],
  [0, 2, 7, 11],
  [0, 3, 6],
  [0, 3, 6, 9],
];

function generateNonCChords(input) {
  const output = [];
  const len = input.length;

  for (let i = 0; i < 12; i++) {
    const sequence = [];
    for (let j = 0; j < len; j++) {
      sequence.push((input[j] + i) % 12);
    }
    output.push(sequence);
  }

  return output;
}

function printAllGuitarChords(chord, chords = [], startFret = 0, endFret = 3) {
  if (endFret > 20) return chords;
  let currentChord = [];
  for (let i = 0; i < guitar.length; i++) {
    for (let j = startFret; j <= endFret; j++) {
      if (chord.includes(guitar[i][j])) {
        currentChord.push(j);
        j = endFret + 1;
      } else if (!chord.includes(guitar[i][j]) && j === endFret) {
        currentChord.push('X');
      }
    }
  }
  chords.push(currentChord);
  return printAllGuitarChords(chord, chords, startFret + 1, endFret + 1);
}

const everyChord = chordTypes.map((chord) => generateNonCChords(chord));
console.log(everyChord);
for (let i = 0; i < everyChord.length; i++) {
  for (let j = 0; j < everyChord[i].length; j++)
    console.log(printAllGuitarChords(everyChord[i][j]));
}

class ChordSet {
  constructor() {
    this.chords = [];
    this.Cchords = [];
    /// other metadata
  }
  addChord() {}
  findChord() {}
}
