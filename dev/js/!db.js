let storage = require('electron-json-storage-sync')

let db = {

    // Tasks --- --- ---
    tasksTemp: [],
    tagTempUnique: [],
    tagSelectTemp: '',
    // --- --- --- Tasks
    // Settings --- --- ---
    settingsTemp: [],
    valSettingsTimerBlockSoundSeconds: '',
    valSettingsTimerBlockSoundEndWork: '',
    valSettingsTimerBlockSoundEndRest: '',
    // --- --- --- Settings
    // Plan --- --- ---
    plansTemp: [],
    // --- --- --- Plan

    start() {
        db.getAllTasks()
        db.getAllSettings()
        db.getAllPlans()
        //
        db.defaultData()
        //
        db.getAllTegs()
    },

    defaultData() {
        if (db.tasksTemp == undefined)
            db.tasksTemp = []

        if (db.plansTemp == undefined)
            db.plansTemp = []

        if (db.settingsTemp == undefined) {
            db.settingsTemp = []
            //general
            db.settingsTemp[0] = {
                name: 'general',
                lang: 'en'
            }
            db.settingsTemp[1] = '' // tasks
            // timer
            db.settingsTemp[2] = {
                name: 'timer',
                settingsTimerBlockSoundSeconds: true,
                settingsTimerBlockSoundEndWork: true,
                settingsTimerBlockSoundEndRest: true,
                settingsTimerBlockWorkTime: 25,
                settingsTimerBlockRestTime: 5
            }
            // plan
            db.settingsTemp[3] = {
                name: 'plan',
                settings_plan_start_day: 8,
                settings_plan_end_day: 18
            }
            db.setAllSettings()
            modal.showFirstStart()
        }
    },

    // Tasks --- --- ---
    addTask(title) {
        db.tasksTemp.unshift({title: title})
        db.setAllTasks()
        db.getAllTasks()
    },
    getAllTasks() {
        db.tasksTemp = storage.get('tasks').data
    },
    setAllTasks() {
        storage.set('tasks', db.tasksTemp, function (error) {
        })
        db.getAllTasks()
    },
    removeTask(id) {
        db.tasksTemp.splice(id, 1)
        db.setAllTasks()
    },
    completeTask(id) {

        if (db.tasksTemp[id].complete == undefined || db.tasksTemp[id].complete == false){
            db.tasksTemp[id].complete = true
        } else{
            db.tasksTemp[id].complete = false
        }
        db.setAllTasks()
    },
    changeTitleTask(id, title) {
        db.tasksTemp[id].title = title
        db.setAllTasks()
    },
    changeNoteTask(id, note) {
        db.tasksTemp[id].note = note
        db.setAllTasks()
    },
    changeTagTask(id, tag) {
        let tagArr = tag.split(',').filter(Boolean)
        db.tasksTemp[id].tag = tagArr.map(Function.prototype.call, String.prototype.trim)
        db.setAllTasks()
    },
    swapAfterDnD(idOne, idTwo) {
        let one = db.tasksTemp[idOne]
        let two = db.tasksTemp[idTwo]
        db.tasksTemp[idOne] = two
        db.tasksTemp[idTwo] = one
        db.setAllTasks()
        taskList.set()
    },
    getAllTegs() {
        db.tagTempUnique = []
        for (let i = 0; i < db.tasksTemp.length; i++) {
            let tags = db.tasksTemp[i].tag
            if (tags) {
                for (let j = 0; j < db.tasksTemp[i].tag.length; j++) {
                    let t = db.tasksTemp[i].tag[j]
                    if (db.tagTempUnique.indexOf(t) == -1) {
                        db.tagTempUnique.push(t)
                    }
                }
            }
        }
    },
    // --- --- --- Tasks

    // Settings --- --- ---
    getAllSettings() {
        db.settingsTemp = storage.get('settings').data
    },
    setAllSettings() {
        storage.set('settings', db.settingsTemp, function (error) {
            console.log(error)
        })
    },
    // --- --- --- Settings

    // Plan --- --- ---
    getAllPlans() {
        db.plansTemp = storage.get('plans').data
    },
    setAllPlans() {
        storage.set('plans', db.plansTemp, function (error) {
            console.log(error)
        })
    },
    dataToTemp(id, val) {
        // console.log(id, val, db.plansTemp.langth)
        if (db.plansTemp.length == 0) {
            let newObj = db._createPlanObj(id, val)
            db.plansTemp.push(newObj)
            db.setAllPlans()
        } else {
            let obj = db._searchPlanObj()
            if(obj == null){
                let newObj = db._createPlanObj(id, val)
                db.plansTemp.push(newObj)
                db.setAllPlans()
            } else {
                let obj = db._searchPlanObj()
                // console.log('---', obj)
                obj[id] = val
                // console.log(obj)
                // // let newObj = db._createPlanObj(id, val)
                // // db.plansTemp.push(newObj)
                db.setAllPlans()
            }
        }
    },
    _createPlanObj(id, val) {
        let obj = {
            date: (plan.selectedDate).toString()
        }
        obj[id] = val
        return obj
    },
    _searchPlanObj() {
        let obj = null
        for (let i = 0; i < db.plansTemp.length; i++) {
            if ((db.plansTemp[i].date).toString() == (plan.selectedDate).toString()) {
                obj = db.plansTemp[i]
            }
        }
        return obj
    }
    // --- --- --- Plan

}

db.start()















