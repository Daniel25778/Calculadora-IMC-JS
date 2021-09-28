const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function camposValidos() {
    return (nome.value.trim() !== "" && altura !== "" && peso !== "")
}


function calcularImc() {
    if (camposValidos()) {
        resultado.value = (parseFloat(peso.value) / (parseFloat(altura.value ** 2))).toFixed(1)
        exibirImc()

    } else {
        alert("Preencha todos os campos!!")
    }
}

function exibirImc() {
    status(resultado);
    resultado.innerHTML = status(resultado)

}

calcular.addEventListener("click", calcularImc)

function status(resultado) {
    let condicao = ""
    if (resultado.value <= 18.5) {
        condicao = nome.value + " seu IMC é " + resultado.value + " e você está Abaixo do peso,CUIDADO!"

    } else if (resultado.value > 18.5 && resultado.value < 24.9) {
        condicao = nome.value + " seu IMC é " + resultado.value + " e você está com o peso ideal,PARABÉNS!"
    } else if (resultado.value > 25.0 && resultado.value < 29.9) {
        condicao = nome.value + " seu IMC é " + resultado.value + " e você está acima do peso,CUIDADO!"
    } else if (resultado.value >= 30.0 && resultado.value < 34.9) {
        condicao = nome.value + " seu IMC é " + resultado.value + " e você está com obesidade grau I,CUIDADO!"
    } else if (resultado.value >= 35.0 && resultado.value <= 39.9) {
        condicao = nome.value + " seu IMC é " + resultado.value + " e você está com obesidade grau II,CUIDADO!"
    } else {
        condicao = nome.value + " seu IMC é " + resultado.value + " e você está com obesidade grau III,CUIDADO!"
    }
    return condicao;

}