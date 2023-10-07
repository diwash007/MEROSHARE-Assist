import React from "react";
import { createRoot } from "react-dom/client";
import { LOGIN_URL } from "./app-config";

const Popup = () => {
  const updateDetails = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id && tab.url === LOGIN_URL) {
        chrome.tabs.sendMessage(tab.id, {
          data: ["ok"],
        });
      }
    });
  };

  return (
    <>
      <button onClick={updateDetails}>Update Details</button>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
