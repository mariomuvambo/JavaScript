function clicar(){
    let num = document.getElementById('txt1')

    let resultado = document.getElementById('selecione')

    if(num.value.length == 0){
        window.alert('Por favor digite um numero')
    }else{
    
        let n= Number(num.value)
        let c =1

        while(c <=12 ){
            let item = document.createElement('option')

            item.text = n + ' * ' + c + '='+ n * c 
            resultado.appendChild(item)
            c++
        }
        
    }
    
}