let colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];

document.getElementById('but').onclick = function bckFunction(){
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
};
