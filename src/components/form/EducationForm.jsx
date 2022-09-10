import React from 'react';
import { nanoid } from 'nanoid';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props.content };
  }

  generateEdu() {
    this.setState({
      [nanoid()]: {
        school: '',
        major: '',
        from: '',
        to: '',
      },
    });
  }

  onChange(e) {
    const { id, name, value } = e.target;

    this.setState(
      (prev) => {
        prev[id][name] = value;
        return prev;
      },
      () => {
        this.props.updater('education', this.state);
      }
    );
  }

  handleEduDelete(e) {
    const { id } = e.target;

    this.setState(
      (prev) => {
        delete prev[id];
        return prev;
      },
      () => {
        this.props.updater('education', this.state);
      }
    );
  }

  render() {
    return (
      <fieldset className="education section">
        <legend>Education</legend>
        {Object.entries(this.state).map((entry) => {
          const [key, edu] = entry;
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
                  onChange={this.onChange.bind(this)}
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
                  onChange={this.onChange.bind(this)}
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
                  onChange={this.onChange.bind(this)}
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
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <button
                id={key}
                className="careful-button"
                onClick={this.handleEduDelete.bind(this)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="good-button" onClick={this.generateEdu.bind(this)}>
          Add Education
        </button>
      </fieldset>
    );
  }
}

export default EducationForm;
