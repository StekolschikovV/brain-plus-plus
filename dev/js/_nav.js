let nav = {

    el_menu: null,
    els_li: null,

    start(){
        nav.elements()
        nav.events()
        nav.showMenu()
    },
    elements(){
        nav.el_menu = document.querySelector('#menu')
        nav.els_li = document.querySelectorAll('#menu li')
    },
    events(){
        nav.els_li.forEach(function (e) {
            e.addEventListener('click', function () {
                document.querySelector('#menu li.select').classList.remove('select')
                e.classList.add('select')
                let id = e.getAttribute('data-id')
                document.querySelectorAll('#pages > .select').forEach(function (e) {
                    e.classList.remove('select')
                });
                document.querySelector('#pages #' + id).classList.add('select')
            })
        })
    },

    showMenu(){
        nav.el_menu.innerHTML = ''
        // tasks
        let li = document.createElement("li")
        li.setAttribute('data-id', 'task')
        li.classList.add('select')
        li.innerText = lang.get(lang._getLang(), 'tasks')
        nav.el_menu.appendChild(li)
        // timer
        li = document.createElement("li")
        li.setAttribute('data-id', 'timer')
        li.innerText = lang.get(lang._getLang(), 'timer')
        nav.el_menu.appendChild(li)
        // plan
        li = document.createElement("li")
        li.setAttribute('data-id', 'plan')
        li.innerText = lang.get(lang._getLang(), 'plan')
        nav.el_menu.appendChild(li)
        // settings
        li = document.createElement("li")
        li.setAttribute('data-id', 'settings')
        li.innerText = lang.get(lang._getLang(), 'settings')
        nav.el_menu.appendChild(li)
        //
        nav.elements()
        nav.events()
    }
}
nav.start()


