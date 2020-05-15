let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");

let inpSpeed = document.getElementById("inpSpeed");
let btnStop = document.getElementById("btnStop");
let winner = document.getElementById("machine");

let values = ["😃", "😇", "😋", "😂", "😎", "😭", "😡"];

function getRandomValue() {
  return values[Math.floor(Math.random() * 7)];
}

let animationId;

//by default also shuffle starts
let speed = getComputedStyle(document.documentElement).getPropertyValue(
  "--speed"
);

animationId = setInterval(() => {
  value1.innerText = getRandomValue();
  value2.innerText = getRandomValue();
  value3.innerText = getRandomValue();
}, 1000 / speed);
//by default also shuffle ends

function updateAnimation(newSpeed) {
  if (animationId) clearInterval(animationId);

  animationId = setInterval(() => {
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
  }, 1000 / newSpeed);
}

inpSpeed.onchange = function (ev) {
  // document.documentElement => this is ":root" of css
  document.documentElement.style.setProperty("--speed", ev.target.value);
  updateAnimation(ev.target.value);
  // speed = getComputedStyle(document.documentElement)
  //     .getPropertyValue('--speed') OR
  speed = ev.target.value;
};
var promiseObj = () => {
  return new Promise((resolve, reject) => {
    inpSpeed.disabled = true;
    document.documentElement.style.setProperty("--speed", 0);
    clearInterval(animationId);
    resolve();
    if (
      value1.innerText === value2.innerText &&
      value1.innerText === value3.innerText
    ) {
      alert("🐔Winner Winner Chicken Dinner🐔");
    } else {
      alert("❌Better Luck Next Time❌");
      return;
    }
  });
};

btnStop.onclick = function () {
  promiseObj().then(() => {});
};
