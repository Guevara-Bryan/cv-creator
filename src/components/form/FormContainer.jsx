import '../../styles/FormContainer.css';

import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import PersonalForm from './PersonalForm';

function FormContainer ({sections, updater}){
  const { personal, experience, education } = sections;
  return (
    <div className="form-container">
      <PersonalForm content={personal} updater={updater} />
      <ExperienceForm content={experience} updater={updater} />
      <EducationForm content={education} updater={updater}/>
    </div>
  );
}

export default FormContainer;
