import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
//
import {
  Header,
  Footer,
  Account,
  Main,
  TextBook,
} from './components';
import Statistics from './components/Statistics/Statistics';
import SavannahControl from './components/MiniGames/Savannah/SavannahControl/SavannahControl';
import SprintControl from './components/MiniGames/Sprint/SprintControl';
import PuzzleControl from './components/MiniGames/Puzzle/PuzzleControl/PuzzleControl';
import { Error404 } from './components/_common';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Roboto',
  },
});

const isNotMiniGame = (location) => (
  location !== '/savannah'
    && location !== '/puzzle'
    && location !== '/audiochallange'
    && location !== '/sprint'
);

function App() {
  const classes = useStyles();
  const { location } = useLocation();

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route path="/textbook" component={TextBook} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/savannah" component={SavannahControl} />
        <Route path="/sprint" component={SprintControl} />
        <Route path="/puzzle" component={PuzzleControl} />
        <Route path="/account" component={Account} />
        <Route exact path="/" component={Main} />
        <Route path="*" component={Error404} />
      </Switch>
      {isNotMiniGame(location) && <Footer /> }
    </div>
  );
}

export default App;
