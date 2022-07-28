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
            function Asiancountries(countries) {
                if (countries.region === "Asia") {
                    console.log (`
            Name : ${countries.name.official}
            `);
                }
            }
            let asean = data.filter(Asiancountries);
            console.log(asean);
        }
        else {
            ///run if the request is not successful
            console.log("Error");
        }
    };

    ///send the request
    xhr.send();
}


//////output //////
/* 
 
            Name : Georgia
            

            Name : Democratic Socialist Republic of Sri Lanka
            

            Name : Sultanate of Oman
            

            Name : Republic of the Maldives
            

            Name : Nation of Brunei, Abode of Peace
            

            Name : Malaysia
            

            Name : Republic of China (Taiwan)
            

            Name : Kingdom of Saudi Arabia
            

            Name : Republic of Singapore
            

            Name : Lao People's Democratic Republic
            

            Name : Syrian Arab Republic
            

            Name : Republic of Uzbekistan
            

            Name : People's Republic of Bangladesh
            

            Name : Republic of the Philippines
            

            Name : Islamic Republic of Iran
            

            Name : Islamic Republic of Afghanistan
            

            Name : Republic of Azerbaijan
            

            Name : Kingdom of Cambodia
            

            Name : Republic of Armenia
            

            Name : Macao Special Administrative Region of the People's Republic of China
            

            Name : Kingdom of Bahrain
            

            Name : Republic of Yemen
            

            Name : Islamic Republic of Pakistan
            

            Name : Republic of the Union of Myanmar
            

            Name : Republic of Korea
            

            Name : State of Kuwait
            

            Name : Hong Kong Special Administrative Region of the People's Republic of China
            

            Name : Kyrgyz Republic
            

            Name : Republic of Kazakhstan
            

            Name : Democratic People's Republic of Korea
            

            Name : Kingdom of Bhutan
            

            Name : Republic of Tajikistan
            

            Name : Democratic Republic of Timor-Leste
            

            Name : Lebanese Republic
            

            Name : Socialist Republic of Vietnam
            

            Name : State of Palestine
            

            Name : Republic of Turkey
            

            Name : Japan
            

            Name : Republic of Indonesia
            

            Name : Turkmenistan
            

            Name : State of Qatar
            

            Name : Kingdom of Thailand
            

            Name : Republic of India
            

            Name : Hashemite Kingdom of Jordan
            

            Name : Federal Democratic Republic of Nepal
            

            Name : State of Israel
            

            Name : Republic of Iraq
            

            Name : People's Republic of China
            

            Name : United Arab Emirates
            

            Name : Mongolia

*/
