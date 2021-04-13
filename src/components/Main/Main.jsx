import React from 'react';
//
import { Hero } from './Hero';
import { Features } from './Features';
import { Video } from './Video';
import { Team } from './Team';
//
import styles from './Main.style';

const Main = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Hero />
      <Features />
      <Video />
      <Team />
    </div>
  );
};

export { Main };
