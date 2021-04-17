import React, { useState, useEffect } from 'react';
import {
  Grid, Chip,
} from '@material-ui/core';
//
import { PropTypes } from 'prop-types';
import useWordStatsStyles from './WordStatsStyles';
import { statChipConfig } from '../../../../constants/textBookConstants';
//

const WordStats = ({ word }) => {
  const classes = useWordStatsStyles();
  const [gameStats, setGameStats] = useState({});

  useEffect(() => {
    if (word && word.optional && word.optional.savannah) {
      setGameStats({ ...gameStats, savannahStats: { ...word.optional.savannah } });
    }
    if (word && word.optional && word.optional.sprint) {
      setGameStats({ ...gameStats, sprintStats: { ...word.optional.sprint } });
    }
    if (word && word.optional && word.optional.puzzle) {
      setGameStats({ ...gameStats, puzzleStats: { ...word.optional.puzzle } });
    }
    if (word && word.optional && word.optional.puzzle) {
      setGameStats({ ...gameStats, audioChallengeStats: { ...word.optional.audioChallenge } });
    }
  }, [word]);

  return (
    <Grid container spacing={1} className={classes.container}>
      {
        statChipConfig.map(({ title, icon, statName }) => {
          if (gameStats[statName]) {
            return (
              <Grid item key={title}>
                <Chip
                  avatar={React.createElement(icon)}
                  label={`${title}: сыграно ${gameStats[statName].metInGame || 0} | верно ${gameStats[statName].right || 0} | неверно ${gameStats[statName].wrong || 0}`}
                  clickable
                />
              </Grid>
            );
          }
          return (
            <Grid item key={title}>
              <Chip
                avatar={React.createElement(icon)}
                label={`${title}: сыграно 0 | верно 0 | неверно 0`}
                clickable
              />
            </Grid>
          );
        })
      }
    </Grid>
  );
};

WordStats.defaultProps = {
  word: null,
};

WordStats.propTypes = {
  word: PropTypes.shape({
    optional: PropTypes.shape({
      savannah: PropTypes.shape({
        right: PropTypes.number.isRequired,
        wrong: PropTypes.number.isRequired,
        metInGame: PropTypes.number.isRequired,
      }),
      sprint: PropTypes.shape({
        right: PropTypes.number.isRequired,
        wrong: PropTypes.number.isRequired,
        metInGame: PropTypes.number.isRequired,
      }),
      puzzle: PropTypes.shape({
        right: PropTypes.number.isRequired,
        wrong: PropTypes.number.isRequired,
        metInGame: PropTypes.number.isRequired,
      }),
      audioChallenge: PropTypes.shape({
        right: PropTypes.number.isRequired,
        wrong: PropTypes.number.isRequired,
        metInGame: PropTypes.number.isRequired,
      }),
    }),
  }),
};

export { WordStats };
