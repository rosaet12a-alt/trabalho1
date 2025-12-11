function verificar(){
    var data= new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    if (fano.value.length == 0 || (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsexo = document.getElementsByName('radsex')
            var idade = ano - Number (fano.value)
            var genero= ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsexo[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade< 10){
                    // Criança
                    img.setAttribute('src', 'bebefem.jpg')
                } else if ( idade < 21){
                    // jovem
                    img.setAttribute('src','jovemmas.jpg')
                } else if (idade < 50){
                    // Adulto
                    img.setAttribute('src', 'idoso.jpg')
                }
            }  else if (fsexo[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade< 10){
                    // Criança
                    img.setAttribute('src', 'bebefem.jpg')
                } else if ( idade < 21){
                    // jovem
                    img.setAttribute('src','jovemmas.jpg')
                } else if (idade < 50){
                    // Adulto
                    img.setAttribute('src', 'idoso.jpg')
                }
                }

            res.style.texAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendchild(img)
            } 
            
   
            
        

}