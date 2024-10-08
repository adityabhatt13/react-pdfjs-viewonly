import React from 'react';
import PropTypes from 'prop-types';

const PdfViewer = ({ pdfUrl, styles, header }) => {
  const viewerUrl = `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}&isHeaderVisible=${!!header}`;
  return (
      <iframe
        title="PDF Viewer"
        src={viewerUrl}
        style={styles}
      ></iframe>
  );
};

PdfViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  styles: PropTypes.object,
  header: PropTypes.bool
};

export default PdfViewer;
