window.onload = setInterval(carta, 2000);

function carta() {
  let suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
  let suitLogos = ["♦", "♥", "♠", "♣"];

  let valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Rey",
    "Reina",
    "As",
  ];

  const h2 = document.getElementsByTagName("h2");
  const suitIndex = getRandom(suits.length);
  const suit = suits[suitIndex];
  const suitLogo = suitLogos[suitIndex];
  const color = getColor(suit);

  h2[0].innerText = suitLogo;
  h2[0].style.color = color;
  h2[1].innerText = suitLogo;
  h2[1].style.color = color;
  console.log(h2.innerText);

  const p = document.getElementsByTagName("p");
  p[0].innerText = valores[getRandom(valores.length)];
  console.log(p[0].innerText);

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function getColor(suit) {
    console.log(suit);
    if (suit === "Hearts" || suit === "Diamonds") {
      console.log("red");
      return "red";
    } else {
      console.log("black");
      return "black";
    }
  }
}
