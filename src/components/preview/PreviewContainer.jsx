import '../../styles/PreviewContainer.css';
import Preview from './Preview';
import PreviewHeader from './PreviewHeader';

import { useRef } from 'react';

function PreviewContainer(props) {
  const printRef = useRef(null);

  return (
    <div className="preview-container">
      <PreviewHeader print={printRef} />
      <Preview printRef={printRef} sections={props.sections} />
    </div>
  );
}

export default PreviewContainer;
