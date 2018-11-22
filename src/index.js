import _ from 'lodash';
// import './sass/app.scss';
// import bird from './images/bird.jpg';
// import Data from './data.xml';
import printHandler from './print.js';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check console';
  btn.onclick = printHandler;
  // element.classList.add('hello');

  // var imgBird = new Image();
  // imgBird.src = bird;
  // element.appendChild(imgBird);

  // console.log(Data);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());