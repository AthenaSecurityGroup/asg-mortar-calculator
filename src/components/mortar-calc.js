import React from 'react';
import Inputs from './mortar-calc-inputs.js';
import Outputs from './mortar-calc-outputs.js';

export default class MortarCalculator extends React.Component {
  render() {
    return (
      <div id="mortar-calculator">
        <div className="row">
          <div className="col-md-6">
            <Inputs/>
          </div>

          <div className="col-md-6">
            <Outputs/>
          </div>
        </div>
      </div>
    );
  }
}

