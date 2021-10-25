let quoteArray = [];
let index = 0;
let textPosition = 0;
let flag = true;
let destination = document.querySelector(".quote");

window.addEventListener("load", typewriter);

function loadQuote() {
  const url = "https://api.quotable.io/random";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.status);
      }
    })
    .then((data) => {
      quoteArray[index] = data.content;
    });
}

function typewriter() {
  if (flag) {
    loadQuote();
    quoteArray[index] += " ";
    flag = false;
  }

  destination.innerHTML =
    quoteArray[index].substring(0, textPosition) + "<span>\u25AE</span>";

  if (textPosition++ != quoteArray[index].length) {
    setTimeout("typewriter()", 100);
  } else {
    quoteArray[index] = " ";
    setTimeout("typewriter()", 3000);
    textPosition = 0;
    flag = true;
  }
}
