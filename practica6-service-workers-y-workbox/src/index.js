import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.csv';
import yaml from './data.yaml';
import json from './data.json5';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function component() {
    const element = document.createElement('div');
    //lodash
    element.innerHTML = _.join(['Hello', Data[0][1]], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(myIcon);
    console.log(Data);
  
    return element;
  }

  console.log(yaml.title); // output `YAML Example`
  console.log(yaml.owner.name); // output `Tom Preston-Werner`

  console.log(json.title); // output `JSON5 Example`
  console.log(json.owner.name); // output `Tom Preston-Werner`
  
  document.body.appendChild(component());