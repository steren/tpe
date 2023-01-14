let zipArrayBuffer;

HLEngine.init({
  canvas: document.getElementById('canvas'),
  location: 'hl-engine-js/lib'
});

fetch("tpe.zip")
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    zipArrayBuffer = arrayBuffer;
    // enable Start button
    document.getElementById('start').disabled = false;
  });

document.getElementById('start').onclick = function() {
  HLEngine.start({
    zip: zipArrayBuffer,
    filesystem: "RAM",
    fullscreen: true,
  });
};