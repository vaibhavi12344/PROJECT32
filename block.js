class Block  {
    constructor(x, y, width, height){
      
      var options={
      restitution:0.2,
      friction:0.7,
      density:1
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){}
  
    }
  