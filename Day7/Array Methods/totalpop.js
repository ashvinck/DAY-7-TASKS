newFunction();

function newFunction() {
    let xhr = new XMLHttpRequest(); //created XMLHttpRequest


    //2.open the request
    xhr.open('GET', "https://restcountries.com/v3.1/all");

    //set up listener to process the complete request
    xhr.onload = function () {
        ///get the data from the server
        if (xhr.status >= 200 && xhr.status < 300) {
            //only if request is ok and received the data
            let data = JSON.parse(this.response);
            console.log(data);
     let total = data.reduce((sum,f) => sum + f.population, 0);
     console.log(`The total population of all the countries is ${total}`);

         }
          else {
            ///run if the request is not successful
            console.log("Error");
        }
    };

    ///send the request
    xhr.send();
}


///////////expected output ////
/*
The total population of all the countries is 7777721563.
*/