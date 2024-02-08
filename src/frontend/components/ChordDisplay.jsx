// ChordDisplay.jsx
import React from 'react';
import DraggableChord from './DraggableChord';
import { allC } from '../chords/C-chords.mjs';
import './ChordDisplay.css';
import { frets } from '../chords/Frets.mjs';

export default function ChordDisplay({ selectedOption }) {
  function findChordByName(objectsArray, targetName) {
    return objectsArray.find((obj) => obj.name === targetName);
  }

  const chordData = [];
  if (selectedOption) {
    let currentChord = findChordByName(allC, selectedOption);
    function mapChord(chord) {
      for (let i = 1; i < Object.values(chord).length; i++) {
        const reversedChordLine = (
          <div key={i} className="chord-line">
            {chord[i]
              .slice()
              .reverse()
              .map((char, index) => (
                <React.Fragment key={index}>
                  {char}
                  <br />
                </React.Fragment>
              ))}
          </div>
        );
        chordData.push(reversedChordLine);
      }
    }
    // function mapChord(chord) {
    //   function extractFirstElements(arrayOfArrays) {
    //     return arrayOfArrays.map((subarray) => subarray[0]);
    //   }
    //   function processArray(arr) {
    //     const findMinMaxValues = (arr) => {
    //       const numericArray = arr
    //         .filter((value) => value !== 'X' && value !== '0')
    //         .map((value) => parseInt(value, 10));

    //       if (numericArray.length === 0) {
    //         return { smallest: null, largest: null };
    //       }

    //       const smallest = Math.min(...numericArray);
    //       const largest = Math.max(...numericArray);

    //       return { smallest, largest };
    //     };

    //     const adjustArray = (arr) => {
    //       let adjustedArr = arr.slice();

    //       const { smallest, largest } = findMinMaxValues(arr);

    //       if (smallest > 1 && largest > 4) {
    //         const reductionAmount = smallest - 1;

    //         // Adjust the values in the new array
    //         for (let i = 0; i < adjustedArr.length; i++) {
    //           const value = adjustedArr[i];
    //           if (value !== 'X' && value !== '0') {
    //             adjustedArr[i] = (
    //               parseInt(value, 10) - reductionAmount
    //             ).toString();
    //           }
    //         }
    //       }

    //       return [adjustedArr, smallest];
    //     };

    //     return adjustArray(arr);
    //   }
    //   for (let i = 1; i < Object.values(chord).length; i++) {
    //     const tempChordArray = extractFirstElements(chord[i]);
    //     const tempChord = processArray(tempChordArray);
    //     console.log(tempChord);
    //     const chordItem = (
    //       <div key={i} className='chord-item'>
    //         <img
    //           src={'src/frontend/assets/Images/blankTab.png'}
    //           alt={`Chord ${i}`}
    //         />
    //         <div
    //           className='fret-position'
    //           style={{
    //             top: `22px`,
    //             left: `-3px`,
    //           }}
    //         >
    //           {tempChord[1] > 1 ? tempChord[1] : null}
    //         </div>
    //         <div
    //           className='overlay-circle'
    //           style={{
    //             top: `${frets['1' + tempChord[0][0][0]][0]}`,
    //             left: `${frets['1' + tempChord[0][0][0]][1]}`,
    //           }}
    //         >
    //           {chord[i][0][1]}
    //         </div>
    //         <div
    //           className='overlay-circle'
    //           style={{
    //             top: `${frets['2' + tempChord[0][1][0]][0]}`,
    //             left: `${frets['2' + tempChord[0][1][0]][1]}`,
    //           }}
    //         >
    //           {chord[i][1][1]}
    //         </div>
    //         <div
    //           className='overlay-circle'
    //           style={{
    //             top: `${frets['3' + tempChord[0][2][0]][0]}`,
    //             left: `${frets['3' + tempChord[0][2][0]][1]}`,
    //           }}
    //         >
    //           {chord[i][2][1]}
    //         </div>
    //         <div
    //           className='overlay-circle'
    //           style={{
    //             top: `${frets['4' + tempChord[0][3][0]][0]}`,
    //             left: `${frets['4' + tempChord[0][3][0]][1]}`,
    //           }}
    //         >
    //           {chord[i][3][1]}
    //         </div>
    //         <div
    //           className='overlay-circle'
    //           style={{
    //             top: `${frets['5' + tempChord[0][4][0]][0]}`,
    //             left: `${frets['5' + tempChord[0][4][0]][1]}`,
    //           }}
    //         >
    //           {chord[i][4][1]}
    //         </div>
    //         <div
    //           className='overlay-circle'
    //           style={{
    //             top: `${frets['6' + tempChord[0][5][0]][0]}`,
    //             left: `${frets['6' + tempChord[0][5][0]][1]}`,
    //           }}
    //         >
    //           {chord[i][5][1]}
    //         </div>
    //       </div>
    //     );
    //     chordData.push(chordItem);
    //   }
    // }

    mapChord(currentChord);
  }

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedChordData = chunkArray(chordData, 4);

  return (
    <div className="grid-container">
      {chunkedChordData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((chord, colIndex) => (
            <div key={colIndex} className="grid-item">
              <DraggableChord chordName={chord} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
