import { nanoid } from 'nanoid';

function EducationForm (props) {
  function onChange(e) {
    const { id, name, value } = e.target;
    props.updater.education(id, name, value);
  }

  function handleEduDelete(e) {
    const { id } = e.target;
    props.updater.deleteEducation(id);
  }

  return (
    <fieldset className="education section">
      <legend>Education</legend>
      {Object.keys(props.content).map((key) => {
        const edu = props.content[key];
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
              />
            </div>

            <button
              id={key}
              className="careful-button"
              onClick={handleEduDelete}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button
        className="good-button"
        onClick={() => {
          props.updater.education(nanoid());
        }}
      >
        Add Education
      </button>
    </fieldset>
  );
}

export default EducationForm;
