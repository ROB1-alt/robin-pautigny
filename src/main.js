// import { Curtains,Plane } from "./curtains.umd"


const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')
const cursor = document.getElementById('cursor')


document.addEventListener('mousemove' , function(e){
    var x = e.clientX
    var y = e.clientY
    document.getElementById('cursor').style.left = x - 10 + 'px';
    document.getElementById('cursor').style.top = y - 10 + 'px';

})

openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

function show(){
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
}
function close(){
    mainMenu.style.top = '-200%'
}

