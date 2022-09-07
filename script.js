//iniciando uma função
function Converter() {
    //Pegando um elemento do HTML
      var valorElemento = document.getElementById("valor");
    //Pegando apenas o valor inserido
      var valor = valorElemento.value;
    //Mudando de string para valor Foat
      var valorEscolhido = parseFloat(valor);
      
      //Efetuando a conta e printando no console
      /*var valorEmReal = valorEmDolar*5.25;
      console.log(valorEmReal);*/

      var amoeda = document.getElementById("moeda")
      var moeda = amoeda.value;
      console.log(moeda);

      if (moeda=="Dolar"){
        valorEmReal = valorEscolhido*6;
        console.log(valorEmReal);
      } else if (moeda=="Euro") {
        valorEmReal = valorEscolhido*5;
        console.log(valorEmReal);
      } else if (moeda=="Bitcoin") {
        valorEmReal = valorEscolhido*9000;
        console.log(valorEmReal);
      }
      
      /*Para modificar um elemento que esta no html atravez do JS é necessário seguir os seguintes passos: 1. Criar uma nova variável e atribuir nela o elemento do HTML*/
      var elementoValorConvertido = document.getElementById("valorConvertido")
      /*Depois é preciso criar uma variavel com o mesmo nome do id e atriubuir o resultado que você deseja*/
      var valorConvertido = "O resultado em real é de R$ " + valorEmReal;
      /*por fim você deve usar o comando -variavelQueCriou.innerHTML- para adicionar atravez da variavel com o nome do id, o valor desejado*/
      elementoValorConvertido.innerHTML = valorConvertido
    }
