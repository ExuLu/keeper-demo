//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
