class Game {

  // propiedades
  constructor() {

    //background CHECK
    //* pollito => tamaños, posiciones, etc
    this.pollito = new Pollito() // el juego empieza con un pollito creado

    //* tuberias => tamaños, posiciones, etc
    // this.unaTuberia = new Tuberia()
    this.tuberiasArr = []


    // ids de intervalos
    this.gameIntervalId;
    this.tuberiasIntervalId;

  }

  // metodos


  //* efecto de que las tuberias aparecen => frecuencia, altura aleatoria
  tuberiaAparece() {
    //* las tuberias van a aparece de dos en dos

    let randomPosY = Math.floor(Math.random() * -200) // valor aleatorio entre 200 y 0
    let distanciaEnteTuberias = 350

    let nuevaTuberia1 = new Tuberia("arriba", randomPosY)
    this.tuberiasArr.push(nuevaTuberia1)

    let nuevaTuberia2 = new Tuberia("abajo", randomPosY + distanciaEnteTuberias)
    this.tuberiasArr.push(nuevaTuberia2)
    // console.log(this.tuberiasArr.length)
  }

  iniciarFrecuenciaDeTuberias() {
    this.tuberiasIntervalId = setInterval(() => {
      this.tuberiaAparece()
    }, 2000)
  }
  

  //todo efecto de que las tuberias desaparecen
  eliminarTuberiasAlSalirDeLaPantalla() {

    this.tuberiasArr.forEach((cadaTuberia, index) => {
      if ((cadaTuberia.x + cadaTuberia.w) < 0) {
        //! al eliminar elementos del juego debo considerar dos cosas
        //*1 Debo eliminar el objeto (o sacarlo del array)
        this.tuberiasArr.splice(index, 1) // remueve ese elemento del array
        //*2 Debo eliminar el nodo de DOM <img>
        cadaTuberia.node.remove()
      }
    })

  }


  //* colision entre el pollito y las tuberias
  colisionPollitoTuberias() {

    
    this.tuberiasArr.forEach((cadaTuberia) => {
      
      // this.pollito
      // cadaTuberia

      if (
        this.pollito.x < cadaTuberia.x + cadaTuberia.w &&
        this.pollito.x + this.pollito.w > cadaTuberia.x &&
        this.pollito.y < cadaTuberia.y + cadaTuberia.h &&
        this.pollito.y + this.pollito.h > cadaTuberia.y
      ) {
        // Collision detected!
        console.log("el pollito se estampó")
        this.gameOver()
      }

    })

  }

  //todo accion de game over
  gameOver() {

    //*1. todos los intervalos deberian deterse
    clearInterval(this.gameIntervalId)
    clearInterval(this.tuberiasIntervalId)

    //*2. ocultar la pantalla de juego
    gameScreenNode.style.display = "none"

    //*3 mostrar la pantalla final
    gameOverScreenNode.style.display = "flex"

  }

  //* BONUS
  // sonidos y musica
  // score

  gameLoop() {
    // console.log("juego andando")

    // aqui le decimos el codigo que debe continuamente mover el pollito hacia abajo
    this.pollito.gravityEffect()
    // this.unaTuberia.automaticMovementEffect()
    this.tuberiasArr.forEach((cadaTuberia) => {
      cadaTuberia.automaticMovementEffect()
    })
    this.eliminarTuberiasAlSalirDeLaPantalla()
    this.colisionPollitoTuberias()
  }

  start() {
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, Math.round(1000/60)) // 60fps
  }

}