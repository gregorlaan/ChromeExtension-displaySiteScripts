// Load Content Scripts when Popup is visible and pass data to receiveText function
chrome.tabs.executeScript({
  file: "scripts.js"
},receiveText);

// tabs.executeScript() returns the results of the executed script
//  in an array of results, one entry per frame in which the script
//  was injected.
function receiveText(resultsArray){
  data = resultsArray[0];
  for(var key in data){
    list = document.querySelector("#links");
    list.insertAdjacentHTML('beforeend', "<li><a target='_blank' title=" + data[key] + " href=" + data[key] + ">" + key + "</a></li>");
  }
}
