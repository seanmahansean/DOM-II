// Your code goes here
const e1 = document.getElementById('e1');

e1.addEventListener('click', event => {
  e1.textContent = `And the text changed`;
});

const e2 = document.getElementById('e2');

e2.addEventListener('dblclick', event => {
  e2.textContent = `Congratz. this text is gone`;
});

const e3 = document.getElementById('e3');

e3.addEventListener('mouseover', event => {
  alert("Boo");
});

const e4 = document.getElementById('e4');

e4.addEventListener('contextmenu', event => {
  e4.textContent = `Wrong click`;
});

const e5 = document.getElementById('e5');

e5.addEventListener('wheel', event => {
  e5.textContent = `Wheeeee`;
});

const e6 = document.getElementById('e6');

e6.addEventListener('mousemove', event => {
  e6.textContent = "Nope";
});

const e7 = document.getElementById('e7');

e7.addEventListener('mousedown', event => {
  e7.textContent = `Wait don't click!`;
});

const e8 = document.getElementById('e8');

e8.addEventListener('mouseup', event => {
  e8.textContent = `Dude that was a little rude`;
});

const e9 = document.getElementById('e9');

e9.addEventListener('keydown', event => {
  alert("just stop")
});

const e10 = document.getElementById('e10');

e10.addEventListener('mouseout', event => {
  e10.textContent = `Alright now I am done`;
});