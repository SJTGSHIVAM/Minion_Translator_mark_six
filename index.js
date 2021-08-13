const inputTextArea = document.querySelector("#input-text-area");
const outputDiv = document.querySelector("#output-div");
const translateButton = document.querySelector("#translate-btn");
const minionApi = "https://api.funtranslations.com/translate/minion.json";

const translateQuery = (text) => {
  return minionApi + "?text=" + text;
};
const errorHandler = (err) => {
  console.log(err);
  alert("Something went wrong, Please try again later!");
};

const transelateText = () => {};

translateButton.addEventListener("click", transelateText);
