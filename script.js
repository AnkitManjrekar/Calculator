let str = ''

let screen = document.querySelector('.screen')

let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((x) => {
    x.addEventListener('click', (e) => {
        if (e.target.dataset.num == '=') {
            if (str.length === 0) {
                alert('Enter value')
            } else {
                let result = eval(str)
                screen.value = result.toFixed(2)
                str = result
            }
        } else if (e.target.dataset.num == 'c') {
            str = ''
            screen.value = str
        } else if(e.target.dataset.num == 'b') {
            let result = str.slice(0, -1)
            screen.value = result
            str = result
        } else {
            str += e.target.dataset.num
            screen.value = str
        }

    })
})
// console.log(buttons)
