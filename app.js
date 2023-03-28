window.onload = setInterval(carta, 2000);

function carta() {
  let suits = ["♦", "♥", "♠", "♣"];

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
  const suit = suits[getRandom(suits.length)];

  h2[0].innerText = suit;
  h2[1].innerText = suit;
  console.log(h2.innerText);

  const p = document.getElementsByTagName("p");
  p[0].innerText = valores[getRandom(valores.length)];
  console.log(p[0].innerText);

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
}
