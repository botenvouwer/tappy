
class TimeTab {

    constructor(tab) {
        this.tab =  tab;
        this.opened = this.getCurrentDateTime();
        this.lastActive = null; //todo: make list
        this.watchedTime = 0;
        this.calculatedReadTime = this.calculateReadTime();
        this.active = false;
    }

    getCurrentDateTime(){
        return new Date();
    }

    calculateReadTime(){
        //Todo: Get contents of tab and calculate the time needed for reading
    }

    pulseTab(){
        this.active = false;
        this.lastActive = this.getCurrentDateTime();
        this.watchedTime += this.lastActive - this.opened;
    }

}
