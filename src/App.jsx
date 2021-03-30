import React from 'react';
import {
  Container, CssBaseline, makeStyles,
} from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Learn from './components/Learn/Learn';
import MiniGames from './components/MiniGames/MiniGames';
import Statistics from './components/Statistics/Statistics';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import SavannahControl from './components/MiniGames/Savannah/SavannahControl/SavannahControl';
import Puzzle from './components/MiniGames/Puzzle/Puzzle/Puzzle';

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      background: 'lightblue',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container
        className={classes.main}
        component="main"
      >
        <Switch>
          <Route path="/learn" component={Learn} />
          <Route path="/minigames" component={MiniGames} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/savannah" component={SavannahControl} />
          <Route path="/puzzle" component={Puzzle} />
          <Route exact path="/" component={Main} />
          <Route path="*" component={Error404} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
