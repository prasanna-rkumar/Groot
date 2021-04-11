const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const translateButtonEl = document.querySelector("#translate");

const SERVER_URL = "https://api.funtranslations.com/translate/groot.json";

function generateApiEndpoint(searchTerm) {
  return encodeURI(`${SERVER_URL}?text=${searchTerm}`);
}

function translate() {
  const searchTerm = inputEl.value;
  console.log("clicked", searchTerm);

  const finalEndPoint = generateApiEndpoint(searchTerm);
  console.log(finalEndPoint);
  fetch(generateApiEndpoint(searchTerm))
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
      outputEl.innerText = json.contents.translated;
    })
    .catch((err) => {
      console.log(err);
      alert(
        "The API server has reached it's peak performance. Please use translator after some time."
      );
    });
}

translateButtonEl.addEventListener("click", translate);
