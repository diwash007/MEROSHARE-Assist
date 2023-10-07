chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.data) {
    // carry out manipulation
    console.log(msg.data);
  } else {
    sendResponse("No data found.");
  }
});
