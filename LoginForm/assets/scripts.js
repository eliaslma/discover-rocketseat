function showPass() {

    let element = document.getElementById('password')
    let sizeElement = element.value.length

    document.getElementById('eye').src = "./assets/images/eye-active.svg"
    element.type = "text"
    element.setSelectionRange(sizeElement, sizeElement)
    element.focus()
    document.getElementById('eye').setAttribute("onclick", "hidePass()")

}

function focusLock() {
    document.getElementById('lock').src = "./assets/images/lock-focus.svg"
}

function focusMail() {
    document.getElementById('mail').src = "./assets/images/mail-focus.svg"
}

function noFocus() {

    document.getElementById('mail').src = "./assets/images/mail.svg"
    document.getElementById('lock').src = "./assets/images/lock.svg"

}

function hidePass() {

    let element = document.getElementById('password')
    let valueSize = element.value.length

    document.getElementById('eye').src = "./assets/images/eye.svg"
    element.type = "password"
    element.setSelectionRange(valueSize, valueSize)
    element.focus()
    document.getElementById('eye').setAttribute("onclick", "showPass()")

}
