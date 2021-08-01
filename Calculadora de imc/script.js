const botao = document.querySelector(".btn")

function imc (){
    const nome = document.querySelector(".nome").value
    const altura = document.querySelector(".altura").value
    const peso = document.querySelector(".peso").value
    const resultado = document.querySelector(".resultado")

    if (nome != "" && altura != "" && peso != ""){
        var calcIMC = (peso / (altura * altura)).toFixed(2)

        if (calcIMC < 18.5){
            classificacao = " você está abaixo do peso."
        } if(calcIMC > 18.5 && calcIMC < 24.9){
            classificacao = " seu peso está normal."
        } if(calcIMC > 24.9) {
            classificacao = " você está acima do peso!"
        }

        resultado.textContent = nome + " seu Imc é " + calcIMC + classificacao
    }else{
        resultado.textContent = "Preencha todos os campos!!"
    }
}

botao.addEventListener("click", imc)