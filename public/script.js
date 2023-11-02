const socket = io();

let clickme = document.querySelector('#clickme');
let dynamicCounter = document.querySelector('#dynamicCounter');

socket.on('updateClickCount', (count) => {
  dynamicCounter.textContent = `clicked ${count} times`;
});

document.addEventListener('DOMContentLoaded', function() {
  clickme.addEventListener('click', function() {
    socket.emit('click');
  });
});