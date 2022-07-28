///1. set up our http request

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
            data.forEach(function Details(countries) {
                    console.log (`
            Name : ${countries.name.official}
            Capital : ${countries.capital}
            Flag: ${countries.flag}

            `);
                });   
        }
        else {
            ///run if the request is not successful
            console.log("Error");
        }
    }
    ///send the request
    xhr.send();


    //////Expected Output/// *Flags are shown in the ouput of browser but here while copying the output the emoji is not shown.
    /*
    
            Name : Kingdom of Bhutan
            Capital : Thimphu
            Flags : 🇧🇹

            debugger eval code:17:29

            Name : Federal Republic of Somalia
            Capital : Mogadishu
            Flags : 🇸🇴

            debugger eval code:17:29

            Name : Kingdom of the Netherlands
            Capital : Amsterdam
            Flags : 🇳🇱

            debugger eval code:17:29

            Name : Republic of Tajikistan
            Capital : Dushanbe
            Flags : 🇹🇯

            debugger eval code:17:29

            Name : Democratic Republic of Timor-Leste
            Capital : Dili
            Flags : 🇹🇱

            debugger eval code:17:29

            Name : Lebanese Republic
            Capital : Beirut
            Flags : 🇱🇧

            debugger eval code:17:29

            Name : Sint Maarten
            Capital : Philipsburg
            Flags : 🇸🇽

            debugger eval code:17:29

            Name : Republic of Uganda
            Capital : Kampala
            Flags : 🇺🇬

            debugger eval code:17:29

            Name : Republic of Ghana
            Capital : Accra
            Flags : 🇬🇭

            debugger eval code:17:29

            Name : Republic of Albania
            Capital : Tirana
            Flags : 🇦🇱

            debugger eval code:17:29

            Name : Republic of Palau
            Capital : Ngerulmud
            Flags : 🇵🇼

            debugger eval code:17:29

            Name : Federated States of Micronesia
            Capital : Palikir
            Flags : 🇫🇲

            debugger eval code:17:29

            Name : Country of Curaçao
            Capital : Willemstad
            Flags : 🇨🇼

            debugger eval code:17:29

            Name : Republic of Finland
            Capital : Helsinki
            Flags : 🇫🇮

            debugger eval code:17:29

            Name : Bailiwick of Jersey
            Capital : Saint Helier
            Flags : 🇯🇪

            debugger eval code:17:29

            Name : Republic of Namibia
            Capital : Windhoek
            Flags : 🇳🇦

            debugger eval code:17:29

            Name : Socialist Republic of Vietnam
            Capital : Hanoi
            Flags : 🇻🇳

            debugger eval code:17:29

            Name : Antarctica
            Capital : undefined
            Flags : 🇦🇶

            debugger eval code:17:29

            Name : State of Palestine
            Capital : Ramallah
            Flags : 🇵🇸

            debugger eval code:17:29

            Name : Republic of Turkey
            Capital : Ankara
            Flags : 🇹🇷

            debugger eval code:17:29

            Name : Republic of Moldova
            Capital : Chișinău
            Flags : 🇲🇩

            debugger eval code:17:29

            Name : Federation of Saint Christopher and Nevis
            Capital : Basseterre
            Flags : 🇰🇳

            debugger eval code:17:29

            Name : Commonwealth of Australia
            Capital : Canberra
            Flags : 🇦🇺

            debugger eval code:17:29

            Name : Japan
            Capital : Tokyo
            Flags : 🇯🇵

            debugger eval code:17:29

            Name : Republic of Croatia
            Capital : Zagreb
            Flags : 🇭🇷

            debugger eval code:17:29

            Name : Burkina Faso
            Capital : Ouagadougou
            Flags : 🇧🇫

            debugger eval code:17:29

            Name : Republic of Indonesia
            Capital : Jakarta
            Flags : 🇮🇩

            debugger eval code:17:29

            Name : Turkmenistan
            Capital : Ashgabat
            Flags : 🇹🇲

            debugger eval code:17:29

            Name : Republic of the Congo
            Capital : Brazzaville
            Flags : 🇨🇬

            debugger eval code:17:29

            Name : Republic of Vanuatu
            Capital : Port Vila
            Flags : 🇻🇺

            debugger eval code:17:29

            Name : Belize
            Capital : Belmopan
            Flags : 🇧🇿

            debugger eval code:17:29

            Name : Federal Democratic Republic of Ethiopia
            Capital : Addis Ababa
            Flags : 🇪🇹

            debugger eval code:17:29

            Name : Republic of Honduras
            Capital : Tegucigalpa
            Flags : 🇭🇳

            debugger eval code:17:29

            Name : Republic of Poland
            Capital : Warsaw
            Flags : 🇵🇱

            debugger eval code:17:29

            Name : Republic of Nauru
            Capital : Yaren
            Flags : 🇳🇷

            debugger eval code:17:29

            Name : Territory of Norfolk Island
            Capital : Kingston
            Flags : 🇳🇫

            debugger eval code:17:29

            Name : State of Qatar
            Capital : Doha
            Flags : 🇶🇦

            debugger eval code:17:29

            Name : Republic of Haiti
            Capital : Port-au-Prince
            Flags : 🇭🇹

            debugger eval code:17:29

            Name : Oriental Republic of Uruguay
            Capital : Montevideo
            Flags : 🇺🇾

            debugger eval code:17:29

            Name : Republic of Kenya
            Capital : Nairobi
            Flags : 🇰🇪

            debugger eval code:17:29

            Name : Republic of Equatorial Guinea
            Capital : Malabo
            Flags : 🇬🇶

            debugger eval code:17:29

            Name : Republic of Benin
            Capital : Porto-Novo
            Flags : 🇧🇯

            debugger eval code:17:29

            Name : French Republic
            Capital : Paris
            Flags : 🇫🇷

            debugger eval code:17:29

            Name : Kingdom of Thailand
            Capital : Bangkok
            Flags : 🇹🇭

            debugger eval code:17:29

            Name : Guam
            Capital : Hagåtña
            Flags : 🇬🇺

            debugger eval code:17:29

            Name : Saint Martin
            Capital : Marigot
            Flags : 🇲🇫

            debugger eval code:17:29

            Name : Republic of India
            Capital : New Delhi
            Flags : 🇮🇳

            debugger eval code:17:29

            Name : Hashemite Kingdom of Jordan
            Capital : Amman
            Flags : 🇯🇴

            debugger eval code:17:29

            Name : Republic of Costa Rica
            Capital : San José
            Flags : 🇨🇷

            debugger eval code:17:29

            Name : Federal Democratic Republic of Nepal
            Capital : Kathmandu
            Flags : 🇳🇵

            debugger eval code:17:29

            Name : Republic of Cabo Verde
            Capital : Praia
            Flags : 🇨🇻

            debugger eval code:17:29

            Name : Republic of Trinidad and Tobago
            Capital : Port of Spain
            Flags : 🇹🇹

            debugger eval code:17:29

            Name : Republic of South Africa
            Capital : Pretoria,Bloemfontein,Cape Town
            Flags : 🇿🇦

            debugger eval code:17:29

            Name : Gabonese Republic
            Capital : Libreville
            Flags : 🇬🇦

            debugger eval code:17:29

            Name : State of Eritrea
            Capital : Asmara
            Flags : 🇪🇷

            debugger eval code:17:29

            Name : State of Israel
            Capital : Jerusalem
            Flags : 🇮🇱

            debugger eval code:17:29

            Name : Federal Republic of Nigeria
            Capital : Abuja
            Flags : 🇳🇬

            debugger eval code:17:29

            Name : Kingdom of Norway
            Capital : Oslo
            Flags : 🇳🇴

            debugger eval code:17:29

            Name : French Polynesia
            Capital : Papeetē
            Flags : 🇵🇫

            debugger eval code:17:29

            Name : Kingdom of Sweden
            Capital : Stockholm
            Flags : 🇸🇪

            debugger eval code:17:29

            Name : Republic of Iraq
            Capital : Baghdad
            Flags : 🇮🇶

            debugger eval code:17:29

            Name : Pitcairn Group of Islands
            Capital : Adamstown
            Flags : 🇵🇳

            debugger eval code:17:29

            Name : Tokelau
            Capital : Fakaofo
            Flags : 🇹🇰

            debugger eval code:17:29

            Name : Republic of Cameroon
            Capital : Yaoundé
            Flags : 🇨🇲

            debugger eval code:17:29

            Name : People's Republic of China
            Capital : Beijing
            Flags : 🇨🇳

            debugger eval code:17:29

            Name : United Arab Emirates
            Capital : Abu Dhabi
            Flags : 🇦🇪

            debugger eval code:17:29

            Name : Republic of Côte d'Ivoire
            Capital : Yamoussoukro
            Flags : 🇨🇮

            debugger eval code:17:29

            Name : Republic of Malta
            Capital : Valletta
            Flags : 🇲🇹

            debugger eval code:17:29

            Name : Mongolia
            Capital : Ulan Bator
            Flags : 🇲🇳

            debugger eval code:17:29

            Name : Republic of Guatemala
            Capital : Guatemala City
            Flags : 🇬🇹

            debugger eval code:17:29

            Name : Czech Republic
            Capital : Prague
            Flags : 🇨🇿

            debugger eval code:17:29

            Name : Hungary
            Capital : Budapest
            Flags : 🇭🇺

            debugger eval code:17:29

            Name : Svalbard og Jan Mayen
            Capital : Longyearbyen
            Flags : 🇸🇯
            */