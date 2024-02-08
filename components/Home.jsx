import React, { Children, useState } from 'react';
import Navbar from './Navbar';
import ChordSelect from './ChordSelect';
import ChordDisplay from './ChordDisplay';
import ProgressionDisplay from './ProgressionDisplay';
import MultiAudioPlayers from './MultiAudioPlayers';

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [progression, setProgression] = useState([]);

  const audioFileSrcs = [
    'src/frontend/assets/lowE-sounds/0.mp3',
    'src/frontend/assets/lowE-sounds/1.mp3',
    'src/frontend/assets/lowE-sounds/2.mp3',
    'src/frontend/assets/lowE-sounds/3.mp3',
    'src/frontend/assets/lowE-sounds/4.mp3',
    'src/frontend/assets/lowE-sounds/5.mp3',
    'src/frontend/assets/lowE-sounds/6.mp3',
    'src/frontend/assets/lowE-sounds/7.mp3',
    'src/frontend/assets/lowE-sounds/8.mp3',
    'src/frontend/assets/lowE-sounds/9.mp3',
    'src/frontend/assets/lowE-sounds/10.mp3',
    'src/frontend/assets/lowE-sounds/11.mp3',
    'src/frontend/assets/lowE-sounds/12.mp3',
    'src/frontend/assets/lowE-sounds/13.mp3',
    'src/frontend/assets/lowE-sounds/14.mp3',
    'src/frontend/assets/lowE-sounds/15.mp3',
    'src/frontend/assets/lowE-sounds/16.mp3',
    'src/frontend/assets/lowE-sounds/17.mp3',
    'src/frontend/assets/lowE-sounds/18.mp3',
    'src/frontend/assets/lowE-sounds/19.mp3',
    'src/frontend/assets/A-sounds/0.mp3',
    'src/frontend/assets/A-sounds/1.mp3',
    'src/frontend/assets/A-sounds/2.mp3',
    'src/frontend/assets/A-sounds/3.mp3',
    'src/frontend/assets/A-sounds/4.mp3',
    'src/frontend/assets/A-sounds/5.mp3',
    'src/frontend/assets/A-sounds/6.mp3',
    'src/frontend/assets/A-sounds/7.mp3',
    'src/frontend/assets/A-sounds/8.mp3',
    'src/frontend/assets/A-sounds/9.mp3',
    'src/frontend/assets/A-sounds/10.mp3',
    'src/frontend/assets/A-sounds/11.mp3',
    'src/frontend/assets/A-sounds/12.mp3',
    'src/frontend/assets/A-sounds/13.mp3',
    'src/frontend/assets/A-sounds/14.mp3',
    'src/frontend/assets/A-sounds/15.mp3',
    'src/frontend/assets/A-sounds/16.mp3',
    'src/frontend/assets/A-sounds/17.mp3',
    'src/frontend/assets/A-sounds/18.mp3',
    'src/frontend/assets/A-sounds/19.mp3',
    'src/frontend/assets/D-sounds/0.mp3',
    'src/frontend/assets/D-sounds/1.mp3',
    'src/frontend/assets/D-sounds/2.mp3',
    'src/frontend/assets/D-sounds/3.mp3',
    'src/frontend/assets/D-sounds/4.mp3',
    'src/frontend/assets/D-sounds/5.mp3',
    'src/frontend/assets/D-sounds/6.mp3',
    'src/frontend/assets/D-sounds/7.mp3',
    'src/frontend/assets/D-sounds/8.mp3',
    'src/frontend/assets/D-sounds/9.mp3',
    'src/frontend/assets/D-sounds/10.mp3',
    'src/frontend/assets/D-sounds/11.mp3',
    'src/frontend/assets/D-sounds/12.mp3',
    'src/frontend/assets/D-sounds/13.mp3',
    'src/frontend/assets/D-sounds/14.mp3',
    'src/frontend/assets/D-sounds/15.mp3',
    'src/frontend/assets/D-sounds/16.mp3',
    'src/frontend/assets/D-sounds/17.mp3',
    'src/frontend/assets/D-sounds/18.mp3',
    'src/frontend/assets/G-sounds/0.mp3',
    'src/frontend/assets/G-sounds/1.mp3',
    'src/frontend/assets/G-sounds/2.mp3',
    'src/frontend/assets/G-sounds/3.mp3',
    'src/frontend/assets/G-sounds/4.mp3',
    'src/frontend/assets/G-sounds/5.mp3',
    'src/frontend/assets/G-sounds/6.mp3',
    'src/frontend/assets/G-sounds/7.mp3',
    'src/frontend/assets/G-sounds/8.mp3',
    'src/frontend/assets/G-sounds/9.mp3',
    'src/frontend/assets/G-sounds/10.mp3',
    'src/frontend/assets/G-sounds/11.mp3',
    'src/frontend/assets/G-sounds/12.mp3',
    'src/frontend/assets/G-sounds/13.mp3',
    'src/frontend/assets/G-sounds/14.mp3',
    'src/frontend/assets/G-sounds/15.mp3',
    'src/frontend/assets/G-sounds/16.mp3',
    'src/frontend/assets/G-sounds/17.mp3',
    'src/frontend/assets/G-sounds/18.mp3',
    'src/frontend/assets/B-sounds/0.mp3',
    'src/frontend/assets/B-sounds/1.mp3',
    'src/frontend/assets/B-sounds/2.mp3',
    'src/frontend/assets/B-sounds/3.mp3',
    'src/frontend/assets/B-sounds/4.mp3',
    'src/frontend/assets/B-sounds/5.mp3',
    'src/frontend/assets/B-sounds/6.mp3',
    'src/frontend/assets/B-sounds/7.mp3',
    'src/frontend/assets/B-sounds/8.mp3',
    'src/frontend/assets/B-sounds/9.mp3',
    'src/frontend/assets/B-sounds/10.mp3',
    'src/frontend/assets/B-sounds/11.mp3',
    'src/frontend/assets/B-sounds/12.mp3',
    'src/frontend/assets/B-sounds/13.mp3',
    'src/frontend/assets/B-sounds/14.mp3',
    'src/frontend/assets/B-sounds/15.mp3',
    'src/frontend/assets/B-sounds/16.mp3',
    'src/frontend/assets/B-sounds/17.mp3',
    'src/frontend/assets/B-sounds/18.mp3',
    'src/frontend/assets/B-sounds/19.mp3',
    'src/frontend/assets/highE-sounds/0.mp3',
    'src/frontend/assets/highE-sounds/1.mp3',
    'src/frontend/assets/highE-sounds/2.mp3',
    'src/frontend/assets/highE-sounds/3.mp3',
    'src/frontend/assets/highE-sounds/4.mp3',
    'src/frontend/assets/highE-sounds/5.mp3',
    'src/frontend/assets/highE-sounds/6.mp3',
    'src/frontend/assets/highE-sounds/7.mp3',
    'src/frontend/assets/highE-sounds/8.mp3',
    'src/frontend/assets/highE-sounds/9.mp3',
    'src/frontend/assets/highE-sounds/10.mp3',
    'src/frontend/assets/highE-sounds/11.mp3',
    'src/frontend/assets/highE-sounds/12.mp3',
    'src/frontend/assets/highE-sounds/13.mp3',
    'src/frontend/assets/highE-sounds/14.mp3',
    'src/frontend/assets/highE-sounds/15.mp3',
    'src/frontend/assets/highE-sounds/16.mp3',
    'src/frontend/assets/highE-sounds/17.mp3',
    'src/frontend/assets/highE-sounds/18.mp3',
  ];

  const handleSelect = (chord) => {
    setSelectedOption(chord);
  };

  const handleDrop = (chord) => {
    setProgression([...progression, chord]);
  };
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ flex: 1 }}>
            <ChordSelect onSelect={handleSelect} />
          </div>
          <div style={{ flex: 1 }}>
            <ChordDisplay selectedOption={selectedOption} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ flex: 1 }}>
            <MultiAudioPlayers audioFileSrcs={audioFileSrcs} />
          </div>
          <div style={{ flex: 1, border: '1px solid #000' }}>
            <ProgressionDisplay progression={progression} onDrop={handleDrop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
