import * as React from 'react';
import { Box, makeStyles } from '@material-ui/core';
//
import LinkImageCard from '../../_common/LinkImageCard';
//
import * as images from '../../../assets/images';

const {
  minigames: {
    sprint,
    savanna,
    audioChallange,
    puzzle,
  },
} = images;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '600px',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(2, 1fr)',
  },
}));

const MiniGameLinks = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LinkImageCard title="Спринт" path="/sprint" img={sprint} />
      <LinkImageCard title="Саванна" path="/savannah" img={savanna} />
      <LinkImageCard title="Аудиовызов" path="/audiochallenge" img={audioChallange} />
      <LinkImageCard title="Паззл" path="/puzzle" img={puzzle} />
    </Box>
  );
};

export default MiniGameLinks;
