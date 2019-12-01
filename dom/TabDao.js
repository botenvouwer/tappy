
var TabDao = {
    contains: function (id, callbackTrue, callbackFalse) {
        TabDao.getAll(l => {
            var arrayLength = l.length;
            for (var i = 0; i < arrayLength; i++) {
                if(l[i].id === id){
                    callbackTrue();
                    return;
                }
            }
            callbackFalse();
        });
    },
    getAll: function (callback) {
        chrome.tabs.query({}, function (actualTabList){
            callback(actualTabList);
        });
    },
    query: function (query, callback) {
        chrome.tabs.query(query, function (filteredActualTabList){
            callback(filteredActualTabList);
        });
    },
    get: function (id, callback) {
        chrome.tabs.get(id, callback);
    }
}

tabDoa = TabDao;
