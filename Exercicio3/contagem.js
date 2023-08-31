function contagem(){
    let a = window.document.getElementById('inicio')
    let b = window.document.getElementById('fim')
    let c = window.document.getElementById('contar')
    let resultado = window.document.querySelector('div#resultado')

    
if(a.value.lenght == 0 || b.value.lenght == 0 || c.value.lenght == 0){
    window.alert('Erro')
}else{
    resultado.innerHTML = 'Contando: '
    let inicio = Number(a.value)
    let fim = Number(b.value)
    let passo = Number(c.value)

    if(inicio < fim){
        // contagem crecente
        for(let d = inicio; d <= fim; d += passo ){
            resultado.innerHTML += ' '+ d +' '
        }

    }else{
        // contagem decresscente
        for(let d = inicio; d >= fim; d -= passo ){
            resultado.innerHTML += ' '+ d 
        }

    }
    

} 

}