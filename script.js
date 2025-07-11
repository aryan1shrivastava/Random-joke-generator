const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("getjokebtn");
const loadingEl = document.getElementById("loading");

async function getJoke() {
  try {
    loadingEl.classList.remove("hidden");
    jokeElement.textContent = "";

    const { data } = await axios.get(
      "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    );

    if (data.success && data.data && data.data.content) {
      jokeElement.textContent = data.data.content;
    } else {
      jokeElement.textContent = "No joke found!";
    }
  } catch (error) {
    console.error(error);
    jokeElement.textContent = "Failed to fetch a joke. Please try again.";
  } finally {
    loadingEl.classList.add("hidden");
  }
}

jokeBtn.addEventListener("click", getJoke);

getJoke(); // Fetch a joke when the page loads
