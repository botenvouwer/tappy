
tabList = [];

var TimeTabDao = {

    initialize: function(){

        //todo: persists in local storage and check if exists in local storage
        //todo: Find some way to persist the tabs
        this.syncWithActualTabs();
        this.syncWithActiveActualTabs();

    },

    syncWithActualTabs: function(){
        TabDao.getAll( actualTabList => {

            if(actualTabList.length !== tabList.length){
                actualTabList.forEach(t => {
                    if(!this.contains(t.id))
                        this.addTimeTab(t)
                });
            }
        });

        tabList.forEach(i => {
            TabDao.contains(i.id, () => {}, () => this.removeTimeTab(i.id));
        });
    },
    
    syncWithActiveActualTabs: function(){
        TabDao.query({active:true}, actualActiveTabs => {
            actualActiveTabs.forEach(actualActiveTab => {
                this.pulseTab(actualActiveTab.id, actualActiveTab.windowId);
            });
        });
    },

    contains: function(id){
        var arrayLength = tabList.length;
        for (var i = 0; i < arrayLength; i++) {
            if(tabList[i].tab.id === id)
                return true;
        }
        return false;
    },

    getActiveTimeTabs: function(){
        var arrayLength = tabList.length;
        var found = [];
        for (var i = 0; i < arrayLength; i++) {
            console.log(tabList[i].active);

            if(tabList[i].active){

                found.push(tabList[i]);
            }
        }
        return found;
    },

    getTimeTab: function(id){
        var arrayLength = tabList.length;
        for (var i = 0; i < arrayLength; i++) {
            if(tabList[i].tab.id === id)
                return tabList[i];
        }
        return null;
    },

    removeTimeTab: function(id){
        var arrayLength = tabList.length;
        for (var i = 0; i < arrayLength; i++) {  
             if(tabList[i].tab.id === id){
                 tabList.splice(i,1);
                 break;
             }
        }
    },

    addTimeTab: function(tab){
        tabList.push(new TimeTab(tab));
    },

    pulseTab: function (id, windowId) {

        //var activeTimeTabs = this.getActiveTimeTabs();

        tabList.forEach(t => {
            if(t.tab.windowId === windowId && t.active)
                t.pulseTab();
            if(t.tab.id === id)
                t.active = true;
        });

    }

}

TimeTabDao.initialize();
