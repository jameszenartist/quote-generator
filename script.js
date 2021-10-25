let quoteArray = [];
let index = 0;
// let button = document.querySelector(".btn");
let destination = document.querySelector(".quote");

window.addEventListener("load", pushQuote);

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        quoteArray[index] = data.content;
      });
    // console.log(quoteArray[index]);
    // console.log("Response received");
    quoteArray[index] += " ";
    destination.innerHTML = quoteArray[index];
    return response;
  } catch (err) {
    console.log(err);
  }
}

function pushQuote() {
  getQuote();
  setTimeout("pushQuote()", 7000);
}
