import React from 'react';
import update from 'react-addons-update';
import Inputs from './mortar-calc-inputs.js';
import Outputs from './mortar-calc-outputs.js';
import {getBearing, getRanging, getCharge} from '../mortars.js';
import Store from '../store.js';

export default class MortarCalculator extends React.Component {
  constructor() {
    super();

    this.store = new Store('state');
    this.state = {
      inputs: {
        target: {
          easting: '', northing: '', elevation: ''
        },
        support: {
          easting: '', northing: '', elevation: ''
        }
      }
    };

    this.handleChange = (namespace) => (event) => {
      const [group, input] = event.target.name.split('-');

      const newStateSubTree = update(this.state, {
        [namespace]: {
          [group]: {
            [input]: {$set: event.target.value}
          }
        }
      });

      this.setState(
        newStateSubTree,
        () => this.store.set(Object.assign({}, this.state, newStateSubTree))
      );
    };
  }

  componentDidMount() {
    const storedState = this.store.get();
    if (!!storedState) this.setState(storedState);
  }

  render() {
    const bearing = getBearing(
      this.state.inputs.target.easting,
      this.state.inputs.target.northing,
      this.state.inputs.support.easting,
      this.state.inputs.support.northing
    );
    const ranging = getRanging(
      this.state.inputs.target.easting,
      this.state.inputs.target.northing,
      this.state.inputs.target.elevation,
      this.state.inputs.support.easting,
      this.state.inputs.support.northing,
      this.state.inputs.support.elevation
    );
    const charge = getCharge(
      this.state.inputs.target.easting,
      this.state.inputs.target.northing,
      this.state.inputs.support.easting,
      this.state.inputs.support.northing
    );

    return (
      <div id="mortar-calculator">
        <div className="row">
          <div className="col-md-6">
            <Inputs inputs={this.state.inputs} changeHandler={this.handleChange('inputs')} />
          </div>

          <div className="col-md-6">
            <Outputs bearing={bearing} ranging={ranging} charge={charge} />
          </div>
        </div>
      </div>
    );
  }
}
