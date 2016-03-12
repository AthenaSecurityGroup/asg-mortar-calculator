import React from 'react';
import Header from './header.js';
import MortarCalculator from './mortar-calc.js';

export default class MortarCalculatorApp extends React.Component {
  render() {
    return (
      <div className="container">
        <Header>Mortar Calculator</Header>
        <MortarCalculator/>
      </div>
    );
  }
}
