import React from 'react';
import '../../styles/PreviewContainer.css';
import Preview from './Preview';
import PreviewHeader from './PreviewHeader';

class PreviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.printRef = React.createRef();
  }

  render() {
    return (
      <div className="preview-container">
        <PreviewHeader print={this.printRef.current} />
        <Preview ref={this.printRef} sections={this.props.sections} />
      </div>
    );
  }
}

export default PreviewContainer;
