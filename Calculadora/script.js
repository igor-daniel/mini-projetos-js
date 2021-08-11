// const buttons = document.querySelectorAll(".grid button")
// const display = document.querySelector(".resultado")
// function insert(el){
//     const valor = this.value;
    
//     display
// }

// buttons.forEach((button) => {
//     button.addEventListener("click", insert);
// })

function insert(num){
    const numero = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = numero + num;
}
function clean(){
    document.getElementById("number").innerHTML = ""
}
function back(){
    const resultado = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = resultado.substring(0, resultado.length -1)

}
function calcular(){
    const resultado = document.getElementById("number").innerHTML;
    if(resultado){
        document.getElementById("number").innerHTML = eval(resultado);
    } else{
        document.getElementById("number").innerHTML = "nada para calcular."
    }
}