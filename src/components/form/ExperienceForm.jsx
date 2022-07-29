import React from 'react';
import { nanoid } from 'nanoid';

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }

  genereateExp() {
    /*
      make this function return an object of the form:
      {
        component: (<div> ... </div>)
        value: "" <-- The value of the input field
      }
     */
    return (
      <div key={nanoid()} className="experience__entry">
        <label>Company: </label>
        <input type="text" placeholder="Company X"></input>
      </div>
    );
  }

  handleAddExp() {
    this.setState(
      (prev) => {
        return {
          content: [...prev.content, this.genereateExp()],
        };
      },
      () => {
        this.props.updater('experience', this.state.content);
      }
    );
  }

  render() {
    return (
      <fieldset className="experience section">
        <legend>Experience</legend>
        {this.state.content}
        <button onClick={this.handleAddExp.bind(this)}>Add Experience</button>
      </fieldset>
    );
  }
}

export default ExperienceForm;
