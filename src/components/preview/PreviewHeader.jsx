import ReactToPrint from 'react-to-print';
import '../../styles/PreviewHeader.css';

function PreviewHeader (props) {
  return (
    <div className="preview-header">
      <ReactToPrint
        trigger={() => {
          return (
            <button className="preview__download-button">Download PDF</button>
          );
        }}
        content={() => {
          return props.print.current;
        }}
      />
    </div>
  );
}

export default PreviewHeader;
