let settings = {

    elSettingsTimerBlockSoundSeconds: '',
    elSettingsTimerBlockSoundEndWork: '',
    elSettingsTimerBlockSoundEndRest: '',
    elSettingsTimerBlockWorkTime: '',
    elSettingsTimerBlockRestTime: '',
    //
    el_settings_plan_start_day: null,
    el_settings_plan_end_day: null,
    //
    el_settings_general_block_select: null,

    start() {
        settings.create()
        settings.elements()
        settings.events()
        settings.loadSettings()
    },
    create(){
        let container = document.querySelector('#settings')

        container.innerHTML = ''

        // settings-general-block-select
        let el = document.createElement('div')
        el.id = 'settings-general-block'
        let h2 = document.createElement('h2')
        h2.innerText = lang.get(lang._getLang(), 'general')
        el.appendChild(h2)
        //
        let h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'сhoose_your_language')
        el.appendChild(h3)
        //
        let select = document.createElement('select')
        select.id ='settings-general-block-select'
        let option = document.createElement('option')
        option.value = 'ru'
        option.innerText = 'Русский'
        select.appendChild(option)
        option = document.createElement('option')
        option.value = 'en'
        option.innerText = 'English'
        select.appendChild(option)
        h3.appendChild(select)
        //
        container.appendChild(el)
        // settings-timer-block
        el = document.createElement('div')
        el.id = 'settings-timer-block'
        //
        h2 = document.createElement('h2')
        h2.innerText = lang.get(lang._getLang(), 'timer')
        el.appendChild(h2)
        //
        h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'sound_of_seconds')
        el.appendChild(h3)
        let input = document.createElement('input')
        input.type = 'checkbox'
        input.id = 'settings-timer-block-sound-seconds'
        h3.appendChild(input)
        let label = document.createElement('label')
        label.setAttribute('for', 'settings-timer-block-sound-seconds')
        h3.appendChild(label)
        //
        h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'sound_of_the_end_works')
        el.appendChild(h3)
        input = document.createElement('input')
        input.type = 'checkbox'
        input.id = 'settings-timer-block-sound-end-work'
        h3.appendChild(input)
        label = document.createElement('label')
        label.setAttribute('for', 'settings-timer-block-sound-end-work')
        h3.appendChild(label)
        //
        h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'sound_of_the_end_rest')
        el.appendChild(h3)
        input = document.createElement('input')
        input.type = 'checkbox'
        input.id = 'settings-timer-block-sound-end-rest'
        h3.appendChild(input)
        label = document.createElement('label')
        label.setAttribute('for', 'settings-timer-block-sound-end-rest')
        h3.appendChild(label)
        //
        h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'work_time')
        el.appendChild(h3)
        input = document.createElement('input')
        input.type = 'number'
        input.setAttribute('min','0')
        input.setAttribute('max','360')
        input.id = 'settings-timer-block-work-time'
        h3.appendChild(input)
        //
        h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'work_rest')
        el.appendChild(h3)
        input = document.createElement('input')
        input.type = 'number'
        input.setAttribute('min','0')
        input.setAttribute('max','60')
        input.id = 'settings-timer-block-rest-time'
        h3.appendChild(input)
        container.appendChild(el)
        // settings-plan-block
        el = document.createElement('div')
        el.id = 'settings-plan-block'
        //
        h2 = document.createElement('h2')
        h2.innerText = lang.get(lang._getLang(), 'plan')
        el.appendChild(h2)
        //
        h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'start_of_the_day')
        el.appendChild(h3)
        input = document.createElement('input')
        input.type = 'number'
        input.setAttribute('min','0')
        input.setAttribute('max','22')
        input.id = 'settings-plan-block-start-day'
        h3.appendChild(input)
        //
        h3 = document.createElement('h3')
        h3.innerText = lang.get(lang._getLang(), 'start_of_the_day')
        el.appendChild(h3)
        input = document.createElement('input')
        input.type = 'number'
        input.setAttribute('min','0')
        input.setAttribute('max','22')
        input.id = 'settings-plan-block-end-day'
        h3.appendChild(input)

        container.appendChild(el)



        //

        // let h2 = document.createElement('h2')
        // h2.innerText = 'General'
        // el.appendChild(h2)
        // //
        // let h3 = document.createElement('h3')
        // h3.innerText = 'Choose your language'
        // el.appendChild(h3)
        // //
        // let select = document.createElement('select')
        // select.id ='settings-general-block-select'
        // let option = document.createElement('option')
        // option.value = 'ru'
        // option.innerText = 'Русский'
        // select.appendChild(option)
        // option = document.createElement('option')
        // option.value = 'en'
        // option.innerText = 'English'
        // select.appendChild(option)
        // h3.appendChild(select)
        // //
        // container.appendChild(el)

    // #settings-timer-block
    //     h2 Timer
    //     h3 Sound of seconds
    //     input(type='checkbox')#settings-timer-block-sound-seconds
    //     label(for='settings-timer-block-sound-seconds')
    //         h3 Sound of the end work
    //     input(type='checkbox')#settings-timer-block-sound-end-work
    //     label(for='settings-timer-block-sound-end-work')
    //         h3 Sound of the end rest
    //     input(type='checkbox')#settings-timer-block-sound-end-rest
    //     label(for='settings-timer-block-sound-end-rest')
    //         h3 Work time
    //     input(type='number',min="0",max="360")#settings-timer-block-work-time
    //     h3 Rest time
    //     input(type='number',min="0",max="60")#settings-timer-block-rest-time

        // let block = document.createElement('div')
        // li.setAttribute('data-id', 'task')
        // li.classList.add('select')
        // li.innerText = lang.get(lang._getLang(), 'tasks')
        // nav.el_menu.appendChild(li)
    },
    reload(){
        settings.create()
        settings.elements()
        settings.events()
        settings.loadSettings()
    },
    elements() {
        settings.elSettingsTimerBlockSoundSeconds = document.querySelector('#settings-timer-block-sound-seconds')
        settings.elSettingsTimerBlockSoundEndWork = document.querySelector('#settings-timer-block-sound-end-work')
        settings.elSettingsTimerBlockSoundEndRest = document.querySelector('#settings-timer-block-sound-end-rest')
        settings.elSettingsTimerBlockWorkTime = document.querySelector('#settings-timer-block-work-time')
        settings.elSettingsTimerBlockRestTime = document.querySelector('#settings-timer-block-rest-time')
        //
        settings.el_settings_plan_start_day = document.querySelector('#settings-plan-block-start-day')
        settings.el_settings_plan_end_day = document.querySelector('#settings-plan-block-end-day')
        //
        settings.el_settings_general_block_select = document.querySelector('#settings-general-block-select')
    },
    events() {
        settings.elSettingsTimerBlockSoundSeconds.onchange = function (e) {
            db.settingsTemp[2].settingsTimerBlockSoundSeconds = e.target.checked
            db.setAllSettings()
        }
        settings.elSettingsTimerBlockSoundEndWork.onchange = function (e) {
            db.settingsTemp[2].settingsTimerBlockSoundEndWork = e.target.checked
            db.setAllSettings()
        }
        settings.elSettingsTimerBlockSoundEndRest.onchange = function (e) {
            db.settingsTemp[2].settingsTimerBlockSoundEndRest = e.target.checked
            db.setAllSettings()
        }
        settings.elSettingsTimerBlockWorkTime.onchange = function (e) {
            settings._min_val(e, 25)
            settings._max_val(e, 120)
            db.settingsTemp[2].settingsTimerBlockWorkTime = e.target.value
            db.setAllSettings()
            timer.setRestAndWorkDefTime()
            timer.workTimeTempStatus = 'emergency stop'
        }
        settings.elSettingsTimerBlockRestTime.onchange = function (e) {
            settings._min_val(e, 1)
            settings._max_val(e, 60)
            db.settingsTemp[2].settingsTimerBlockRestTime = e.target.value
            db.setAllSettings()
            timer.setRestAndWorkDefTime()
            timer.workTimeTempStatus = 'emergency stop'
        }
        //
        settings.el_settings_plan_start_day.onchange = function (e) {
            settings._min_val(e, 1)
            settings._max_val(e, 22)
            db.settingsTemp[3].settings_plan_start_day = e.target.value
            db.setAllSettings()
            timer.setRestAndWorkDefTime()
            plan.timeInDay()
        }
        settings.el_settings_plan_end_day.onchange = function (e) {
            settings._min_val(e, 1)
            settings._max_val(e, 23)
            db.settingsTemp[3].settings_plan_end_day = e.target.value
            db.setAllSettings()
            timer.setRestAndWorkDefTime()
            plan.timeInDay()
        }
        settings.el_settings_general_block_select.onchange = function (e) {
			if(db.settingsTemp[0] == ''){
				db.defaultData()
			}
            db.settingsTemp[0].lang = e.target.value
            db.setAllSettings()
            lang.reload()
        }
    },

    _min_val(e, minVal) {
        if (e.target.value < minVal || e.target.value == '') {
            e.target.value = minVal
            inf.show(`Minimal value ${minVal}`)
        }
    },
    _max_val(e, maxVal) {
        if (e.target.value > maxVal || e.target.value == '') {
            e.target.value = maxVal
            inf.show(`Minimal value ${maxVal}`)
        }
    },

    loadSettings() {
        settings.elSettingsTimerBlockSoundSeconds.checked = db.settingsTemp[2].settingsTimerBlockSoundSeconds
        settings.elSettingsTimerBlockSoundEndWork.checked = db.settingsTemp[2].settingsTimerBlockSoundEndWork
        settings.elSettingsTimerBlockSoundEndRest.checked = db.settingsTemp[2].settingsTimerBlockSoundEndRest
        settings.elSettingsTimerBlockRestTime.value = db.settingsTemp[2].settingsTimerBlockRestTime
        settings.elSettingsTimerBlockWorkTime.value = db.settingsTemp[2].settingsTimerBlockWorkTime
        //
        settings.el_settings_plan_start_day.value = db.settingsTemp[3].settings_plan_start_day
        settings.el_settings_plan_end_day.value = db.settingsTemp[3].settings_plan_end_day
        //
        settings.el_settings_general_block_select.value =  db.settingsTemp[0].lang
        //
        timer.setRestAndWorkDefTime()
    }

}


settings.start()



