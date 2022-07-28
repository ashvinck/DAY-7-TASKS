

class Circle {
    ///creating a constructor
    constructor (radius= 1.0 , color = "red",area,circumfrence){
        this._radius = radius;
        this._color = color;
        this._area = area;
        this._circumfrence=circumfrence;
        
    }
    //////methods
   
    circle() {
        let details = `
        Radius:${this.radius};
        Color:${this._color};
        `
        return details;
    }
   
    circle(radius){
        let details = `
        Radius:${this.radius};
        Color:${this._color};
        `
        return details
    }
    get radius() {
        return this._radius;
    }
    set radius(rad){
         return this._radius;
    }
    get color() {
        return this._color;
    }
    set color(col) {
        return this._color;
    }
    tooString(){
         let str =  ` 
         Circle[radius =${this._radius.toString()},
         color=${this._color}]
         `
         return str;
    }
    get area(){
        return Math.PI*this._radius*this._radius;
    }
    get circumfrence() {
        return Math.PI * this._radius * this._radius;
    }
  }
  
  /////Creating Objects
  
  let obj1 = new Circle (); 
  let obj2= new Circle(2.0);
  let Rad = new Circle(4.0); //get
  Circle.rad= 3.0; //set
  let col = new Circle('purple');//get
  Circle.col = "velvet";//set
  let obj3 = new Circle("6.0","Pink");//obj
  let totalarea = new Circle(5.0)//get
  let totalcircum = new Circle(3.0)
  
  
  
  
 ///calling and printing the method with obj ref
  
  console.log(obj1.circle());//obj
  console.log(obj2.circle());//obj
  console.log(Rad.radius);//get
  console.log(Circle.rad);//set
  console.log(col.color);//get
  console.log(Circle.col)//set
  console.log(obj3.tooString());//obj
  console.log(totalarea.area.toFixed(2));
  console.log(totalcircum.circumfrence.toFixed(2));
  
  
  /* expected output
  Radius:1;
        Color:red;
        
  Radius:2;
        Color:red;
        
  4
  3
  red
  velvet
   
         Circle[radius =6.0,
         color=Pink]
         
  78.54
  28.27
  
  */