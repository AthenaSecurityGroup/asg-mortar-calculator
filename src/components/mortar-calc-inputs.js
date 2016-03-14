import React from 'react';

export default class MortarCalculatorInputs extends React.Component {
  render() {
    return (
      <div id="mortar-inputs">
        <h2>Fire Support</h2>
        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-support-easting">Support coordinates: easting</label>
          <input id="mortar-input-support-easting"
                 name="input-support-easting"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-support-northing">Support coordinates: northing</label>
          <input id="mortar-input-support-northing"
                 name="input-support-northing"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-support-elevation">Support elevation</label>
          <div className="input-group">
            <input id="mortar-input-support-elevation"
                   name="input-support-elevation"
                   onChange={this.props.changeHandler}
                   type="number"
                   inputMode="numeric"
                   className="form-control"
                   placeholder="0"/>
            <span className="input-group-addon">meters</span>
          </div>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-target-easting">Target coordinates: easting</label>
          <input id="mortar-input-target-easting"
                 name="input-target-easting"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-target-northing">Target coordinates: northing</label>
          <input id="mortar-input-target-northing"
                 name="input-target-northing"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-input-target-elevation">Target elevation</label>
          <div className="input-group">
            <input id="mortar-input-target-elevation"
                   name="input-target-elevation"
                   onChange={this.props.changeHandler}
                   type="number"
                   inputMode="numeric"
                   className="form-control"
                   placeholder="0"/>
            <span className="input-group-addon">meters</span>
          </div>
        </div>
      </div>
    );
  }
}
