//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

// pantallas
const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// botones
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")

let game; // vacio porque aun no ha iniciado el juego

//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame() {
  console.log("iniciando el juego")

  //1. ocultar la pantalla de inicio
  splashScreenNode.style.display = "none"

  //2. mostrar la pantalla de juego
  gameScreenNode.style.display = "flex"

  //3. iniciar el juego
  game = new Game()
  console.log(game)
  game.start()

}





//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)

gameBoxNode.addEventListener("click", () => {
  console.log("intentando hacer que el pollito salte")
  game.pollito.jumpEffect()
})





