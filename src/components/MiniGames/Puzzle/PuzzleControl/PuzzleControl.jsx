import React, { useState } from 'react';
import Puzzle from '../Puzzle/Puzzle';

const PuzzleControl = () => {
  const getRandomKey = () => Math.random().toString();
  const [uniqueKey, setUniqueKey] = useState(getRandomKey());
  const resetComponent = () => setUniqueKey(getRandomKey());

  return (
    <Puzzle key={uniqueKey} resetComponent={resetComponent} />
  );
};

export default PuzzleControl;
