let buttons = document.getElementsByTagName('button');
let textarea = document.getElementById("textarea");
buttons[0].addEventListener("click", function (e) {
  textarea.innerText = "Starting";
});
buttons[1].addEventListener("click", function (e) {
  textarea.innerText = "Status";
});
buttons[2].addEventListener("click", function (e) {
  textarea.innerText = "Ending";
});
