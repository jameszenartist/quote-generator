let destination = document.querySelector(".quote");
let button = document.querySelector(".btn");
let baseTime = 9000;
let wordCount, time;

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        wordCount = data.content.split(" ").length;
        time = wordCount * 200;
        if (wordCount >= 20) {
          baseTime += time;
        }
        destination.innerHTML = `${data.content}`;
      });
    destination.style.opacity = null;
    destination.classList.add("fade");
    setTimeout(removeClass, baseTime);

    return response;
  } catch (err) {
    console.log(err);
  }
}

function removeClass() {
  destination.classList.remove("fade");
  destination.classList.add("fadeout");
  button.classList.remove("fadeoutBtn");

  setTimeout(() => {
    destination.classList.remove("fadeout");
    destination.style.opacity = 0;
    button.disabled = false;
  }, 2000);
}

function btnFade() {
  button.classList.add("fadeoutBtn");
  button.disabled = true;
}
