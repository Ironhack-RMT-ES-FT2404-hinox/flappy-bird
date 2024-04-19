class Game {

  // propiedades
  constructor() {

    //background CHECK
    //todo pollito => tamaños, posiciones, etc
    this.pollito = new Pollito() // el juego empieza con un pollito creado

    //todo tuberias => tamaños, posiciones, etc
    // this.unaTuberia = new Tuberia()
    this.tuberiasArr = [
      new Tuberia()
    ]

  }

  // metodos


  //todo efecto de que las tuberias aparecen => frecuencia, altura aleatoria
  

  //todo efecto de que las tuberias desaparecen
  //todo colision entre el pollito y las tuberias
  //todo accion de game over

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
  }

  start() {
    setInterval(() => {
      this.gameLoop()
    }, Math.round(1000/60)) // 60fps
  }

}