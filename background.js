chrome.runtime.onInstalled.addListener(function() {
    console.log("The color is green.");
});

chrome.tabs.onCreated.addListener(function(tab){
  var id = tab.id;

  //console.log("Opend tab: "+id);
  //console.log(tab);
});
