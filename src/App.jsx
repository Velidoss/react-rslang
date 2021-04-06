import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
//
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import TextBook from './components/TextBook/TextBook';
import MiniGames from './components/MiniGames/MiniGames';
import Statistics from './components/Statistics/Statistics';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import SavannahControl from './components/MiniGames/Savannah/SavannahControl/SavannahControl';
import Puzzle from './components/MiniGames/Puzzle/Puzzle/Puzzle';
import Account from './components/Account/Account';

function App() {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'Roboto',
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route path="/textbook" component={TextBook} />
        <Route path="/minigames" component={MiniGames} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/savannah" component={SavannahControl} />
        <Route path="/puzzle" component={Puzzle} />
        <Route path="/account" component={Account} />
        <Route exact path="/" component={Main} />
        <Route path="*" component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
