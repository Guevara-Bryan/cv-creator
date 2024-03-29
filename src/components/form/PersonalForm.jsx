import '../../styles/common.css';

function PersonalForm (props) {
  function updateValue(e){
    props.updater.personal(e.target.id, e.target.value);
  }

  const personal = props.content;
    return (
      <fieldset className="personal section">
        <legend>Personal Information</legend>
        <div className="group-entry">
          <div>
            <label>{`${personal.first.label}:`}</label>
            <input
              id="first"
              type="text"
              className="input"
              value={personal.first.value}
              onChange={updateValue}
            />
          </div>
          <div>
            <label>{`${personal.last.label}:`}</label>
            <input
              id="last"
              type="text"
              className="input"
              value={personal.last.value}
              onChange={updateValue}
            />
          </div>
          <div>
            <label>{`${personal.phone.label}:`}</label>
            <input
              id="phone"
              type="text"
              className="input"
              value={personal.phone.value}
              onChange={updateValue}
            />
          </div>
          <div>
            <label>{`${personal.email.label}:`}</label>
            <input
              id="email"
              type="email"
              className="input"
              value={personal.email.value}
              onChange={updateValue}
            />
          </div>
          <div>
            <label>{`${personal.objective.label}:`}</label>
            <textarea
              id="objective"
              className="long-text input"
              value={personal.objective.value}
              onChange={updateValue}
            />
          </div>
        </div>
      </fieldset>
    );
}

export default PersonalForm;
