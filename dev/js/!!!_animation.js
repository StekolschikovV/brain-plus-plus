let animation = {
    start(){

    },

    in(el, time_out){
        el.style.opacity = '0'
        document.body.style.overflow = 'hidden'
        setTimeout(function () {
            el.classList.add('animated')
            el.classList.add('flipInX')
            el.style.opacity = '1'
        }, time_out)
        setTimeout(function () {
            el.classList.remove('animated')
            el.classList.remove('flipInX')
            document.body.style.overflow = 'auto'
        }, time_out + 1000)
    },
    out(el, time_out, rm_el, rm_time_out){
        document.body.style.overflow = 'hidden'
        setTimeout(function () {
            el.classList.remove('flipInX')
            el.classList.remove('animated')
            el.classList.add('animated')
            el.classList.add('flipOutX')

        }, time_out)
        if(rm_el != null){
            setTimeout(function () {
                rm_el.remove()
                document.body.style.overflow = 'auto'
            }, rm_time_out)
        }
    }
}

animation.start()