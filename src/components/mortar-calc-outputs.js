import React from 'react';

export default class MortarCalculatorOutputs extends React.Component {
  render() {
    return (
      <div id="mortar-outputs">
        <h2>Output</h2>
        <div className="form-group form-group-lg">
          <label htmlFor="mortar-output-bearing">Bearing</label>
          <div className="input-group">
            <input id="mortar-output-bearing"
                   value={this.props.bearing}
                   type="number"
                   className="form-control"
                   placeholder="0"
                   readOnly/>
            <span className="input-group-addon"><abbr title="degrees">&deg;</abbr></span>
          </div>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-output-ranging">Ranging</label>
          <div className="input-group">
            <input id="mortar-output-ranging"
                   value={this.props.ranging}
                   type="number"
                   className="form-control"
                   placeholder="0"
                   readOnly/>
            <span className="input-group-addon"><abbr title="degrees">&deg;</abbr></span>
          </div>
        </div>

        <div className="form-group form-group-lg">
          <label htmlFor="mortar-output-charge">Charge</label>
          <input id="mortar-output-charge"
                 value={this.props.charge}
                 type="text"
                 className="form-control"
                 placeholder="C1"
                 readOnly/>
        </div>
      </div>
    );
  }
}
