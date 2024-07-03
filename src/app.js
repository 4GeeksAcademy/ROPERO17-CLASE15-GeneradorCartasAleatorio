/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"];

  function paloAleatorio() {
    let paloIndex = Math.floor(Math.random() * palos.length);
    return palos[paloIndex];
  }

  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function numeroAleatorio() {
    let numberIndex = Math.floor(Math.random() * numeros.length);
    return numeros[numberIndex];
  }

  let paloSeleccionado = paloAleatorio();
  let numeroSeleccionado = numeroAleatorio();

  document.getElementById("palo-superior").innerHTML = paloSeleccionado;
  document.getElementById("palo-inferior").innerHTML = paloSeleccionado;
  document.getElementById("numero-final").innerHTML = numeroSeleccionado;

  if (paloSeleccionado === "♥" || paloSeleccionado === "♦") {
    document.getElementById("palo-superior").style.color = "red";
    document.getElementById("palo-inferior").style.color = "red";
    document.getElementById("numero-final").style.color = "red";
  } else {
    document.getElementById("palo-superior").style.color = "black";
    document.getElementById("palo-inferior").style.color = "black";
    document.getElementById("numero-final").style.color = "black";
  }
};
