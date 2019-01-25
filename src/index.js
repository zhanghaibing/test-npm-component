import _ from 'lodash';
import './style.css';
// import Icon from './img.jpg';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ');
  element.classList.add('hello');

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // const myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
