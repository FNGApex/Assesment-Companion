let buttons = document.getElementsByTagName('button');
let textarea = document.getElementById("textarea");
extensionId = "assesment-companion@summitlearning.com"
let extensionResponse = 0
let sending;

buttons[0].addEventListener("click", function (e) {
  textarea.innerText = "Sent Start Message";
  sending = browser.runtime.sendMessage({
    message : "lockBrowser"
  });
  sending.then(function (response) {
    textarea.innerText = response;
  }, function (error) {
    textarea.innerText = "Error" + error;
  })
});


buttons[1].addEventListener("click", function (e) {
  textarea.innerText = "Status Message:";
  sending = browser.runtime.sendMessage({
    message: "browserStatus"
  })
  sending.then(function (response){
    textarea.innerText = response
  }, function(error){
    textarea.innerText = "Error" + error;
  })

});
buttons[2].addEventListener("click", function (e) {
  sending = browser.runtime.sendMessage({
    message: "unlockBrowser"
  })
  textarea.innerText = "Sent End Message";
  sending.then(function (response){
    textarea.innerText = response
  }, function(error){
    textarea.innerText = "Error" + error;
  })
});