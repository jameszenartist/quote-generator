let destination = document.querySelector(".quote");
let button = document.querySelector(".btn");

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        destination.innerHTML = `${data.content}`;
      });
    destination.classList.add("fade");
    setTimeout(removeClass, 9000);
    return response;
  } catch (err) {
    console.log(err);
  }
}

function removeClass() {
  destination.classList.remove("fade");
  button.classList.remove("fadeout");
  button.disabled = false;
  destination.style.opacity = 0;
}

function btnFade() {
  button.classList.add("fadeout");
  button.disabled = true;
}
