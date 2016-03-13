import React from 'react';

export default class MortarCalculatorInputs extends React.Component {
  render() {
    return (
      <div id="mortar-inputs">
        <h2>Fire Support</h2>
        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-support-eastings">Support coordinates: eastings</label>
          <input id="mortar-input-support-eastings" type="number" inputMode="numeric" className="form-control" placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-support-northings">Support coordinates: northings</label>
          <input id="mortar-input-support-northings" type="number" inputMode="numeric" className="form-control" placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-support-elevation">Support elevation</label>
          <div className="input-group">
            <input id="mortar-input-support-elevation" type="number" inputMode="numeric" className="form-control" placeholder="0"/>
            <span className="input-group-addon">meters</span>
          </div>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-target-eastings">Target coordinates: eastings</label>
          <input id="mortar-input-target-eastings" type="number" inputMode="numeric" className="form-control" placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-target-northings">Target coordinates: northings</label>
          <input id="mortar-input-target-northings" type="number" inputMode="numeric" className="form-control" placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-target-elevation">Target elevation</label>
          <div className="input-group">
            <input id="mortar-input-target-elevation" type="number" inputMode="numeric" className="form-control" placeholder="0"/>
            <span className="input-group-addon">meters</span>
          </div>
        </div>
      </div>
    );
  }
}
