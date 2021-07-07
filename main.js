const list = document.querySelector("#list");
const button = document.querySelector("#button");
let residents;
const names = [];

button.addEventListener("click", () => {
  console.log(button);

  axios.get("https://swapi.dev/api/planets/?search=alderaan").then((res) => {
    console.log(res.data.results);
    residents = res.data.results[0].residents;
    for (i in residents) {
      axios.get(residents[i]).then((res) => {
        let name = res.data.name;
        let newh2 = document.createElement("h2");
        newh2.innerText = name;
        list.appendChild(newh2);
      });
    }
  });
});
