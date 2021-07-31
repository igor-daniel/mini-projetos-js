const lamp = document.querySelector(".lampada")
const turnOn = document.querySelector(".liga")
const turnOff = document.querySelector(".desliga")

function lampOn(){
    if (!isLampBroken ()){
        lamp.src = "img/ligada.jpg"
    }
    
}
function lampOff(){
    if (!isLampBroken ()){
        lamp.src = 'img/desligada.jpg'
    }
    
}

function lampBroken(){
    if (!isLampBroken ()){
        lamp.src = 'img/quebrada.jpg';
    }
   
}

function isLampBroken(){
    return lamp.src.indexOf("quebrada") > -1
}
turnOn.addEventListener('click', lampOn)

turnOff.addEventListener("click", lampOff)

lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroken)

