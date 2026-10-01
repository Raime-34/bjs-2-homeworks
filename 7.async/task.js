class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(
            (alarm) => alarm.time != time
        )
    }

    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    start() {
        if (this.intervalId != null) {
            return;
        }

        this.intervalId = setInterval(() => {this.checkAlarms()}, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    checkAlarms() {
        this.alarmCollection.forEach(alarm => {
            if (
                this.getCurrentFormattedTime() == alarm.time
                &&
                alarm.canCall
            ) {
                alarm.canCall = false;
                alarm.callback();
            }
        });
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}