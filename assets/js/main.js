// mobile functions -------------------------------------------------------

const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const body = document.getElementById('body')
const header = document.getElementById('header')
const main = Array.from(document.getElementById('main').children)

function burger() {

    hamburger.style.visibility = 'hidden'
    menu.style.display = 'flex'
    header.style.filter = 'blur(10px)'

}

function closeBurger() {

    hamburger.style.visibility = 'visible'
    header.style.filter = 'none'
    menu.style.display = 'none'
}

function showSection() {
    const name = event.target.name
    const section = document.getElementById(name)

    main.forEach(element => {
        element.style.display = 'none'
    })

    header.style.display = 'none'
    menu.style.display = 'none'
    hamburger.style.visibility = 'visible'
    section.style.display = 'flex'

}

function home() {

    main.forEach(element => {
        element.style.display = 'none'
    })
    
    header.style.display = 'block'

    closeBurger()
}

// desktop functions -------------------------------------------------------

function showDesktopSection() {
    const name = event.target.name
    const section = document.getElementById(name)

    // main.forEach(element => {
    //     element.style.display = 'none'
    // })

    header.style.display = 'none'
    section.style.display = 'block'

}

function closeDesktopSection(){

    main.forEach(element => {
        element.style.display = 'none'
    })
    
    header.style.display = 'block'
    header.style.filter = 'none'
}
