let buttons = document.getElementsByTagName('button');
let textarea = document.getElementById("textarea");
function browser (){}
buttons[0].addEventListener("click", function (e) {
  textarea.innerText = "Send Message";
});
buttons[1].addEventListener("click", function (e) {
  textarea.innerText = "Status";
});
buttons[2].addEventListener("click", function (e) {
  textarea.innerText = "Ending";
});
