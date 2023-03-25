window.onload = function carta() {

   
    let pintas = ["♦"," ♥ ", "♠" , "♣"];

    let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Rey", "Reina", "As"];
    

    const resultP = document.getElementsByTagName("h2");  
    resultP.innerHtml = pintas[getRandom(pintas.length)];
    console.log(pintas[getRandom(pintas.length)]);


    const resultV = document.getElementsById("#Numero");
    resultV.textContent = valores[getRandom(valores.length)];
    console.log(valores[getRandom(valores.length)]);

    function getRandom(max) {
        return Math.floor(Math.random() * max);
      }
     

    
};

     

    



