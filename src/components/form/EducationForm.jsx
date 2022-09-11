import React from 'react';
import { nanoid } from 'nanoid';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleEduDelete = this.handleEduDelete.bind(this);
  }

  onChange(e) {
    const { id, name, value } = e.target;
    this.props.updater.education(id, name, value);
  }

  handleEduDelete(e) {
    const { id } = e.target;
    this.props.updater.deleteEducation(id);
  }

  render() {
    return (
      <fieldset className="education section">
        <legend>Education</legend>
        {Object.keys(this.props.content).map((key) => {
          const edu = this.props.content[key];
          return (
            <div key={key} className="group-entry">
              <div>
                <label>School:</label>
                <input
                  id={key}
                  className="input"
                  name="school"
                  type="text"
                  value={edu.school}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label>Major:</label>
                <input
                  id={key}
                  className="input"
                  name="major"
                  type="text"
                  value={edu.major}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label>Starting Year:</label>
                <input
                  id={key}
                  className="input"
                  name="from"
                  type="text"
                  maxLength={4}
                  value={edu.from}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label>Ending Year:</label>
                <input
                  id={key}
                  className="input"
                  name="to"
                  type="text"
                  maxLength={4}
                  value={edu.to}
                  onChange={this.onChange}
                />
              </div>

              <button
                id={key}
                className="careful-button"
                onClick={this.handleEduDelete}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button
          className="good-button"
          onClick={() => {
            this.props.updater.education(nanoid());
          }}
        >
          Add Education
        </button>
      </fieldset>
    );
  }
}

export default EducationForm;
