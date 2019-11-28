
class TimeTab {

    constructor(tab) {
        this.tab =  tab;
        this.opened = this.getCurrentDateTime();
        this.lastActive = null;
        this.watchedTime = 0;
        this.calculatedReadTime = this.calculateReadTime();
    }

    getCurrentDateTime(){
        return new Date();
    }

    calculateReadTime(){
        //Todo: Get contents of tab and calculate the time needed for reading


    }

    pulseTab(){

        //if(this.lastActive == null)
        this.lastActive = this.getCurrentDateTime();
        this.watchedTime += this.opened - lastActive;

    }


}

globalThis.TimeTab = TimeTab;
