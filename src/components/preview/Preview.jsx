import React from 'react';
import '../../styles/Preview.css';

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
        </div>
      </div>
    );
  }
}

export default Preview;
