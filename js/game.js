class Game {

  // propiedades
  constructor() {

    //background CHECK
    //todo pollito => tamaños, posiciones, etc
    this.pollito = new Pollito() // el juego empieza con un pollito creado

    //todo tuberias => tamaños, posiciones, etc
    // this.unaTuberia = new Tuberia()
    this.tuberiasArr = []

  }

  // metodos


  //todo efecto de que las tuberias aparecen => frecuencia, altura aleatoria
  tuberiaAparece() {
    //* las tuberias van a aparece de dos en dos

    let randomPosY = Math.floor(Math.random() * -200) // valor aleatorio entre 200 y 0
    let distanciaEnteTuberias = 350

    let nuevaTuberia1 = new Tuberia("arriba", randomPosY)
    this.tuberiasArr.push(nuevaTuberia1)

    let nuevaTuberia2 = new Tuberia("abajo", randomPosY + distanciaEnteTuberias)
    this.tuberiasArr.push(nuevaTuberia2)
    console.log(this.tuberiasArr.length)
  }9

  iniciarFrecuenciaDeTuberias() {
    setInterval(() => {
      this.tuberiaAparece()
    }, 2000)
  }
  

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