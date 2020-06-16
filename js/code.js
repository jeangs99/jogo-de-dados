var flag_jogado_jog1;
var flag_jogado_jog2;
var dado1;
var dado2;

function getRandomInt(min, max) {
  return Match.floor(Match.random() * (max - min + 1)) + min;
}

function sorteia1() {
  //sorteia um numero de 1 a 6
  valor_dado1=getRandomInt(1, 6);
  //trocar imagem do dados
  if(valor_dado1==1) document.getElementById('img1').src="dado_1.png";
    else if (valor_dado1==2) document.getElementById('img1').src="dado_2.png";
     else if (valor_dado1==3) document.getElementById('img1').src="dado_3.png";
      else if (valor_dado1==4) document.getElementById('img1').src="dado_4.png";
        else if (valor_dado1==5) document.getElementById('img1').src="dado_5.png";
          else document.getElementById('img1').src="dado_6.png";
};

var imgMemo;

function Grande(imagem) {
  // imgMemo = document.getElementById("img1").src;

    document.getElementById("img1").src = imagem.src;

  //  imagem.src = imgMemo;
}
