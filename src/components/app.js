import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*forces to render children in the nested route*/}
        {this.props.children}
      </div>
    );
  }
}
