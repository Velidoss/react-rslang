import React, { useState, useEffect } from 'react';
import { Grid, Chip } from '@material-ui/core';
//
import useWordStatsStyles from './WordStatsStyles';
import ITextBookWord from '../../../../interfaces/ITextBookWord';
import IGameStatsToShow from '../../../../interfaces/IGameStatsToShow';
import { statChipConfig } from '../../../../constants/textBookConstants';
//

interface WordStatsProps {
  word?: ITextBookWord | null;
}

const WordStats: React.FC<WordStatsProps> = ({ word }) => {
  const classes = useWordStatsStyles();
  const [gameStats, setGameStats] = useState<IGameStatsToShow>({
    sprintStats: {},
    savannahStats: {},
    puzzleStats: {},
    audioChallengeStats: {},
  });

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
  }, [gameStats, word]);

  return (
    <Grid container spacing={1} className={classes.container}>
      {statChipConfig.map(({ title, icon, statName }) => {
        if (gameStats[statName]) {
          return (
            <Grid item key={title}>
              <Chip
                avatar={React.createElement(icon)}
                label={`${title}: сыграно ${gameStats[statName].metInGame || 0} | верно ${
                  gameStats[statName].right || 0
                } | неверно ${gameStats[statName].wrong || 0}`}
                clickable
              />
            </Grid>
          );
        }
        return (
          <Grid item key={title}>
            <Chip avatar={React.createElement(icon)} label={`${title}: сыграно 0 | верно 0 | неверно 0`} clickable />
          </Grid>
        );
      })}
    </Grid>
  );
};

export { WordStats };
