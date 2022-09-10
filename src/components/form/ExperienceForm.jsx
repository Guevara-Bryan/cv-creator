import React from 'react';
import { nanoid } from 'nanoid';



class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.content };
  }

  generateExp() {
    this.setState({
      [nanoid()]: {
        company: '',
        position: '',
        description: '',
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
        this.props.updater('experience', this.state);
      }
    );
  }

  handleExpDelete(e) {
    const { id } = e.target;

    this.setState(
      (prev) => {
        delete prev[id];
        return prev;
      },
      () => {
        this.props.updater('experience', this.state);
      }
    );
  }

  render() {
    return (
      <fieldset className="experience section">
        <legend>Experience</legend>
        {Object.keys(this.state).map((key) => {
          const exp = this.state[key];
          return (
            <div key={key} className="group-entry">
              <div>
                <label>Company:</label>
                <input
                  type="text"
                  id={key}
                  name="company"
                  className="input"
                  value={exp.company}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div>
                <label>Position:</label>
                <input
                  type="text"
                  id={key}
                  name="position"
                  className="input"
                  value={exp.position}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div>
                <label>Description:</label>
                <textarea
                  id={key}
                  name="description"
                  className="long-text input"
                  value={exp.description}
                  onChange={this.onChange.bind(this)}
                  rows={30}
                />
              </div>
              <button
                id={key}
                className="careful-button"
                onClick={this.handleExpDelete.bind(this)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="good-button" onClick={this.generateExp.bind(this)}>
          Add Experience
        </button>
      </fieldset>
    );
  }
}

export default ExperienceForm;
