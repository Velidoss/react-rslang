import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Learn from './components/Learn/Learn';
import MiniGames from './components/MiniGames/MiniGames';
import Statistics from './components/Statistics/Statistics';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Container style={{ background: 'lightblue' }}>
          <Switch>
            <Route path="/learn" render={() => <Learn />} />
            <Route path="/minigames" render={() => <MiniGames />} />
            <Route path="/statistics" render={() => <Statistics />} />
            <Route exact path="/" render={() => <Main />} />
            <Route path="*" render={() => <Error404 />} />
          </Switch>
        </Container>
      </main>
    </>
  );
}

export default App;
