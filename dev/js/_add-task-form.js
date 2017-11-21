document.querySelector('#add-task-form').onsubmit  = function () {
    event.preventDefault()
    let val = document.querySelector('#add-task-form-input').value
    if(val.length > 0) {
        db.addTask(val)
        taskList.set()
        let el = document.querySelector('#task-list li')
        animation.in(el, 0)
        document.querySelector('#add-task-form-input').value = ''
    } else {
       inf.show(lang.get(lang._getLang(), 'need_enter_title'))
    }
}


