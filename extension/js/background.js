/*
 * Lockdown the chrome browser
 *
 * Handles the following cases:
 * Case 1: Changing Tab/Window Focus
 * Case 2: Attempting to open new tab or window
 * Case 3: Closing Existing Tab Before Finishing
 * Case 4: Resizing Window
 * Case 5: Updating existing url
 *
 */
let targetTabId;
let targetWindowId;
let targetUrl;
let targetEnabled = false;
let intervalHandle;
// handle case when windowId or tabId changes
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  switch (request.method) {
    case "assessment_started":
      break;
    case "assessment_ended":
      break;
    case "assessment_status":
      sendResponse({message: true});
      return;
    default:
      // Don't respond to unknown messages
      return;
  }
  sendResponse({message: "success"});
});