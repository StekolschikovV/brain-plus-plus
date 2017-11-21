let timer = {

    workTimeTempTime: 0,
    workTimeTempStatus: 'stop',
    //
    restTimeTempTime: 0,
    //
    elWorkRightContainer: '',
    elWorkRunContainer: '',
    btnTimerStart: '',

    start() {
        timer.create()
        timer.elements()
        timer.events()
        timer.setRestAndWorkDefTime()
    },
    create(){
        let container = document.querySelector('#timer-controls')
        container.innerHTML = ''
        //
        let button = document.createElement("button")
        button.id = 'timer-control-start'
        button.innerText = lang.get(lang._getLang(), 'start')
        container.appendChild(button)
        //
        button = document.createElement("button")
        button.id = 'timer-control-stop'
        button.innerText = lang.get(lang._getLang(), 'stop')
        container.appendChild(button)

    },
    elements() {
        timer.elWorkRunContainer = document.querySelector('#work .run-container')
        timer.elWorkRightContainer = document.querySelector('#work .right-container')
        //
        timer.elRestRunContainer = document.querySelector('#rest .run-container')
        timer.elRestRightContainer = document.querySelector('#rest .right-container')
        //
        timer.elRestTime = document.querySelector('#rest .time')
        timer.elWorkTime = document.querySelector('#work .time')
        //
        timer.btnTimerStart = document.querySelector('#timer-controls button#timer-control-start')
        timer.btnTimerStop = document.querySelector('#timer-controls button#timer-control-stop')
    },
    events() {
        timer.btnTimerStart.addEventListener('click', function () {
            if(timer.workTimeTempStatus == 'stop' || timer.workTimeTempStatus == 'emergency stop'){
                timer.workTimeTempStatus = 'start'
                timer.workTimeTemp = (db.settingsTemp[2].settingsTimerBlockWorkTime * 60)
                timer.runWork()
                inf.show(lang.get(lang._getLang(), 'timer_start'))
            } else {
                inf.show(lang.get(lang._getLang(), 'inf_timer_start_now'))
            }

        })
        timer.btnTimerStop.addEventListener('click', function () {
            timer.workTimeTempStatus = 'stop'
            timer.workTimeTempStatus = 'emergency stop'
            inf.show(lang.get(lang._getLang(), 'timer_stop'))
        })
    },

    reload(){
        timer.create()
        timer.elements()
        timer.events()
        timer.setRestAndWorkDefTime()
    },

    setRestAndWorkDefTime() {
        timer.elWorkTime.innerText = db.settingsTemp[2].settingsTimerBlockWorkTime  + ' ' + lang.get(lang._getLang(), 'm')
        timer.elRestTime.innerText = db.settingsTemp[2].settingsTimerBlockRestTime  + ' ' + lang.get(lang._getLang(), 'm')
    },
    runWork() {
        if (timer.workTimeTemp > -1 && timer.workTimeTempStatus == 'start') {
            setTimeout(function () {
                timer.runWork(timer.workTimeTemp = timer.workTimeTemp - 1)
                if(db.settingsTemp[2].settingsTimerBlockSoundSeconds)
                    new Audio('sounds/tik.mp3').play()
                let oneG = 360 / (db.settingsTemp[2].settingsTimerBlockWorkTime * 60)
                let nowG = oneG * ((db.settingsTemp[2].settingsTimerBlockWorkTime * 60) - timer.workTimeTemp)
                if (timer.workTimeTemp > -1 && timer.workTimeTempStatus == 'start') {
                    timer.elWorkRunContainer.style.transform = 'rotate(' + nowG + 'deg)'
                    if (nowG < 180) {
                        timer.elWorkRunContainer.style.zIndex = 1
                        timer.elWorkRightContainer.style.display = 'none'
                        timer.elWorkRunContainer.style.display = 'block'
                    } else {
                        timer.elWorkRunContainer.style.zIndex = 3
                        timer.elWorkRightContainer.style.display = 'block'
                    }
                }
            }, 1000)
        } else if(timer.workTimeTempStatus == 'emergency stop'){
            timer._clearWork()
        } else {
            timer.workTimeTempStatus = 'startRest'
            timer.restTimeTemp = (db.settingsTemp[2].settingsTimerBlockRestTime * 60)
            timer.runRest()
            timer._clearWork()
            if(db.settingsTemp[2].settingsTimerBlockSoundEndWork)
                new Audio('sounds/soundFinish.mp3').play()
        }
    },
    _clearWork(){
        timer.workTimeTemp = 0
        timer.elWorkRunContainer.style.zIndex = 1
        timer.elWorkRunContainer.style.display = 'none'
        timer.elWorkRightContainer.style.display = 'none'
        timer.elWorkRunContainer.style.transform = 'rotate(' + 0 + 'deg)'
    },
    runRest() {
        if (timer.restTimeTemp > -1 && timer.workTimeTempStatus == 'startRest') {
            setTimeout(function () {
                timer.runRest(timer.restTimeTemp = timer.restTimeTemp - 1)
                if(db.settingsTemp[2].settingsTimerBlockSoundSeconds)
                    new Audio('sounds/tik.mp3').play()
                let oneG = 360 / (db.settingsTemp[2].settingsTimerBlockRestTime * 60)
                let nowG = oneG * ((db.settingsTemp[2].settingsTimerBlockRestTime * 60) - timer.restTimeTemp)
                if (timer.restTimeTemp > -1 && timer.workTimeTempStatus == 'startRest') {
                    timer.elRestRunContainer.style.transform = 'rotate(' + nowG + 'deg)'
                    if (nowG < 180) {
                        timer.elRestRunContainer.style.zIndex = 1
                        timer.elRestRightContainer.style.display = 'none'
                        timer.elRestRunContainer.style.display = 'block'
                    } else {
                        timer.elRestRunContainer.style.zIndex = 3
                        timer.elRestRightContainer.style.display = 'block'
                    }
                }
            }, 1000)
        } else if(timer.workTimeTempStatus == 'emergency stop'){
            timer._clearWork()
            timer._clearRest()
        } else {
            timer._clearRest()
            if(db.settingsTemp[2].settingsTimerBlockSoundEndRest)
                new Audio('sounds/soundFinish.mp3').play()
        }
    },
    _clearRest(){
        timer.restTimeTemp = 0
        timer.elRestRunContainer.style.zIndex = 1
        timer.elRestRunContainer.style.display = 'none'
        timer.elRestRightContainer.style.display = 'none'
        timer.elRestRunContainer.style.transform = 'rotate(' + 0 + 'deg)'
        timer.workTimeTempStatus = 'stop'
    }

}

timer.start()

