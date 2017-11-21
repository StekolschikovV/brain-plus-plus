let taskList = {

    dragInputVal1: 0,
    dragInputVal2: 0,
    dragSrcEl: '',
    dragThis: '',
    //
    el_add_task_form: null,

    start() {
        taskList.elements()
        taskList.create_el()
        taskList.set()
        taskList.tagsTrigger()
    },
    elements(){
        taskList.el_add_task_form = document.querySelector('#add-task-form')
    },
    reload(){
        taskList.set()
        taskList.create_el()
    },
    create_el(){
        taskList.el_add_task_form.innerHTML = ''
        // add_input_placeholder
        let input = document.createElement("input")
        input.type = 'text'
        input.id = 'add-task-form-input'
        input.placeholder = lang.get(lang._getLang(), 'add_input_placeholder')
        taskList.el_add_task_form.appendChild(input)
        // add
        input = document.createElement("input")
        input.type = 'submit'
        input.value = lang.get(lang._getLang(), 'add')
        taskList.el_add_task_form.appendChild(input)
    },
    set() {
        let ul = document.querySelector('#task-list')
        ul.innerHTML = ''
        for (let i = 0; i < db.tasksTemp.length; i++) {
            if (db.tagSelectTemp == '') {
                taskList.setEl(i, ul)
            } else {

                let tagsInTemp = db.tasksTemp[i].tag
                let liSelectTagText = document.querySelector('#tags > ul > li.select').innerText
                let has = false
                if (tagsInTemp != undefined && tagsInTemp.indexOf(liSelectTagText) != -1) {
                    has = true
                }
                if (has) {
                    taskList.setEl(i, ul)
                }
            }
        }
    },
    setEl(i, ul) {
        let li = document.createElement("li")

        // DnD
        if (db.tasksTemp[i].complete)
            li.className = 'complete'
        li.addEventListener('dragstart', taskList.DnDhandleDragStart, false)
        li.addEventListener('dragenter', taskList.DnDhandleDragEnter, false)
        li.addEventListener('dragover', taskList.DnDhandleDragOver, false)
        li.addEventListener('dragleave', taskList.DnDhandleDragLeave, false)
        li.addEventListener('drop', taskList.DnDhandleDrop, true)
        // li.setAttribute('draggable', true)


        // controls
        // DnD el
        let dnd_block = document.createElement("div")
        dnd_block.innerText = '...'
        dnd_block.classList.add('dnd-block')
        dnd_block.onmousedown = function (e) {
            e.target.parentNode.setAttribute('draggable', true)
        }
        dnd_block.onmouseout = function (e) {
            e.target.parentNode.setAttribute('draggable', false)
        }
        li.appendChild(dnd_block)
        /// input
        let input = document.createElement("input")
        input.value = db.tasksTemp[i].title
        input.setAttribute('data-id', i)
        input.setAttribute('draggable', false)
        input.placeholder = lang.get(lang._getLang(), 'task_name')
        input.onkeyup = function (e) {
            db.changeTitleTask(e.target.getAttribute('data-id'), e.target.value)
        }
        /// buttonRemove
        let buttonRemove = document.createElement("button")
        // buttonRemove.innerText = 'Remove'
        buttonRemove.className = 'btn-remove'
        buttonRemove.setAttribute('data-id', i)
        buttonRemove.onclick = function (e) {
            animation.out(e.target.parentNode, 0, null, null)
            setTimeout(function () {
                db.removeTask(e.target.getAttribute('data-id'))
                taskList.set()
                taskList.tagsTrigger()
            }, 1000)
        }
        /// buttonComplete
        let buttonComplete = document.createElement("button")
        buttonComplete.setAttribute('data-id', i)
        buttonComplete.className = 'btn-complete'
        buttonComplete.onclick = function (e) {
            db.completeTask(e.target.getAttribute('data-id'))
            taskList.set()
        }
        /// buttonAdditional
        let buttonAdditional = document.createElement("button")
        buttonAdditional.setAttribute('data-id', i)
        // buttonAdditional.innerText = 'Additional'
        buttonAdditional.className = 'btn-additional'
        buttonAdditional.onclick = function (e) {
            e.target.parentNode.classList.toggle('additional-show')
        }

        // additionalBlock
        let additionalBlock = document.createElement("div")
        additionalBlock.className = 'additional'

        /// additionalBlockRight
        let additionalBlockRight = document.createElement("div")
        additionalBlockRight.className = 'additional-right'
        ////
        let additionalBlockRightTextareaTag = document.createElement("textarea")
        additionalBlockRightTextareaTag.className = 'additional-right-tag'
        additionalBlockRightTextareaTag.placeholder = lang.get(lang._getLang(), 'add_tag')
        additionalBlockRightTextareaTag.setAttribute('data-id', i)
        if (db.tasksTemp[i].tag != undefined)
            additionalBlockRightTextareaTag.value = db.tasksTemp[i].tag
        additionalBlockRightTextareaTag.onkeyup = function (e) {
            db.changeTagTask(e.target.getAttribute('data-id'), e.target.value)
            taskList.tagsTrigger()
        }
        additionalBlockRight.appendChild(additionalBlockRightTextareaTag)
        //// Note
        let additionalBlockRightTextareaNote = document.createElement("textarea")
        additionalBlockRightTextareaNote.className = 'additional-right-note'
        additionalBlockRightTextareaNote.setAttribute('data-id', i)
        if (db.tasksTemp[i].note != undefined)
            additionalBlockRightTextareaNote.value = db.tasksTemp[i].note
        additionalBlockRightTextareaNote.placeholder = lang.get(lang._getLang(), 'add_note')
        additionalBlockRightTextareaNote.onkeyup = function (e) {
            db.changeNoteTask(e.target.getAttribute('data-id'), e.target.value)
        }
        additionalBlockRight.appendChild(additionalBlockRightTextareaNote)
        ////
        additionalBlock.appendChild(additionalBlockRight)

        // append
        li.appendChild(input)
        li.appendChild(buttonAdditional)
        li.appendChild(buttonRemove)
        li.appendChild(buttonComplete)
        li.appendChild(additionalBlock)

        ul.appendChild(li)

    },
    DnDhandleDragStart(e) {
        // this.style.opacity = '0.8';
        console.log(e)
        taskList.dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    },
    DnDhandleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
        return false;
    },
    DnDhandleDragEnter(e) {
        this.classList.add('over');
    },
    DnDhandleDragLeave(e) {
        this.classList.remove('over');  // this / e.target is previous target element.
    },
    DnDhandleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }
        if (taskList.dragSrcEl != this) {
            taskList.dragThis = this
            taskList.dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            db.swapAfterDnD(taskList.dragThis.querySelector('input').getAttribute('data-id'), taskList.dragSrcEl.querySelector('input').getAttribute('data-id'))
        }

        return false;
    },
    showTags() {
        let ul = document.querySelector('#tags ul')
        ul.innerHTML = ''
        for (let i = 0; i < db.tagTempUnique.length; i++) {


            let li = document.createElement("li")
            li.innerText = db.tagTempUnique[i]
            li.setAttribute('data-id', i)
            li.onclick = function (e) {

                document.querySelectorAll('body #tags ul li').forEach(function (e) {
                    e.classList.remove('select')
                });

                let allSelectTags = document.querySelectorAll('#task > ul .select')
                if (allSelectTags.length != 0) {
                    for (let i = 0; i < allSelectTags.length; i++) {
                        allSelectTags[i].classList.remove('select')
                    }
                }
                let id = e.target.getAttribute('data-id')
                if (db.tagSelectTemp != id) {
                    db.tagSelectTemp = id
                    li.classList.add('select')
                }

                else {
                    db.tagSelectTemp = ''
                }
                taskList.set()
            }
            ul.appendChild(li)
        }
    },
    tagsTrigger() {
        db.getAllTegs()
        taskList.showTags()
    }
}
taskList.start()



