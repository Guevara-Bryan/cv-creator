import React from 'react';
import '../../styles/FormContainer.css';

import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import PersonalForm from './PersonalForm';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, experience, education } = this.props.sections;
    return (
      <div className="form-container">
        <PersonalForm content={personal} updater={this.props.updater} />
        <ExperienceForm content={experience} updater={this.props.updater} />
        <EducationForm content={education} />
      </div>
    );
  }
}

export default FormContainer;
