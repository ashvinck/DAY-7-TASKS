


///creating a class Movie.
class Movie {
    constructor(title,studio,rating="PG") {
       this.title=title;
       this.studio=studio;
       this.rating=rating;
    }//creating method
    Details(){
        let details = `
        Title:${this.title}
        Studio:${this.studio}
        Rating:${this.rating}
        `
        return details;
    }
    
}
/////create an object for the class movie.
let obj = new Movie ("Casino Royale","Eon Productions","PG13")



///calling the method with obj ref
document.write(obj.Details());
//////expected Output
/*
Title:Casino Royale
        Studio:Eon Productions
        Rating:PG13
        */ 
