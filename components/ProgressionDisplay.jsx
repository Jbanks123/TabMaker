import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableChord from './DraggableChord';

const ProgressionDisplay = ({ progression, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CHORD',
    drop: (item) => onDrop(item.chordName),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        height: '170px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {progression.map((chord, index) => (
        <div key={index} style={{ margin: '4px' }}>
          <DraggableChord chordName={chord} />
        </div>
      ))}
    </div>
  );
};

export default ProgressionDisplay;
