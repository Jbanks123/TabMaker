import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableChord = ({ chordName }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CHORD',
    item: { chordName },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: '1px solid black',
        padding: '8px',
        margin: '4px',
      }}
    >
      {chordName}
    </div>
  );
};

export default DraggableChord;
