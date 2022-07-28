
///creating a class Movie.
class Movie {
    constructor(title,studio,rating="PG") {
       this.title=title;
       this.studio=studio;
       this.rating=rating;
    }//creating method
    PG(type){
        let movieType = [`
        Title:${this.title}
        Studio:${this.studio}
        Rating:${this.rating}
        `]
        if (this.rating === "PG"){
        return movieType;
    }
    
}
}
/////create an object for the class movie.
let obj1= new Movie ("Casino Royale","Eon Productions","PG13");
let obj2 =new Movie ("Birds of Prey","Warner Bros Pictures","PGA");
let obj3 =new Movie ("Tenet","WarnerBrosPictures","PG");
let obj4 =new Movie("TheMummy","UniversalPictures","PG");


///calling the method with obj ref
document.write(obj1.getPG("PG"));
document.write(obj2.getPG("PG"));
document.write(obj3.getPG("PG"));
document.write(obj4.getPG("PG"));
//////expected Output
/*
undefined
undefined
[
  '\n' +
    '        Title:Tenet\n' +
    '        Studio:WarnerBrosPictures\n' +
    '        Rating:PG\n' +
    '        '
]
[
  '\n' +
    '        Title:TheMummy\n' +
    '        Studio:UniversalPictures\n' +
    '        Rating:PG\n' +
    '        '
]
*/

