// const h1 = document.querySelector("h1");
// const alertH1 = function (e) {
//   alert("Reading Apty!");
//   h1.removeEventListener("mouseenter", alertH1);
// };
// h1.addEventListener("mouseenter", alertH1);

//Older Way of writing and cant add multiple listeners it override its
// h1.onmouseenter = function (e) {
//   alert("Reading Apty!");
// };

//Create a random Color

const randomInterger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => {
  const r = randomInterger(0, 255);
  const g = randomInterger(0, 255);
  const b = randomInterger(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

console.log(randomColor());

document
  .getElementById("featureLink")
  .addEventListener("click", function (event) {
    this.style.backgroundColor = randomColor();
    console.log(`Feature Element ${event.target}`);
    console.log(event.target === event.currentTarget);
    event.stopPropagation();
  });

document
  .querySelector(".list-container")
  .addEventListener("click", function (event) {
    this.style.backgroundColor = randomColor();
    console.log(`List Container ${event.target}`);
    console.log(event.target === event.currentTarget);
  });

document.querySelector(".nav-container").addEventListener(
  "click",
  function (event) {
    this.style.backgroundColor = randomColor();
    console.log(`Navigation Container ${event.target}`);
    console.log(event.target === event.currentTarget);
  }
  //   true`
);
