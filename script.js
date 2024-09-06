let audioTurn = new Audio("ting.mp3");
let playTune = new Audio("music.mp3");

async function fetchJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return {
      joke: "Sorry, we couldn't fetch a joke at the moment. Please try again later.",
    };
  }
}

function displayJoke(joke) {
  const jokeContainer = document.getElementById("jokeContainer");
  if (joke.type === "single") {
    jokeContainer.innerHTML = `<p>${joke.joke}</p>`;
  } else {
    jokeContainer.innerHTML = `<p>${joke.setup}</p><p>${joke.delivery}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const jokeButton = document.getElementById("jokeButton");
  jokeButton.addEventListener("click", async () => {
    const joke = await fetchJoke();
    displayJoke(joke);
    playTune.play();
    audioTurn.play();
    jokeButton.classList.add("glow");
    setTimeout(() => {
      jokeButton.classList.remove("glow");
    }, 500);
  });
});
