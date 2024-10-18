function soma(a, b) {
    return (a + b)
}

function subtrair(a, b) {
    return (a - b)
}

function multiplicar(a, b) {
    return (a * b)
}

function dividir(a, b) {
    return (a / b)
}

function main() {

    var a = parseFloat(document.getElementById('valueA').value)
    var b = parseFloat(document.getElementById('valueB').value)
    var operacao = document.getElementById("operacao").value
    var resultado = document.getElementById("resultado")

    let result;

    if (operacao == "soma") {
        result = soma(a, b)
        
    } else if (operacao == "subtrair") {
        result = subtrair(a, b)

    } else if (operacao == "dividir") {
        result = dividir(a, b)
        
    } else if (operacao == "multiplicar") {
        result = multiplicar(a, b)
        
    }

    resultado.textContent = result;
}
