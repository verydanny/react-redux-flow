// @flow
import { hot } from 'react-hot-loader';
import * as React from 'react';

class App extends React.Component {
  render () {
    return [
      <div key="app">
        <h1>Hello There</h1>
      </div>
    ]
  }
}

export default hot(module)(App);