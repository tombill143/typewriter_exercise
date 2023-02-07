"use strict";
let word = "My Name is Tom and I am amazing";
let letters = word;
/*let letters = [
  "M",
  "y",
  " ",
  "n",
  "a",
  "m",
  "e",
  " ",
  "i",
  "s",
  " ",
  "T",
  "o",
  "m",
  " ",
  "a",
  "n",
  "d",
  " ",
  "i",
  " ",
  "a",
  "m",
  " ",
  "a",
  "m",
  "a",
  "z",
  "i",
  "n",
  "g",
];*/

let i = 0;

function print() {
  if (i < letters.length) {
    console.log(letters[i]);

    document.querySelector(
      "#typewriter"
    ).innerHTML += `<span>${letters[i]}</span>`;
    i++;
    setTimeout(print, Math.random() * 1000); // delay of 1 second
  }
}

print();

/*for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}*/
