//  Array de cartas
let cartas = [
  "01oros.jpg",
  "02oros.jpg",
  "03oros.jpg",
  "04oros.jpg",
  "05oros.jpg",
  "06oros.jpg",
  "07oros.jpg",
  "10oros.jpg",
  "11oros.jpg",
  "12oros.jpg",
  "01bastos.jpg",
  "02bastos.jpg",
  "03bastos.jpg",
  "04bastos.jpg",
  "05bastos.jpg",
  "06bastos.jpg",
  "07bastos.jpg",
  "10bastos.jpg",
  "11bastos.jpg",
  "12bastos.jpg",
  "01espadas.jpg",
  "02espadas.jpg",
  "03espadas.jpg",
  "04espadas.jpg",
  "05espadas.jpg",
  "06espadas.jpg",
  "07espadas.jpg",
  "10espadas.jpg",
  "11espadas.jpg",
  "12espadas.jpg",
  "01copas.jpg",
  "02copas.jpg",
  "03copas.jpg",
  "04copas.jpg",
  "05copas.jpg",
  "06copas.jpg",
  "07copas.jpg",
  "10copas.jpg",
  "11copas.jpg",
  "12copas.jpg",
];

// Para añadir las cartas
let jugador_visor = document.getElementById("jugador_visor");
let maquina_visor = document.getElementById("maquina_visor");

// Textos de salida
let jugador_titulo = document.getElementById("jugador_titulo");
let maquina_titulo = document.getElementById("maquina_titulo");

// Botones
let pedir = document.getElementById("pedir");
let plantarse = document.getElementById("plantarse");
let nueva_partida = document.getElementById("nueva_partida");

// Variables globales para guardar la jugada del jugador y de la máquina
let jugada = 0;
let jugadaJugador = 0;


// Funciones
//desordenar el array
const shuffle = (array) =>{
  for (let i = 0; i < array.length; i++) {
    const random_index = Math.floor(Math.random() * array.length);
    const random = array[random_index];

    array[random_index] = array[i];
    array[i] = random;
  }
}

// Funciones
const barajarCartas = () => {
  
  shuffle(cartas);

}

let cont = 1;
let sumaTotalJugador = parseFloat(0);

const pedirCarta = (event) => {

  let newImg = document.createElement("IMG");
  newImg.src = "./imagenes/" + cartas[cont];
  jugador_visor.append(newImg);
  if(cartas[cont].substring(0,2)>7){
    sumaTotalJugador += 0.5;
  }else{
    sumaTotalJugador = parseFloat(sumaTotalJugador) + parseFloat(cartas[cont].substring(0,2));
  }
  cont++;

}

let sumaTotalMaquina = parseFloat(0);

const finJugador = () => {
  while(sumaTotalMaquina<=7.5){
    let newImg = document.createElement("IMG");
    newImg.src = "./imagenes/" + cartas[cont];
    maquina_visor.append(newImg);
    if(cartas[cont].substring(0,2)>7){
      sumaTotalMaquina += 0.5;
    }else{
      sumaTotalMaquina = parseFloat(sumaTotalMaquina) + parseFloat(cartas[cont].substring(0,2));
    }
    cont++;
  }

  if(sumaTotalJugador==7.5){
    jugador_titulo.textContent = "Gana el jugador con un total de "+sumaTotalJugador+" puntos";
  }
  if(sumaTotalMaquina==7.5){
    maquina_titulo.textContent = "Gana la máquina con un total de "+sumaTotalMaquina+" puntos"
  }
  if(sumaTotalJugador<=7.5 && sumaTotalMaquina > 7.5){
    jugador_titulo.textContent = "Gana el jugador con un total de "+sumaTotalJugador+" puntos";
    maquina_titulo.textContent = "Pierde la máquina";
  }else{
    if(sumaTotalJugador>7.5 && sumaTotalMaquina>7.5){
      if(sumaTotalJugador>sumaTotalMaquina){
        jugador_titulo.textContent = "Gana el jugador con un total de "+sumaTotalJugador+" puntos";
        maquina_titulo.textContent = "Pierde la máquina";
      }else{
        jugador_titulo.textContent = "Pierde el jugador";
        maquina_titulo.textContent = "Gana la máquina con un total de "+sumaTotalMaquina+" puntos";
      }
    }
    jugador_titulo.textContent = "Pierde el jugador";
    maquina_titulo.textContent = "Gana la máquina con un total de "+sumaTotalMaquina+" puntos";
  }

  pedir.style.display="none";
  plantarse.style.display="none";
  nueva_partida.style.display = "flex";

}

const reiniciarJuego = () => {

    cont = 0;
    shuffle(cartas);
    pedir.style.display="block";
    plantarse.style.display="block";
    nueva_partida.style.display = "none";
    jugador_visor.innerHTML = "";
    maquina_visor.innerHTML = "";
}

// Eventos
document.addEventListener("DOMContentLoaded", barajarCartas);
pedir.addEventListener("click", pedirCarta);
plantarse.addEventListener("click", finJugador);
nueva_partida.addEventListener("click", reiniciarJuego);
