function horadia(){
    var data = new Date()
    
    var hora = data.getHours()
    var min = data.getMinutes()

    var horaSistema = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')

    horaSistema.innerHTML = 'Sao '+hora+':'+min+' min'

    if(hora >= 0 && hora <12){
        img.src = 'manha.jpg'
        document.body.style.background = 'yellow'

    }else if(hora >11 && hora<18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'aqua'

    }else{
        img.src = 'noite.jpg'
        document.body.style.background = 'red'
    }

}