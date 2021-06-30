import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'

import reportWebVitals from './reportWebVitals'; 
 
function tick(){
  ReactDOM.render(
     <App></App>,
    document.getElementById('root')
  );
}

//relogio
setInterval(tick,1000);
  

 
 
reportWebVitals();
