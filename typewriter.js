"use strict";
let word = "This text is written one character at a time.";
let letters = word;

let i = 0;

function print() {
  if (i < letters.length) {
    console.log(letters[i]);
    document.querySelector(
      "#typewriter"
    ).innerHTML += `<span>${letters[i]}</span>`;
    const audio = document.getElementById("typekey1");
    const audio2 = document.getElementById("typekey2");
    const audio3 = document.getElementById("typespace");
    const audio4 = document.getElementById("typelast");
    const audio5 = document.getElementById("typereturn");

    audio.play();
    audio2.play();
    if (letters[i] === " ") {
      const audio = document.getElementById("typespace");
      audio3.play();
    }

    if (letters[i] === ".") {
      const audio = document.getElementById("typespace");
      audio4.play();
      audio5.play();
    }

    i++;

    setTimeout(print, Math.random() * 1000); // delay of 1 second
  }
}

print();
