let modal = {

    el_container: null,

    start() {
        modal.create_container()
    },

    create_container() {
        modal.el_container = document.createElement("div")
        modal.el_container.id = 'modal-container'
    },

    showFirstStart() {
        modal.el_container.innerHTML = ''
        let h2 = document.createElement("h2")
        h2.innerText = lang.get(navigator.language, 'first_start_h2')
        modal.el_container.appendChild(h2)
        let h3 = document.createElement("h3")
        h3.innerText = lang.get(navigator.language, 'first_start_h3')

        modal.el_container.appendChild(h3)
        let button = document.createElement("button")
        button.innerText = lang.get(navigator.language, 'first_start_get_start')
        button.onclick = function () {
            modal.hide()
        }
        modal.el_container.appendChild(button)
        document.body.appendChild(modal.el_container)
        modal.el_container.style.opacity = '0'
        animation.in(modal.el_container, 0)
    },
    hide() {
        animation.out(modal.el_container, 0)
        // modal.el_container.innerHTML = ''
    }

}
modal.start()

let inf = {

    el_container: null,

    start() {
        inf.create_container()
    },

    create_container() {
        inf.el_container = document.createElement("div")
        inf.el_container.id = 'inf-container'
        document.body.appendChild(inf.el_container)
    },

    show(text) {
        let el = document.createElement("div")
        el.classList.add('inf-el')
        animation.in(el, 0)
        el.innerText = text
        inf.el_container.appendChild(el)
        animation.out(el, 2000, el, 4000)
        inf._show_sound()
    },
    _show_sound() {
        new Audio('sounds/hifi.mp3').play()
    }

}
inf.start()