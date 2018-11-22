// import _ from 'lodash';
import './sass/app.scss';
import { cube } from './math';
// import bird from './images/bird.jpg';
// import Data from './data.xml';
// import printHandler from './print.js';

if(process.env.NODE_ENV !== 'production') {
  console.log('Look like we are in development mode');
}

/*function component() {
  // let element = document.createElement('div');
  // var btn = document.createElement('button');
  var element = document.createElement('pre');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n');

  // btn.innerHTML = 'Click me and check console';
  // btn.onclick = printHandler;
  // element.classList.add('hello');

  // var imgBird = new Image();
  // imgBird.src = bird;
  // element.appendChild(imgBird);

  // console.log(Data);
  // element.appendChild(btn);

  return element;
}*/

/*function getComponent() {
  return import(/*webpackChunkName: "lodash"/ 'lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }).catch(error => 'An error occurred while loading the component');
}*/

async function getComponent() {
  var element = document.createElement('div');
  const { default: _ } = await import(/*webpackChunkName: "lodash"*/ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

// document.body.appendChild(component());
/*let element = component();
document.body.appendChild(element);*/
getComponent().then(component => {
  document.body.appendChild(component);
});

if(module.hot) {
  module.hot.accept('./math.js', function() {
    console.log('Accepting the update printHandler module sdfd');
    // printHandler();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}