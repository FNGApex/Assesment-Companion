let buttons = document.getElementsByTagName('button');
let textarea = document.getElementById("textarea");
extensionId = "assesment-companion@summitlearning.com"
let extensionResponse = 0
let sending;

buttons[0].addEventListener("click", function (e) {
  textarea.innerText = "Sent Start Message";
  sending = browser.runtime.sendMessage({
    request : "lockBrowser"
  });
  sending.then(function (response) {
    textarea.innerText = response;
  }, function (error) {
    textarea.innerText = "Error" + error;
  })
});


buttons[1].addEventListener("click", function (e) {
  textarea.innerText = "Status Message:";
});
buttons[2].addEventListener("click", function (e) {
  textarea.innerText = "Sent End Message";
});