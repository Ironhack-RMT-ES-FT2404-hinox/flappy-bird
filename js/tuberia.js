class Tuberia {

  constructor() {

    this.node = document.createElement("img")
    this.node.id = "tuberia"

    this.node.src = "./images/obstacle_top.png" //! esto cambiará

    gameBoxNode.append(this.node)

    this.x = gameBoxNode.offsetWidth - 60;
    this.y = 0;
    this.w = 60;
    this.h = 150;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`

    this.speed = 2;
  }


  //* movimiento de las tuberias
  automaticMovementEffect() {

    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;

  }


}