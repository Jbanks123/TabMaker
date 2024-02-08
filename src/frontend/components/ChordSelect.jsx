import React, { useState } from 'react';
import { allCNames } from '../chords/C-chords.mjs';

export default function ChordSelect({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (event) => {
    const selectedChord = event.target.value;
    setSelectedOption(selectedChord);
    onSelect(selectedChord);
  };

  const options = allCNames;

  return (
    <div>
      <label htmlFor="dropdown">Select a chord </label>
      <select id="dropdown" value={selectedOption} onChange={handleSelect}>
        <option value="">choose</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
