let num = document.getElementById('txt1')
let lista = document.querySelector('select#selecione')
let result = document.getElementById('resultado')

result.innerHTML =''

let valores=[]

function isNumero(n){
    if(Number(n) >=1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function inLIsta(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Inserir(){

    if(isNumero(num.value) && !inLIsta(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option')

        item.text = 'Valor '+ num.value + ' Adicionado'

        lista.appendChild(item)


    }else{
        window.alert('valor invalido ou ja inserido')

    }
    num.value= ''
    num.focus()

  
}

// Finalizar 

function Finalizar(){

    if(valores.length == 0){
        window.alert('Adicione Valores antes de Finalizar')
    }else{
        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos]>maior){
            
                maior= valores[pos]
            }
            if(valores[pos] < menor)
                menor= valores[pos]
        }
        media= soma/total
        result.innerHTML =''

        result.innerHTML += 'Ao todo temos '+ total + ' Números inseridos <br>'
        result.innerHTML += 'O maior numero e '+ maior+'<br>'
        result.innerHTML += 'O Menor numero e '+ menor+ '<br>'
        result.innerHTML += 'A soma de todos os números e '+ soma+ '<br>'
        result.innerHTML += 'A Media dos valores inseridos '+ media+ '<br>'

    }
}