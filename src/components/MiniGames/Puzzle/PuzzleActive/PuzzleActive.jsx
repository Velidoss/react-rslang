import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Button } from '@material-ui/core';
// import VolumeUpIcon from '@material-ui/icons/VolumeUp';
// import useCounter from '../../Savannah/hooks/useCounter';
// import wordAudio from '../../../../common/wordAudio';
// import DataAccessContants from '../../../../constants/DataAccessContants';
import getWords from '../../../../api/getWords';

const PuzzleActive = () => {
  const [data, setData] = useState([]);
  const [movesCounter, setMovesCounter] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  let arrOfRandomIndexes;

  const createArrOfRandomIndexes = () => {
    const res = Array(data.length).fill(0).map((item, index) => index);

    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }

    return res;
  };

  useEffect(() => {
    getWords().then((arrays) => setData(arrays));
    arrOfRandomIndexes = createArrOfRandomIndexes();
    console.log(arrOfRandomIndexes);
    console.log(data);
  }, [data.length]);

  // const checkIsAnswerRight = () => {
  //   if (data[index]) {
  //     setRightAnswers(rightAnswers + 1);
  //   } else {
  //     setWrongAnswers(wrongAnswers + 1);
  //   }
  // };

  const increment = (rightOrWrong) => {
    if (rightOrWrong === 'right') {
      setRightAnswers(rightAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    setMovesCounter(movesCounter + 1);
  };

  const createQuestion = () => {
    console.log('creating question');

    return (
      <Container>
        <div>
          task:
          {data[movesCounter]?.textExampleTranslate}
        </div>
        <div>field</div>
        <div>blocks</div>
        <Button onClick={() => increment('right')}>
          right:
          {rightAnswers}
        </Button>
        <Button onClick={() => increment('wrong')}>
          wrong:
          {wrongAnswers}
        </Button>
        <div>{movesCounter}</div>
      </Container>
    );
  };

  // if (movesCounter < data.length) {
  if (true) {
    return createQuestion();
  }

  return null;
  // return (
  //   <Container>
  //     <Button onClick={() => setMovesCounter(movesCounter + 1)} />
  //     <div>{movesCounter}</div>
  //   </Container>
  // );
};

export default PuzzleActive;
