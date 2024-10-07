import React from 'react';

const PdfViewer = ({ pdfUrl, styles }) => {
  const viewerUrl = `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
  return (
      <iframe
        title="PDF Viewer"
        src={viewerUrl}
        style={styles}
      ></iframe>
  );
};

export default PdfViewer;
