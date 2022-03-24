let browserStatus = false;
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch(request.message){
    case("lockBrowser"):
      sendResponse("Locking");
      browserStatus = true;
      break
    case("browserStatus"):
      sendResponse(browserStatus);
      break
    case("unlockBrowser"):
      sendResponse("Unlocking")
      browserStatus = false;
      break
  }
  console.log(request);
  sendResponse("Message Recieved")
});