let buttons = document.getElementsByTagName('button');
let textarea = document.getElementById("textarea");
extensionId = "assesment-companion@summitlearning.com"
let extensionResponse = 0
buttons[0].addEventListener("click", function (e) {
  textarea.innerText = "Sent Start Message";
  window.postMessage({direction: "from-page-script",message:"extension_started"},"*");
});
buttons[1].addEventListener("click", function (e) {
  textarea.innerText = "Status Message:";
});
buttons[2].addEventListener("click", function (e) {
  textarea.innerText = "Sent End Message";
});
window.addEventListener("message", function(event){
  console.log(event);
});