chrome.runtime.onInstalled.addListener(function() {
    console.log("The color is green.");
});

chrome.tabs.onCreated.addListener(function(tab){
  var id = tab.id;

  console.log("Opend tab: "+id);
  console.log(tab);
});


chrome.tabs.onUpdated.addListener(function (id, change, tab){
  
  console.log("Changed tab");
  console.log(id);
  console.log(change);
  console.log(tab);
});

chrome.tabs.onRemoved.addListener(function (id, info){

  
  console.log(id);
  console.log(info);
  console.log("closed");
});
