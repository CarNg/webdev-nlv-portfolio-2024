"use client";

import { useEffect } from "react";

function printText(words) {
  let visible = true;
  let con = document.getElementById("console-underscore");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById("text");

  if (con) con.classList.remove("opacity-0");
  visible = true;

  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      if (target) target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1500);
    } else if (waiting === false) {
      if (target) target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      if (con) con.classList.add("opacity-0");
      visible = false;
    } else {
      if (con) con.classList.remove("opacity-0");
      visible = true;
    }
  }, 500);
}

export default function TerminalText({ text }) {
  useEffect(() => {
    setTimeout(() => {
      printText([text, "stay tuned"]);
    }, 1300);
  });

  return (
    <div className="console-container z-10 h-10 flex justify-center min-w-full">
      <h1 className="text-sm md:text-3xl text-white" id="text"></h1>
      <div
        className=" inline-block relative left-1 text-sm md:text-3xl text-white opacity-0"
        id="console-underscore"
      >
        &#95;
      </div>
    </div>
  );
}
