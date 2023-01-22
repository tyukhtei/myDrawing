let standardVideo = "https://www.youtube.com/embed/Ti1Iae6AcaU"
let boxVideo = document.getElementById('pasteVideo')
let modalWindow = document.getElementById('modalWindow')
let callModalWindow = document.getElementById('callModalWindow')
let btnCancel = document.getElementById('btnCancel')
let pageModalWindow = document.getElementById('pageModalWindow')
let body = document.getElementById('body')

boxVideo.src = standardVideo

gettingALink.addEventListener('input',function (){
    gettingALink.value = gettingALink.value.replace('watch?v=', 'embed/')
    console.log(gettingALink.value)
    boxVideo.src = gettingALink.value

    if (!gettingALink.value) {
        boxVideo.src = standardVideo
    }
})

callModalWindow.addEventListener('click',function (){
    pageModalWindow.style.top = '0'
    modalWindow.style.top = 'calc(50% - 196px)'
    modalWindow.style.left = 'calc(50% - 271px)'
    body.style.overflow = 'hidden'
})

btnCancel.addEventListener('click',function (){
    pageModalWindow.style.top = '-100%'
    modalWindow.style.top = '-1000px'
    modalWindow.style.left = 'calc(50% - 271px)'
    body.style.overflow = 'auto'
})