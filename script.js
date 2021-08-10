const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function calculo() {
    if (nome.value !== "" && altura !== "" && peso !== "") {
        resultado.textContent = parseFloat(peso.value) / (parseFloat(altura.value ** 2))

    } else {
        alert("Preencha todos os campos!!")
    }
}

calcular.addEventListener("click", calculo)