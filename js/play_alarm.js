var alarmSound = null;

function playAlarm() {
    createAlarmIfNeeded();
    alarmSound.play()    
    console.log("alarm played");
}

function stopAlarm() {
    createAlarmIfNeeded();
    alarmSound.stop();
    console.log("alarm stoped");
}

function createAlarmIfNeeded() {
    alarmSound = alarmSound || new Howl({
        src: ['alarmwatch.mp3'],
        volume: 0.5,
        loop: true
    });
}
