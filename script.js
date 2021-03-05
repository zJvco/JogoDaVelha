const spaces = document.querySelectorAll('#space')
const icons_XY = ['<i class="fas fa-times"></i>', '<i class="far fa-circle"></i>']

var setTimeIcon = 0

spaces.forEach(e => {
    e.addEventListener('click', () => {   
        if (e.innerHTML.length > 0) {
            return
        }
        else {
            if (setTimeIcon == 0) {
                e.innerHTML = icons_XY[0]
    
                setTimeIcon = 1
            }
            else {
                e.innerHTML = icons_XY[1]
    
                setTimeIcon = 0
            }
            getGameWins()
        }
    })
})

function getGameWins() {
    const space_1 = document.querySelector('.space-1')
    const space_2 = document.querySelector('.space-2')
    const space_3 = document.querySelector('.space-3')
    const space_4 = document.querySelector('.space-4')
    const space_5 = document.querySelector('.space-5')
    const space_6 = document.querySelector('.space-6')
    const space_7 = document.querySelector('.space-7')
    const space_8 = document.querySelector('.space-8')
    const space_9 = document.querySelector('.space-9')

    // Linha 1
    if (space_1.innerHTML && space_2.innerHTML && space_3.innerHTML) {
        if (space_1.innerHTML.includes('fa-times') && space_2.innerHTML.includes('fa-times') && space_3.innerHTML.includes('fa-times')) {
            window.alert('O jogador X ganhou!')
            window.location.reload()
        }
        if (space_1.innerHTML.includes('fa-circle') && space_2.innerHTML.includes('fa-circle') && space_3.innerHTML.includes('fa-circle')) {
            window.alert('O jogador O ganhou!')
            window.location.reload()
        }
    }
    // Coluna 1
    if (space_1.innerHTML && space_4.innerHTML && space_7.innerHTML) {
        if (space_1.innerHTML.includes('fa-times') && space_4.innerHTML.includes('fa-times') && space_7.innerHTML.includes('fa-times')) {
            window.alert('O jogador X ganhou!')
            window.location.reload()
        }
        if (space_1.innerHTML.includes('fa-circle') && space_4.innerHTML.includes('fa-circle') && space_7.innerHTML.includes('fa-circle')) {
            window.alert('O jogador O ganhou!')
            window.location.reload()
        }
    }
    // Vertical
    if (space_1.innerHTML && space_5.innerHTML && space_9.innerHTML) {
        if (space_1.innerHTML.includes('fa-times') && space_5.innerHTML.includes('fa-times') && space_9.innerHTML.includes('fa-times')) {
            window.alert('O jogador X ganhou!')
            window.location.reload()
        }
        if (space_1.innerHTML.includes('fa-circle') && space_5.innerHTML.includes('fa-circle') && space_9.innerHTML.includes('fa-circle')) {
            window.alert('O jogador O ganhou!')
            window.location.reload()
        }
    }
    // Coluna 2
    if (space_2.innerHTML && space_5.innerHTML && space_8.innerHTML) {
        if (space_2.innerHTML.includes('fa-times') && space_5.innerHTML.includes('fa-times') && space_8.innerHTML.includes('fa-times')) {
            window.alert('O jogador X ganhou!')
            window.location.reload()
        }
        if (space_2.innerHTML.includes('fa-circle') && space_5.innerHTML.includes('fa-circle') && space_8.innerHTML.includes('fa-circle')) {
            window.alert('O jogador O ganhou!')
            window.location.reload()
        }
    }
    // Coluna 3
    if (space_3.innerHTML && space_6.innerHTML && space_9.innerHTML) {
        if (space_3.innerHTML.includes('fa-times') && space_6.innerHTML.includes('fa-times') && space_9.innerHTML.includes('fa-times')) {
            window.alert('O jogador X ganhou!')
            window.location.reload()
        }
        if (space_3.innerHTML.includes('fa-circle') && space_6.innerHTML.includes('fa-circle') && space_9.innerHTML.includes('fa-circle')) {
            window.alert('O jogador O ganhou!')
            window.location.reload()
        }
    }
    // Linha 2
    if (space_4.innerHTML && space_5.innerHTML && space_6.innerHTML) {
        if (space_4.innerHTML.includes('fa-times') && space_5.innerHTML.includes('fa-times') && space_6.innerHTML.includes('fa-times')) {
            window.alert('O jogador X ganhou!')
            window.location.reload()
        }
        if (space_4.innerHTML.includes('fa-circle') && space_5.innerHTML.includes('fa-circle') && space_6.innerHTML.includes('fa-circle')) {
            window.alert('O jogador O ganhou!')
            window.location.reload()
        }
    }
    // Linha 3
    if (space_7.innerHTML && space_8.innerHTML && space_9.innerHTML) {
        if (space_7.innerHTML.includes('fa-times') && space_8.innerHTML.includes('fa-times') && space_9.innerHTML.includes('fa-times')) {
            window.alert('O jogador X ganhou!')
            window.location.reload()
        }
        if (space_7.innerHTML.includes('fa-circle') && space_8.innerHTML.includes('fa-circle') && space_9.innerHTML.includes('fa-circle')) {
            window.alert('O jogador O ganhou!')
            window.location.reload()
        }
    }

}

const restart = document.querySelector('.restart')

restart.addEventListener('click', () => {
    window.location.reload()
})