import {init, start, fullscreen} from './hl-engine-js/lib/hl-engine.js';

let zipArrayBuffer;

init({
  canvas: document.getElementById('canvas'),
  location: 'hl-engine-js/lib'
});

fetch("tpe.zip")
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    zipArrayBuffer = arrayBuffer;
    // enable Start button
    document.getElementById('start').disabled = false;
    document.getElementById('maps').disabled = false;
  });

document.getElementById('start').onclick = function() {
  const options = {
    zip: zipArrayBuffer,
    fullscreen: true,
  }
  if(document.getElementById('maps').value) {
    options.map = document.getElementById('maps').value;
  }
  start(options);
};