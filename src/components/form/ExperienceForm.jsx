import React from 'react';
import { nanoid } from 'nanoid';

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleExpDelete = this.handleExpDelete.bind(this);
  }

  onChange(e) {
    const { id, name, value } = e.target;
    this.props.updater.experience(id, name, value);
  }

  handleExpDelete(e) {
    const { id } = e.target;
    this.props.updater.deleteExperience(id);
  }

  render() {
    return (
      <fieldset className="experience section">
        <legend>Experience</legend>
        {Object.keys(this.props.content).map((key) => {
          const currentExp = this.props.content[key];
          return (
            <div key={key} className="group-entry">
              <div>
                <label>Company:</label>
                <input
                  type="text"
                  id={key}
                  name="company"
                  className="input"
                  value={currentExp.company}
                  onChange={this.onChange}
                />
              </div>

              <div>
                <label>Position:</label>
                <input
                  type="text"
                  id={key}
                  name="position"
                  className="input"
                  value={currentExp.position}
                  onChange={this.onChange}
                />
              </div>

              <div>
                <label>Description:</label>
                <textarea
                  id={key}
                  name="description"
                  className="long-text input"
                  value={currentExp.description}
                  onChange={this.onChange}
                  rows={30}
                />
              </div>
              <button
                id={key}
                className="careful-button"
                onClick={this.handleExpDelete}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button
          className="good-button"
          onClick={() => {
            this.props.updater.experience(nanoid());
          }}
        >
          Add Experience
        </button>
      </fieldset>
    );
  }
}

export default ExperienceForm;
