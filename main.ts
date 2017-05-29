class SweetSweetBasil {
  color: string;
     constructor(name:string, startColor:string) {
         console.log("Even sweeter" + name)
         this.color = startColor
     }

     getColor(){
       console.log(this.color)
     }
 }
//  let basil = new SweetSweetBasil("justin","black")
// basil.getColor()
//   let world = new SweetSweetBasil("maven","green")
let world = new SweetSweetBasil("world", "black")

class Basil extends SweetSweetBasil {
  constructor(name: string, startColor: string){
    super(name, startColor)

  }
  setNewColor(color:string){
    this.color = color
  }
}

let basil3 = new Basil("basil", "brigt green")
basil3.getColor()
basil3.setNewColor("red")
//world.setNewColor("black")
