import React from 'react';
import '../../styles/Preview.css';
import {nanoid} from 'nanoid';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, experience, education } = this.props.sections;
    return (
      <div className="preview">
        <div className="personal_section">
          <div className="personal__name">
            <h1>{`${personal.first.value} ${personal.last.value}`}</h1>
          </div>
          <div className="personal__contact">
            <p>{personal.phone.value}</p>
            <p>{personal.email.value}</p>
          </div>
        </div>

        <div className="experience_section">
            {Object.entries(experience).map(entry =>{
                return<div key={nanoid()}>
                    <p>{entry[1].company}</p>
                    <p>{entry[1].position}</p>
                    <p>{entry[1].description}</p>
                </div>
            })}
        </div>

        <div className="education_section"></div>
      </div>
    );
  }
}

export default Preview;
