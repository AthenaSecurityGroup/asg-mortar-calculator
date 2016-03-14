import React from 'react';
import Inputs from './mortar-calc-inputs.js';
import Outputs from './mortar-calc-outputs.js';
import {getBearing, getRanging, getCharge} from '../libs/mortars.js';

export default class MortarCalculator extends React.Component {
  constructor() {
    super();

    this.state = {

    };

    this.handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
  }

  render() {
    const bearing = getBearing(
      this.state['input-target-easting'],
      this.state['input-target-northing'],
      this.state['input-support-easting'],
      this.state['input-support-northing']
    );
    const ranging = getRanging(
      this.state['input-target-easting'],
      this.state['input-target-northing'],
      this.state['input-target-elevation'],
      this.state['input-support-easting'],
      this.state['input-support-northing'],
      this.state['input-support-elevation']
    );
    const charge = getCharge(
      this.state['input-target-easting'],
      this.state['input-target-northing'],
      this.state['input-support-easting'],
      this.state['input-support-northing']
    );

    return (
      <div id="mortar-calculator">
        <div className="row">
          <div className="col-md-6">
            <Inputs changeHandler={this.handleChange} />
          </div>

          <div className="col-md-6">
            <Outputs bearing={bearing} ranging={ranging} charge={charge} />
          </div>
        </div>
      </div>
    );
  }
}
