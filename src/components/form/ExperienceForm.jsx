import { nanoid } from 'nanoid';

function ExperienceForm(props) {
  function onChange(e) {
    const { id, name, value } = e.target;
    props.updater.experience(id, name, value);
  }

  function handleExpDelete(e) {
    const { id } = e.target;
    props.updater.deleteExperience(id);
  }

  return (
    <fieldset className="experience section">
      <legend>Experience</legend>
      {Object.keys(props.content).map((key) => {
        const currentExp = props.content[key];
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
                onChange={onChange}
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
                onChange={onChange}
              />
            </div>

            <div>
              <label>Description:</label>
              <textarea
                id={key}
                name="description"
                className="long-text input"
                value={currentExp.description}
                onChange={onChange}
                rows={30}
              />
            </div>
            <button
              id={key}
              className="careful-button"
              onClick={handleExpDelete}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button
        className="good-button"
        onClick={() => {
          props.updater.experience(nanoid());
        }}
      >
        Add Experience
      </button>
    </fieldset>
  );
}

export default ExperienceForm;
