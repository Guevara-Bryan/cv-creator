import '../../styles/Preview.css';

function Preview (props){
  const { personal, experience, education } = props.sections;

    return (
      <div className="preview" ref={props.printRef}>
        <div className="personal_section">
          <div className="personal__fullname">
            <h1>{`${personal.first.value} ${personal.last.value}`}</h1>
          </div>
          <div className="personal__contact-info">
            <p>{personal.phone.value}</p>
            <p>{personal.email.value}</p>
          </div>
          <div className="personal__objective">
            <h2 className='title'>Objective</h2>
            <p>{personal.objective.value}</p>
          </div>
        </div>

        <div className="experience_section">
          <h2 className='title'>Experience</h2>
          {Object.entries(experience).map((entry) => {
            const [expKey, exp] = entry;
            return (
              <div className="experience_entry" key={expKey}>
                <h3>{`${exp.position} | ${exp.company}`}</h3>
                <p>{exp.description}</p>
              </div>
            );
          })}
        </div>

        <div className="education_section">
          <h2 className='title'>Education</h2>
          {Object.entries(education).map((entry) => {
            const [eduKey, edu] = entry;
            return <div className="education_entry" key={eduKey}>
              <p className='education__school'>{edu.school}</p>
              <p className='education__major'>{edu.major}</p>
              <p className='education__start'>{edu.from.split('-')[0]}</p>
              <p className='education__end'>{edu.to.split('-')[0]}</p>
            </div>;
          })}
        </div>
      </div>
    );
}

export default Preview;
