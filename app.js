window.onload = function carta() {

   
    let suits = ["♦"," ♥ ", "♠" , "♣"];

    let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Rey", "Reina", "As"];
    

    const h2 = document.getElementsByTagName("h2");
    h2.innerText = suits[getRandom(suits.length)];
    console.log(h2.innerText);


    const p = document.getElementsByTagName("p");
    p.innerText = valores[getRandom(valores.length)];
    console.log(valores[getRandom(valores.length)]);

    function getRandom(max) {
        return Math.floor(Math.random() * max);
      }
     

    
};

     

    



