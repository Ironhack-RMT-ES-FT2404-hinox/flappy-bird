class Pollito {

  constructor() {

    // nodo
    this.node = document.createElement("img")
    this.node.id = "pollito" // opcional
    // imagen
    this.node.src = "./images/flappy.png"
    // desde JS las busquedas de imagenes siempre con "./"

    gameBoxNode.append(this.node) // esto añade el nodo del pollito al game-box

    this.x = 50; // posicion eje x
    this.y = 60; // posicion eje y
    this.w = 40; // ancho
    this.h = 35; // alto

    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`
    // si la palabra empieza en h, no termina en h. Viceversa.

    // velocidad gravedad
    this.gravitySpeed = 2;

    // velocidad salto
    this.jumpSpeed = 30;

  }

  //todo efecto de gravedad del pollito
  gravityEffect() {
    this.y += this.gravitySpeed
    // console.log(this.y)
    //! SIEMPRE QUE MODIFIQUEMOS POSICION, TAMAÑO, COLOR, DISTANCIA, IMG TENEMOS QUE MODIFICAR EL NODO.
    this.node.style.top = `${this.y}px`
  }

  //todo efecto de salto del pollito
  jumpEffect() {

    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`

  }

}