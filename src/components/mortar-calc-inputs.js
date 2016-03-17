import React from 'react';

export default class MortarCalculatorInputs extends React.Component {
  render() {
    return (
      <div id="mortar-inputs">
        <h2>Fire Support</h2>
        <div className="form-group form-group-lg">
          <label htmlFor="mortar-inputs-support-easting">Support coordinates: easting</label>
          <input id="mortar-inputs-support-easting"
                 name="input-support-easting"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-inputs-support-northing">Support coordinates: northing</label>
          <input id="mortar-inputs-support-northing"
                 name="input-support-northing"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-inputs-support-elevation">Support elevation</label>
          <div className="input-group">
            <input id="mortar-inputs-support-elevation"
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
          <label htmlFor="mortar-inputs-target-easting">Target coordinates: easting</label>
          <input id="mortar-inputs-target-easting"
                 name="input-target-easting"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-inputs-target-northing">Target coordinates: northing</label>
          <input id="mortar-inputs-target-northing"
                 name="input-target-northing"
                 onChange={this.props.changeHandler}
                 type="number"
                 inputMode="numeric"
                 className="form-control"
                 placeholder="0000"/>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-inputs-target-elevation">Target elevation</label>
          <div className="input-group">
            <input id="mortar-inputs-target-elevation"
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
