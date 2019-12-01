// Pre configure events
chrome.runtime.onInstalled.addListener(function() {
    console.log("Installing");
});


// Tab events
chrome.tabs.onCreated.addListener(function(tab){
  TimeTabDao.addTimeTab(tab);
  printTabMutation("Opened");
});


chrome.tabs.onUpdated.addListener(function (id, change, tab){
  //console.log("Changed tab " + id);
  //test(id);

  //test("test dit "+id);
});

chrome.tabs.onActivated.addListener(function (e){
  console.log("I'm active now :) ");
  console.log(e);
  
  TimeTabDao.pulseTab(e.tabId, e.windowId);

});

chrome.tabs.onRemoved.addListener(function (id, info){
  TimeTabDao.removeTimeTab(id);
  printTabMutation("Closed");
});

//Chrome events
chrome.idle.onStateChanged.addListener(function (s){
  if(s !== "active"){
    console.log("Idle Are you still there :(");
  }
  else{
    console.log("Idle You back :)");
  }
});

chrome.windows.onFocusChanged.addListener(function (windowId){
  if(chrome.windows.WINDOW_ID_NONE === windowId){
    console.log("focus off Are you still there :(");
  }
  else {
    console.log("focus on You back :)");
  }

});

function printTabMutation(mutation){
  TabDao.getAll(l => {

    timedList = tabList.length;
    actualList = l.length;

    console.log(mutation+" t-"+timedList+" a-"+actualList);

  });
}