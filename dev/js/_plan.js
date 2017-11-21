let plan = {

    dateToday: 0,
    selectedDate: 0,

    elDate: null,
    elArrLeft: null,
    elArrRight: null,
    elsDayInputs: null,

    start() {
        plan.elements()
        plan.getDateToday()
        plan.showDate()
        plan.showData()
        plan.timeInDay()
        plan.events()
    },
    elements() {
        plan.elDate = document.querySelector('#plan .date')
        plan.elArrLeft = document.querySelector('#plan .arr-left')
        plan.elArrRight = document.querySelector('#plan .arr-right')
        plan.elsDayInputs = document.querySelectorAll('#plan .day input')
    },
    events() {
        plan.elArrLeft.addEventListener('click', function () {
            plan.selectedDate = new Date(new Date(plan.selectedDate).getTime() - 60 * 60 * 24 * 1000)
            plan.showDate()
            plan.showData()
        })
        plan.elArrRight.addEventListener('click', function () {
            plan.selectedDate = new Date(new Date(plan.selectedDate).getTime() + 60 * 60 * 24 * 1000)
            plan.showDate()
            plan.showData()
        })
        Array.from(plan.elsDayInputs).forEach(link => {
            link.addEventListener('keyup', function (e) {

                let id = e.target.dataset.id
                let val = e.target.value
                console.log(val)
                db.dataToTemp(id, val)
            });
        });
    },

    getDateToday() {
        plan.dateToday = new Date()
        plan.dateToday.setHours(0, 0, 0, 0)
        plan.selectedDate = plan.dateToday
    },
    showDate() {
        plan.elDate.innerText = `${plan.selectedDate.getDate()}/${plan.selectedDate.getMonth() + 1}/${plan.selectedDate.getFullYear()}`
    },
    showData() {
        let obj = db._searchPlanObj()
        try {
            for (let i = 0; i < plan.elsDayInputs.length; i++) {
                if (obj[i] != undefined) {
                    plan.elsDayInputs[i].value = obj[i]
                } else {
                    plan.elsDayInputs[i].value = ''
                }
            }
        } catch (e) {
            for (let i = 0; i < plan.elsDayInputs.length; i++) {
                plan.elsDayInputs[i].value = ''
            }
        }
    },
    timeInDay() {
        for (let i = 0; i < 24; i++) {
            if(db.settingsTemp[3].settings_plan_start_day > i){
                plan.elsDayInputs[i].style.display = 'none'
            } else if(db.settingsTemp[3].settings_plan_end_day < i){
                plan.elsDayInputs[i].style.display = 'none'
            } else {
                plan.elsDayInputs[i].style.display = 'block'
            }
        }
    }

}

plan.start()


