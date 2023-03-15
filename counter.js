export function setupCounter() {
  // const fetchData = document.querySelector("#fetch-data");
  // const getFetch = document.querySelector("#get-fetch");

  // getFetch.addEventListener("click", () => {
  //   console.log("fetch clicked");
  //   fetchReq();
  // });

  async function fetchReq() {
    await fetch("http://localhost:3000/test/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("fetch-data : ", fetchData.innerText);
        fetchData.innerText = data;
        return data;
      });
  }

  const inputRadios = document.querySelectorAll(".radio");
  for (let i = 0; i < inputRadios.length; i++) {
    inputRadios[i].addEventListener("click", (e) => {
      console.log(e.target.id);
    });
  }

  const inputTexts = document.querySelectorAll(".text");
  for (let i = 0; i < inputTexts.length; i++) {
    inputTexts[i].addEventListener("keyup", (e) => {
      console.log(e.target.value);
    });
  }
}
