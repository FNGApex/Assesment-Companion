/*
 * Allow to take Contect Assesment in the Firefox browser
 */
let windowStatus = false
browser.runtime.onMessageExternal.addListener(function (request, sender, sendResponse){
  console.log("I heard Something");
});
// browser.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
//   switch (request.method) {
//     case "extension_started":
//       alert("Extension Started");
//       windowStatus = true;
//       sendResponse({
//         message:"success"
//       })
//       break;
//     case "extension_ended":
//       alert("Extension Ended")
//       windowStatus = false;
//       sendResponse({
//         message: "success"
//       });
//       break;
//     case "extension_status":
//       alert("Status"+windowStatus);
//       sendResponse({
//         message: true
//       });
//       return;
//     default:
//       return;
//   }
// });