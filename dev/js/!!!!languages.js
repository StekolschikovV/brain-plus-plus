// let storageL = require('electron-json-storage-sync')
// console.log(storageL.get('settings').lang)
let lang = {

    start() {

    }, elements() {

    }, events() {

    },

    _getLang(){
        return db.settingsTemp[0].lang
    },

    get(lang, name) {
        if (lang == 'ru') {
            if (name == 'tasks') return 'Задачи'
            else if (name == 'timer') return 'Таймер'
            else if (name == 'plan') return 'Расписание'
            else if (name == 'settings') return 'Настройки'
            else if (name == 'add') return 'Добавить'
            else if (name == 'add_input_placeholder') return 'введите имя задачи'
            else if (name == 'task_name') return 'имя задачи'
            else if (name == 'add_note') return 'добавьте описание'
            else if (name == 'add_tag') return 'добавьте теги'
            else if (name == 'm') return 'мин'
            else if (name == 'start') return 'Старт'
            else if (name == 'stop') return 'Стоп'
            else if (name == 'inf_timer_start_now') return 'Таймер уже запущен'
            else if (name == 'timer_stop') return 'Таймер остановлен'
            else if (name == 'timer_start') return 'Таймер запущен'
            else if (name == 'general') return 'Основные'
            else if (name == 'сhoose_your_language') return 'Выберите ваш язык'
            else if (name == 'sound_of_seconds') return 'Звук секунд'
            else if (name == 'sound_of_the_end_works') return 'Звук окончания работы'
            else if (name == 'sound_of_the_end_rest') return 'Звук окончания отдыха'
            else if (name == 'work_time') return 'Время работы'
            else if (name == 'work_rest') return 'Время отдыха'
            else if (name == 'start_of_the_day') return 'Начало дня'
            else if (name == 'end_of_the_day') return 'Окончание дня'
            else if (name == 'need_enter_title') return 'Нужно ввести название задачи'
            else if (name == 'first_start_h2') return 'Найди свой рабочий баланс.'
            else if (name == 'first_start_h3') return 'С таким большим количеством отвлекающих факторов в жизни легко потерять свои истинные цели и задачи.\n\nBrain ++ помогает понять ваши цели и задачи, чтобы вы могли сосредоточиться и быть более продуктивным.'
            else if (name == 'first_start_get_start') return 'Начать'
        } else  {
            if (name == 'tasks') return 'Tasks'
            else if (name == 'timer') return 'Timer'
            else if (name == 'plan') return 'Plan'
            else if (name == 'settings') return 'Settings'
            else if (name == 'add') return 'Add'
            else if (name == 'add_input_placeholder') return 'enter the name of the new task'
            else if (name == 'task_name') return 'task name'
            else if (name == 'add_note') return 'add note'
            else if (name == 'add_tag') return 'add tag'
            else if (name == 'm') return 'm'
            else if (name == 'start') return 'Start'
            else if (name == 'stop') return 'Stop'
            else if (name == 'inf_timer_start_now') return 'Timer already started'
            else if (name == 'timer_stop') return 'timer stop'
            else if (name == 'timer_start') return 'timer start'
            else if (name == 'general') return 'General'
            else if (name == 'сhoose_your_language') return 'Choose your language'
            else if (name == 'sound_of_seconds') return 'Sound of seconds'
            else if (name == 'sound_of_the_end_works') return 'Sound of the end works'
            else if (name == 'sound_of_the_end_rest') return 'Sound of the end rest'
            else if (name == 'work_time') return 'Work time'
            else if (name == 'work_rest') return 'Rest time'
            else if (name == 'start_of_the_day') return 'Start of the day'
            else if (name == 'end_of_the_day') return 'End of the day'
            else if (name == 'need_enter_title') return 'Need enter title'
            else if (name == 'first_start_h2') return 'Find your ideal work‑life balance.'
            else if (name == 'first_start_h3') return 'With so many distractions and possibilities in your digital life, it\'s easy to get scattered.\n\nBrain++ helps you understand your daily habits so you can focus and be more productive.'
            else if (name == 'first_start_get_start') return 'Get Started'
        }
    },

    // _prestart(){
    //   // if(storageL.get('settings').lang != undefined)
    // },

    reload(){
        nav.showMenu()
        document.querySelector('#menu li:nth-child(4)').click()
        settings.reload()
        taskList.reload()
        timer.reload()

    }

}

lang.start()

// console.log(lang.get('ru', 'tasks'))
// db.settingsTemp[0].lang