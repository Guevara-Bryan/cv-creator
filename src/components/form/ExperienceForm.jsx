import React from 'react';
import { nanoid } from 'nanoid';

import '../../styles/ExperienceForm.css';

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }

  generateExp() {
    const entry = {
      company: '',
      position: '',
      description: '',
    };

    const key = nanoid();

    this.setState((prev) => {
      return {
        content: {
          ...prev.content,
          [key]: entry,
        },
      };
    });
  }

  onChange(e) {
    const { id, name, value } = e.target;

    this.setState(
      (prev) => {
        const temp = this.state.content;
        temp[id][name] = value;
        return {
          content: temp,
        };
      },
      () => {
        this.props.updater('experience', this.state.content);
      }
    );
  }

  handleExpDelete(e) {
    const { id } = e.target;

    this.setState(
      (prev) => {
        const other = prev.content;
        delete other[id];
        return {
          content: other,
        };
      },
      () => {
        this.props.updater('experience', this.state.content);
      }
    );

    console.log(this.state.content);
  }

  render() {
    return (
      <fieldset className="experience section">
        <legend>Experience</legend>
        {Object.keys(this.state.content).map((key) => {
          const exp = this.state.content[key];
          return (
            <div key={key} className="experience-entry">
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
                  className="experience__description input"
                  value={exp.description}
                  onChange={this.onChange.bind(this)}
                  rows={30}
                />
              </div>
              <button id={key} className='experience__delete' onClick={this.handleExpDelete.bind(this)}>
                Delete
              </button>
            </div>
          );
        })}
        <button className='experience__add' onClick={this.generateExp.bind(this)}>Add Experience</button>
      </fieldset>
    );
  }
}

export default ExperienceForm;
