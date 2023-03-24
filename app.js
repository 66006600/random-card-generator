function carta () {
    
    let pintas = ["Diamantes", "Corazones", "Picas", "Clubes"];
    let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Rey", "Reina", "As"];
    
    let palo = pintas[Math.floor(Math.random() * pintas.length)];
    let valor = valores[Math.floor(Math.random() * valores.length)];
    console.log

    document.getElementsByTagName("h2").innerHtml = palo;
    document.getElementsByTagName("h1").innerHtml = valor;



}