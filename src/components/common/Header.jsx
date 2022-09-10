import React from 'react';
import '../../styles/common.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="header">
      <h1>Resume Creator</h1>
    </div>;
  }
}

export default Header;
