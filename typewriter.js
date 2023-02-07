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

    //the code below me plays a space sound when there the programme detects a space
    if (letters[i] === " ") {
      audio3.play();
    }
    //the code below me plays a sound that stops the typewriter when the programme detects a full stop
    if (letters[i] === ".") {
      audio4.play();
      audio5.play();
    }

    i++;

    //the code below just sets a delay when the characters appear one at a time on the page.
    setTimeout(print, Math.random() * 1000); // delay of 1 second
  }
}

print();
