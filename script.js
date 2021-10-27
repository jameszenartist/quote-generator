let destination = document.querySelector(".quote");
destination.addEventListener("load", addClass);

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        destination.innerHTML = `${data.content}`;
      });
    return response;
  } catch (err) {
    console.log(err);
  }
}

function addClass() {
  document.querySelector("quote").classList.add("fade");
}
