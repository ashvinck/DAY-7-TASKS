///1. set up our http request
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
            function Population(countries) {
                if (countries.population < 200000) {
                    console.log (`
            Name : ${countries.name.official}
            `);
                }
            }
            let lesspopulated = data.filter(Population);
            return(lesspopulated);
        }
        else {
            ///run if the request is not successful
            console.log("Error");
        }
    };

    ///send the request
    xhr.send();
}


//////expected output

/*

            Name : Greenland
            

            Name : Independent State of Samoa
            

            Name : Virgin Islands
            

            Name : Commonwealth of the Northern Mariana Islands
            

            Name : Republic of San Marino
            

            Name : American Samoa
            

            Name : Anguilla
            

            Name : Antigua and Barbuda
            

            Name : Territory of Christmas Island
            

            Name : Collectivity of Saint Barthélemy
            

            Name : Commonwealth of Dominica
            

            Name : Principality of Andorra
            

            Name : Saint Vincent and the Grenadines
            

            Name : Faroe Islands
            

            Name : Vatican City State
            

            Name : Cayman Islands
            

            Name : Tuvalu
            

            Name : United States Minor Outlying Islands
            

            Name : Republic of the Marshall Islands
            

            Name : Turks and Caicos Islands
            

            Name : Principality of Liechtenstein
            

            Name : Territory of the Wallis and Futuna Islands
            

            Name : Montserrat
            

            Name : Gibraltar
            

            Name : Aruba
            

            Name : Saint Helena, Ascension and Tristan da Cunha
            

            Name : Grenada
            

            Name : Falkland Islands
            

            Name : Bailiwick of Guernsey
            

            Name : Bouvet Island
            

            Name : Territory of the French Southern and Antarctic Lands
            

            Name : Bonaire, Sint Eustatius and Saba
            

            Name : Virgin Islands of the United States
            

            Name : Cook Islands
            

            Name : Principality of Monaco
            

            Name : Niue
            

            Name : British Indian Ocean Territory
            

            Name : Saint Lucia
            

            Name : Republic of Seychelles
            

            Name : Bermuda
            

            Name : Saint Pierre and Miquelon
            

            Name : South Georgia and the South Sandwich Islands
            

            Name : Åland Islands
            

            Name : Independent and Sovereign Republic of Kiribati
            

            Name : Isle of Man
            

            Name : Heard Island and McDonald Islands
            

            Name : Kingdom of Tonga
            

            Name : Territory of the Cocos (Keeling) Islands
            

            Name : Sint Maarten
            

            Name : Republic of Palau
            

            Name : Federated States of Micronesia
            

            Name : Country of Curaçao
            

            Name : Bailiwick of Jersey
            

            Name : Antarctica
            

            Name : Federation of Saint Christopher and Nevis
            

            Name : Republic of Nauru
            

            Name : Territory of Norfolk Island
            

            Name : Guam
            

            Name : Saint Martin
            

            Name : Pitcairn Group of Islands
            

            Name : Tokelau
            

            Name : Svalbard og Jan Mayen
            */