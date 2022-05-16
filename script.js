var numTentativas = 3

// Checando se as Dicas estão ligadas
var estaChecado = false;
function validar(){
    var dicasLigadas = document.getElementById("dica")
    if(dicasLigadas.checked){
      estaChecado = true;
    }else{
      estaChecado = false;
    }
    return estaChecado;
}

      

//Função do chute do usuário no Input
function Chutar(){
    var elemResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)
    var textoTentativas = document.getElementById("tentativas")
    
    if(chute < 0 || chute > 10 || chute !== chute){ //Ultimo parametro: chechando se o valor é NaN // !chute se quero verificar se o input está vazio
      elemResultado.innerHTML ="Você deve digitar um número de 0 a 10"
    }   
    else if(chute == numSecreto){
      elemResultado.innerHTML = "Você acertou! " + "😄" + "<br> O número secreto era  " + numSecreto
      document.getElementById("rejogarBot").disabled=false;
      document.getElementById("chutarBot").disabled=true;
    }else{
      elemResultado.innerHTML ="Errou " + "🙁" + " Tente novamente"
      numTentativas = numTentativas -1
      textoTentativas.innerHTML ="Tentativas restantes: " + numTentativas
     }  

     if(estaChecado && chute > numSecreto){
          elemResultado.innerHTML ="Errou " + "🙁" + " Tente novamente" + " <br> O numero secreto é menor que " + chute
          // numTentativas = numTentativas -1
          textoTentativas.innerHTML ="Tentativas restantes: " + numTentativas
        }else if (estaChecado && chute < numSecreto){
          elemResultado.innerHTML ="Errou " + "🙁" + " Tente novamente" + "<br> O numero secreto é maior que " + chute
          // numTentativas = numTentativas -1
          textoTentativas.innerHTML ="Tentativas restantes: " + numTentativas
        }
     
     console.log(numTentativas)
    if (numTentativas == 0){
      elemResultado.innerHTML ="Tentativas acabaram! " + "😔" + " O número secreto era " + numSecreto
      document.getElementById("rejogarBot").disabled=false;
      document.getElementById("chutarBot").disabled=true;
    } 
    document.getElementById("valor").value = "";
}


//Sorteando um número aleatório
var numSecreto = parseInt(Math.random() * 11) 
console.log(numSecreto)


//Função para recarregar a página
function tentarDeNovo(){
    window.location.href = window.location.href;

}