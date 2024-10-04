import React from 'react';
import PropTypes from 'prop-types';

const PdfViewer = ({ pdfUrl, width, height }) => {
  const viewerUrl = `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
  return (
      <iframe
        title="PDF Viewer"
        src={viewerUrl}
        width={width}
        height={height}
      ></iframe>
  );
};

PdfViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PdfViewer;
