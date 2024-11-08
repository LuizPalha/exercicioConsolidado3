const { gets, print } = require("./funcAuxiliares")

const salBruto = gets()
let salLiquido = 0
const beneficios = gets()

function calcPercentual(valor, percentual) { // faz o calculo do percentual 
    return valor * (percentual / 100)
}

function getPercentual(salBruto) { // Extrai o percentual em cima do salario mencionado
    if (salBruto > 0 && salBruto <= 1100.00) {
        return 5/100
    }
        else if (salBruto >= 1100.00 && salBruto < 2500.00) {
            return 10/100
        }
            else {
                return 15
            }
}

salLiquido = salBruto - calcPercentual(salBruto, getPercentual(salBruto)) + beneficios
let descontos = salBruto - (salBruto - calcPercentual(salBruto, getPercentual(salBruto)))

print ("O salario a ser transferido é: R$ " + salLiquido)
print ("Sendo descontado para IRPF R$ " + descontos)
