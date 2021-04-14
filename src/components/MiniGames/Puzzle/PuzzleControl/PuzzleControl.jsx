import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import Puzzle from '../Puzzle/Puzzle';
import DataAccessContants from '../../../../constants/DataAccessConstants';
import useStyles from '../styles/styles';

const { GROUPS_QUANTITY } = DataAccessContants;

const PuzzleControl = () => {
  const styles = useStyles();

  const getRandomKey = () => Math.random().toString();
  const [uniqueKey, setUniqueKey] = useState(getRandomKey());

  const [difficulty, setDifficulty] = useState(null);
  const selectDifficulty = () => setDifficulty(null);
  const resetGame = () => setUniqueKey(getRandomKey());

  return (
    <Container className={styles.root}>
      {
        difficulty === null
          ? (
            <>
              <Typography variant="h5">
                Уровень сложности:
              </Typography>
              {Array(GROUPS_QUANTITY).fill(0).map((item, index) => (
                <Button
                  key={getRandomKey()}
                  onClick={() => setDifficulty(index)}
                  variant="contained"
                  color="secondary"
                  className="button"
                >
                  {index + 1}
                </Button>
              ))}
            </>
          ) : (
            <Puzzle
              key={uniqueKey}
              difficulty={difficulty}
              selectDifficulty={selectDifficulty}
              resetGame={resetGame}
            />
          )
      }
    </Container>
  );
};

export default PuzzleControl;
