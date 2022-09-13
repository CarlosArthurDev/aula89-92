//pegando os nomes do local storage
var getname1=localStorage.getItem("name1")
var getname2=localStorage.getItem("name2")
//criando variaveis de pontos
var startpoints1 =0
var startpoints2 =0
//exibindo nome e pontuacao na tela
document.getElementById("player1").innerHTML=getname1+":"
document.getElementById("player2").innerHTML=getname2+":"
document.getElementById("pointP1").innerHTML=startpoints1
document.getElementById("pointP2").innerHTML=startpoints2
//exibindo os turnos na tela
document.getElementById("playerQuiz").innerHTML="Turno de pergunta-"+getname1
document.getElementById("playerResponse").innerHTML="Turno de resposta-"+getname2



function enviar(){
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    console.log("palavra minuscula"+word);
    charAt1=word.charAt(1);
    lengthdiv=Math.floor(word.length/2);

    charAt2=word.charAt(lengthdiv)
    menosum=word.length-1
    charAt3=word.charAt(menosum)

    removecharat1=word.replace(charAt1,"_")
    removecharat2=removecharat1.replace(charAt2,"_")
    removecharat3=removecharat2.replace(charAt3,"_")

    questword="<h4 id='wordDisplay'> P. "+removecharat3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";



    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  questword + inputBox + checkButton ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var turnoP="player1"
var turnoR="player2"
function check(){
    var Checar=document.getElementById("inputCheckBox").value;
    var resposta=Checar.toLowerCase();

    if(resposta==word){
        if(turnoR=="player1"){
            startpoints1=startpoints1+1;
            document.getElementById("pointP1").innerHTML=startpoints1

        }   
        else{
            startpoints2=startpoints2+1;
            document.getElementById("pointP2").innerHTML=startpoints2
  
        }
    } else{
        if(turnoR=="player1"){
          alert("voce errou e seu turno mudou(voce e ruim)")  

        }   
        else{
            alert("voce errou e seu turno mudou(voce e ruim)")    
  
        }


    }

    

    if(turnoP=="player1"){

    turnoP="player2"
    document.getElementById("playerQuiz").innerHTML="Turno de pergunta-"+getname2

    }
     else{
        turnoP="player1"
        document.getElementById("playerQuiz").innerHTML="Turno de pergunta-"+getname1

     }

     if(turnoR=="player1"){

        turnoR="player2"
        document.getElementById("playerResponse").innerHTML="Turno de Resposta-"+getname2
    
        }
         else{
            turnoR="player1"
            document.getElementById("playerResponse").innerHTML="Turno de Resposta-"+getname1
    
         }
         document.getElementById("output").innerHTML=""
}
   
    

