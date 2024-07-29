class Bike {
    constructor(color, model) {
      this.color = color;
      this.model = model;
    }
  
    getDetails() {
      return this.model + " bike has " + this.color + " color";
    }
  }
  
  const myBike = new Bike("red", 1997);
  console.log(myBike.getDetails());
  