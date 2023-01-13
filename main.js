canvas = document.getElementById("meuCanvas"); //armazenando a tag do canvas na variável canvas do js
formato = canvas.getContext("2d"); // desenhar em formato 2d

color = ""; //iniciando a cor com vermelho, para depois poder ser ajustada para outras cores

canvas.addEventListener("mousedown", myMousedown);//adiciondo ao canvas um "escutador de eventos", assim que ocorrer o clique do mouse ele chama a função para executar

function myMousedown(e)
{
    //obtém a cor que escolhemos
    color = document.getElementById("color").value;
    console.log(color);
    
    //obtendo e ajustando a posição x do mouse onde foi clicado
     mouseX = e.clientX - canvas.offsetLeft;

     //obtendo e ajustando a posição y do mouse onde foi clicado
     mouseY = e.clientY - canvas.offsetTop;

    console.log("X = " + mouseX + " ,Y =  " + mouseY);
    circle(mouseX , mouseY);    
}

function circle(mouseX , mouseY)
{
    formato.beginPath(); //inicia o desenho no canvas
    formato.strokeStyle = color; //ajusta cor para o objeto desenhado
    formato.lineWidth = 2; //grossura da linha do objeto desenhado
    formato.arc(mouseX, mouseY, 40 ,0 , 2*Math.PI);//utilizado para desenhar circulos. Math.PI é a metade de um circulo, multiplicando por 2 dara o circulo completo.
    formato.stroke(); //usado para desenhar as bordas do formato
}

function limpar()
{
    formato.clearRect(0, 0, canvas.width, canvas.height);
}

	
