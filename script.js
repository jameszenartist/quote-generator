let destination = document.querySelector(".quote");

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        destination.innerHTML = `${data.content}`;
      });
    destination.classList.add("fade");
    setTimeout(removeClass, 7000);
    return response;
  } catch (err) {
    console.log(err);
  }
}

function removeClass() {
  destination.classList.remove("fade");
  destination.style.opacity = 0;
}
