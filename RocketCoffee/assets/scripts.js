function closeMenu() {
    
    document.getElementById('menu-button').src = "./assets/menu-buguer-open.svg"
    document.getElementById('menu-button').removeEventListener('click',closeMenu)
    
}

function toggleMenu(){
    const links = document.getElementById('links')
    links.classList.toggle('active')

    document.getElementById('menu-button').src = "./assets/menu-buguer-close.svg"
    const btnMobile = document.getElementById('menu-button')
    btnMobile.addEventListener('click',closeMenu)

    document.querySelector('.text').classList.toggle('deactive')
    document.querySelector('.button-center').classList.toggle('deactive')
    document.getElementById('title').classList.toggle('deactive')
    document.querySelector('.greatcoffee').classList.toggle('deactive')
    
}

const btnMobile = document.getElementById('menu-button')
btnMobile.addEventListener('click',toggleMenu)




