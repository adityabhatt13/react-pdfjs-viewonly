# react-pdfjs-viewonly

`react-pdfjs-viewonly` is a simple React component that integrates the `pdf.js` library to display PDF documents in your React App. The viewer supports viewing options like zoom, navigation, and find in document, but restricts actions such as downloading, saving, editing the file and annotations for extra security, integrity and content protection.

## Features
- View PDFs in a component.
- Supports zooming and navigation.
- Search within the document.
- Fully responsive with customizable dimensions.
- Uses `pdf.js` for rendering the PDF.
- Restricted downloading, saving, editing and annotations.

## Installation

1. Install the package via npm:

```bash
npm install react-pdfjs-viewonly
```

2. After installation, navigate to the node_modules/react-pdfjs-viewonly directory.

3. Copy the pdfjs folder from dist/public in the package to the public folder of your React App.

You can achieve this manually or by running this command in terminal:

```bash
cp -R node_modules/react-pdfjs-viewonly/dist/public/pdfjs ./public
```

4. Once the folder is copied, the PDF viewer will work seamlessly in your application, as the necessary files will be available in the public folder.

### Example Directory Structure After Copying

```bash
/my-react-app
  /node_modules
  /public
    /pdfjs        <-- Copied folder
    index.html
  /src
    App.js
  package.json
```

## Usage

`react-pdfjs-viewonly` basically returns a `<PdfViewer>` Component which is an `<iframe>` implemented as follows:

```javascript
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
```

### Basic
`PdfViewer` requires at least a `pdfUrl` (local or external).

```javascript
import PdfViewer from 'react-pdfjs-viewonly'

function App() {
  return <PdfViewer pdfUrl='https://pdfobject.com/pdf/sample.pdf' />
}

export default App
```

### Optional Props

- `styles` prop can be used to give some basic custom styling to the viewer.

Note: For advance styling you will need to make changes in the public/pdfjs/web/viewer.css

- `header` prop can be used to enable/disable the toolbar. It's value is `true` by default.

```javascript
import PdfViewer from 'react-pdfjs-viewonly'

function App() {

  const customStyles = {
    border: '2px solid #000',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  }

  return <PdfViewer pdfUrl='https://pdfobject.com/pdf/sample.pdf' styles={customStyles} header={false} />
}

export default App
```


