import React, { useState, useRef } from 'react';

const MultiAudioPlayers = ({ audioFileSrcs }) => {
  const audioRefs = audioFileSrcs.map(() => useRef());
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioRefs.forEach((audioRef) => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      });
    } else {
      audioRefs.forEach((audioRef, index) => {
        setTimeout(() => audioRef.current.play(), index * 300);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {audioFileSrcs.map((audioFileSrc, index) => (
        <div key={index}>
          <audio ref={audioRefs[index]}>
            <source src={audioFileSrc} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
      <br />
      <button onClick={handleTogglePlay}>{isPlaying ? 'Stop' : 'Play'}</button>
    </div>
  );
};

export default MultiAudioPlayers;
