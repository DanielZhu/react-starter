import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

// Common Components
import App from './components/App/App'

import TictactoeGame from './tictactoe/game/game'
import TwitterApp from './twitter/app'
import TestComp from './testComp'

// redirectApp() {
  // setTimeout(() => {
  //   window.location.href = '#/trello'
  // }, 1500)
// }

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='t' component={TestComp} />
      <Route path='tictactoc' component={TictactoeGame} />
      <Route path='twitter' component={TwitterApp} />
    </Route>
  </Router>
), document.getElementById('react-app'))
