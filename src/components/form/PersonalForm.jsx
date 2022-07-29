import React from 'react';

import '../../styles/PersonalForm.css';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.content };
  }

  updateValue(e) {
    this.setState(
      (prev) => {
        return {
          [e.target.id]: {
            label: prev[e.target.id].label,
            value: e.target.value,
          },
        };
      },
      () => {
        this.props.updater('personal', this.state);
      }
    );
  }

  render() {
    return (
      <fieldset className="personal section">
        <legend>Personal Information</legend>
        <div className="personal__first">
          <label>{`${this.state.first.label}:`}</label>
          <input
            id="first"
            type="text"
            className='personal__input'
            value={this.state.first.value}
            onChange={this.updateValue.bind(this)}
          />
        </div>
        <div className="personal__last">
          <label>{`${this.state.last.label}:`}</label>
          <input
            id="last"
            type="text"
            className='personal__input'
            value={this.state.last.value}
            onChange={this.updateValue.bind(this)}
          />
        </div>
        <div className="personal__phone">
          <label>{`${this.state.phone.label}:`}</label>
          <input
            id="phone"
            type="text"
            className='personal__input'
            value={this.state.phone.value}
            onChange={this.updateValue.bind(this)}
          />
        </div>
        <div className="personal__email">
          <label>{`${this.state.email.label}:`}</label>
          <input
            id="email"
            type="email"
            className='personal__input'
            value={this.state.email.value}
            onChange={this.updateValue.bind(this)}
          />
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
