import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getRandomKey from '../../../../utils/getRandomKey';
import Puzzle from '../Puzzle/Puzzle';

const PuzzleControl = () => {
  const [uniqueKey, setUniqueKey] = useState(getRandomKey());
  const resetGame = () => setUniqueKey(getRandomKey());

  const location = useLocation();
  const groupNum = (location.state && location.state.group) ? location.state.group : 0;
  const pageNum = (location.state && location.state.page) ? location.state.page : 0;

  useEffect(() => {
    resetGame();
  }, [groupNum, pageNum]);

  return (
    <Puzzle
      key={uniqueKey}
      groupNum={groupNum}
      pageNum={pageNum}
      resetGame={resetGame}
    />
  );
};

export default PuzzleControl;
