window.onload = function carta() {

   
    let pintas = ["Diamantes", "Corazones", "Picas", "Clubes"];
    let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Rey", "Reina", "As"];
    
   
      
    var resultado1 = document.getElementById("h2");
    resultado1.innerHtml = pintas[getRandomInt(pintas.length)];

    var resultado2 = document.getElementById("h1");
    resultado2.innerHtml = valores[getRandomInt(valores.length)];

    
}


