/** @flow */

import React from 'react';
import ReactPDF, { Document, Font  } from '@react-pdf/renderer';

import Resume from './Resume';

Font.register(`${__dirname}/fonts/Open_Sans/OpenSans-Regular.ttf`, {
  family: 'Open Sans',
});
Font.register(`${__dirname}/fonts/Open_Sans/OpenSans-Italic.ttf`, {
  family: 'Open Sans Italic',
});
Font.register(`${__dirname}/fonts/Open_Sans/OpenSans-Bold.ttf`, {
  family: 'Open Sans Bold',
});
Font.register(`${__dirname}/fonts/Open_Sans/OpenSans-BoldItalic.ttf`, {
  family: 'Open Sans Bold Italic',
});
Font.register(`${__dirname}/fonts/georgia/Georgia Regular.ttf`, {
  family: 'Georgia',
});
Font.register(`${__dirname}/fonts/georgia/Georgia Bold.ttf`, {
  family: 'Georgia Bold',
});
Font.register(`${__dirname}/fonts/LeagueGothic/LeagueGothic-Regular.ttf`, {
  family: 'League Gothic',
});

const Output = (props: any) => (
  <Document
    author='Cassidy Laidlaw'
    keywords=''
    subject='The resume of Cassidy Laidlaw'
    title='Resume'
  >
    <Resume {...props} />
  </Document>
);

/**
 * Render the resume. Includes all command line arguments as props to the
 * <Resume> element.
 */
let props = {};
for(let arg of process.argv.slice(2)) {
  props[arg] = true;
}
ReactPDF.render(<Output {...props} />,
  `./Cassidy Laidlaw resume.pdf`);
