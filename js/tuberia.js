class Tuberia {

  constructor(type, posY) {

    this.node = document.createElement("img")
    this.node.id = "tuberia"

    // console.log(type)
    if (type === "arriba") {
      this.node.src = "./images/obstacle_top.png"
    } else if (type === "abajo") {
      this.node.src = "./images/obstacle_bottom.png"
    }

    gameBoxNode.append(this.node)

    this.x = gameBoxNode.offsetWidth;
    this.y = posY;
    this.w = 60;
    this.h = 250;

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