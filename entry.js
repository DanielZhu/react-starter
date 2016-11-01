import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// Common Components
import App from './src/components/App/App';

import TicTacTocGame from './src/tictactoc/game/game';
import TwitterApp from './src/twitter/app';

// redirectApp() {
  // setTimeout(() => {
  //   window.location.href = '#/trello';
  // }, 1500);
// }

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="tictactoc" component={TicTacTocGame} />
      <Route path="twitter" component={TwitterApp} />
    </Route>
  </Router>
), document.getElementById('react-app'));
