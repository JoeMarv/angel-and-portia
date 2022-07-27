const bodys = document.querySelectorAll('.question')

bodys.forEach(function(body) {
    const btn = body.querySelector('.question-head')

    btn.addEventListener('click', function() {
        bodys.forEach(function(item) {
            if (item !== body) {
                item.classList.remove('open')
            }
        })

        body.classList.toggle('open')
    })
})
