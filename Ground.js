class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
      this.width = 900;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(188,67,67);
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 900, 20);
    }
  }
