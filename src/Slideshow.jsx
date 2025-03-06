// src/Slideshow.jsx
import React, { useState } from 'react';

function Slideshow() {
  const imagePairs = [
    ['cabinet-before.jpg', 'cabinet-after.jpg'],
    ['deck-before.jpg', 'deck-after.jpg'],
    ['move-before.jpg', 'move-after.jpg'],
    ['paint-before.jpg', 'paint-after.jpg'],
    ['patch-before.jpg', 'patch-after.jpg'],
    ['pw-before.PNG', 'pw-after.PNG'],
    ['table-before.jpg', 'table-after.jpg'],
    ['tree-before.jpg', 'tree-after.jpg']
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  const handlePrev = () => {
    setCurrentPairIndex((prevIndex) =>
      prevIndex === 0 ? imagePairs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPairIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '10px', textAlign: 'center' }}> {/* Added marginRight */}
          <img
            src={`/${imagePairs[currentPairIndex][0]}`}
            alt={`Before ${currentPairIndex + 1}`}
            aria-label={`Before image of ${currentPairIndex + 1}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p>Before</p> {/* Text label below the image */}
        </div>
        <div style={{ marginLeft: '10px', textAlign: 'center' }}> {/* Added marginLeft */}
          <img
            src={`/${imagePairs[currentPairIndex][1]}`}
            alt={`After ${currentPairIndex + 1}`}
            aria-label={`After image of ${currentPairIndex + 1}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p>After</p> {/* Text label below the image */}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handlePrev} style={{ marginRight: '10px' }}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Slideshow;