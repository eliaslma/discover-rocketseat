function openMenu() {
    
    const element = document.getElementsByClassName('links')
    element[0].style.display = 'flex'
    document.getElementById('menu-button').src = "./assets/menu-buguer-close.svg"
    document.getElementById('menu-button').setAttribute("onclick","closeMenu()");
    
}

function closeMenu(){
    
    const element = document.getElementsByClassName('links')
    element[0].style.display = 'none'
    document.getElementById('menu-button').src = "./assets/menu-buguer-open.svg"
    document.getElementById('menu-button').setAttribute("onclick","openMenu()");
    
}

