function verificar(){
    var data = new Date()
    var anoSistema = data.getFullYear()
    var ano = window.document.getElementById('anoNascimento')
    var resp = window.document.querySelector('div#resultado')

    if(ano.value.length == 0 || ano.value > anoSistema){
        window.alert('===ERRO=== ')

    }else{
        var sex = window.document.getElementsByName('sexo')
        var idade = anoSistema - ano.value
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id','foto')

        if(sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                // crianca
                img.setAttribute('src', 'crianca.jpeg')
            }else if(idade >=10 && idade < 21){
                // jovem
                img.setAttribute('src', 'jovem.jpeg')

            }else if(idade >= 22 && idade < 50){
                // adulto
                img.setAttribute('src', 'adulto.jpeg')

            }else {
                // idoso
                img.setAttribute('src', 'idoso.jpeg')

            }

        }else if(sex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade < 10){

            }else if(idade >=10 && idade < 21){

            }else if(idade >= 22 && idade < 50){
                // adulto

            }else {
                
            }
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = 'Detetamos '+genero+ ' Com a idade de '+idade
        resp.appendChild(img)

    }


    
}