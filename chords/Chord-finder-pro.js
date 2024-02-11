function generateChordsInFretRange(guitar, targets, startFret, endFret) {
  const chords = new Set(); // Use a Set to store unique chord permutations
  const numStrings = guitar.length;

  // Helper function to generate chord permutations
  function generatePermutations(currentChord, stringIndex) {
    if (stringIndex === numStrings) {
      chords.add([...currentChord]); // Add the current chord permutation to the set
      return;
    }

    const currentString = guitar[stringIndex];
    const openString = currentString[0]; // Get the open string fret
    let targetFound = false;

    // Check if the open string fret is a target
    if (targets.includes(openString)) {
      currentChord.push(0);
      targetFound = true;
      generatePermutations(currentChord, stringIndex + 1); // Move to the next string
      currentChord.pop(); // Backtrack to explore other permutations
    }

    for (
      let fret = startFret;
      fret <= endFret && fret < currentString.length;
      fret++
    ) {
      if (targets.includes(currentString[fret])) {
        currentChord.push(fret);
        targetFound = true;
        generatePermutations(currentChord, stringIndex + 1); // Move to the next string
        currentChord.pop(); // Backtrack to explore other permutations
      }
    }
    if (!targetFound) {
      currentChord.push('X'); // Add 'X' if no target found on this string within the fret range
      generatePermutations(currentChord, stringIndex + 1); // Move to the next string
      currentChord.pop(); // Backtrack to explore other permutations
    }
  }

  generatePermutations([], 0); // Start generating permutations from the first string

  return [...chords]; // Convert the Set to an array before returning
}

// Example usage:
const guitar = [
  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2],
  [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6],
  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
];

const targets = [0, 4, 7];
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
let chordCount = 0;
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
const everyChord = chordTypes.map((chord) => generateNonCChords(chord));

for (let i = 0; i < everyChord.length; i++) {
  for (let j = 0; j < everyChord[i].length; j++)
    for (let startFret = 1; startFret <= 20 - 4; startFret++) {
      const endFret = startFret + 3;
      const chordsInFretRange = generateChordsInFretRange(
        guitar,
        everyChord[i][j],
        startFret,
        endFret
      );
      console.log(chordsInFretRange);
      chordCount += chordsInFretRange.length;
    }
}

console.log(chordCount);
