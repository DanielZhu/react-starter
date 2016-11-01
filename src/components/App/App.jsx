require('./style.scss');

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        {this.props.children || 'Something wrong'}
      </div>
    );
  }
}

App.propTypes = {

};
