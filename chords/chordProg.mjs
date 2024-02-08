import { allC } from './C-chords.mjs';

const printChords = (chord) => {
  for (let i = 1; i < Object.values(chord).length; i++) {
    console.log(`${chord.name} chord` + ' ' + `${i}`);
    for (let j = 5; j >= 0; j--) {
      console.log('     ' + `${chord[i][j]}`);
    }
    console.log('   ');
  }
};

const printProgression = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    printChords(arr[i]);
  }
};
printProgression(allC);
