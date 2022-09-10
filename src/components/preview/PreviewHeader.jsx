import React from 'react';
import ReactToPrint from 'react-to-print';
import '../../styles/PreviewHeader.css';

class PreviewHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="preview-header">
        <ReactToPrint
          trigger={() => {
            return (
              <button className="preview__download-button">Download PDF</button>
            );
          }}
          content={() => {
            return this.props.print.current;
          }}
        />
      </div>
    );
  }
}

export default PreviewHeader;
