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
            Flags : π§πΉ

            debugger eval code:17:29

            Name : Federal Republic of Somalia
            Capital : Mogadishu
            Flags : πΈπ΄

            debugger eval code:17:29

            Name : Kingdom of the Netherlands
            Capital : Amsterdam
            Flags : π³π±

            debugger eval code:17:29

            Name : Republic of Tajikistan
            Capital : Dushanbe
            Flags : πΉπ―

            debugger eval code:17:29

            Name : Democratic Republic of Timor-Leste
            Capital : Dili
            Flags : πΉπ±

            debugger eval code:17:29

            Name : Lebanese Republic
            Capital : Beirut
            Flags : π±π§

            debugger eval code:17:29

            Name : Sint Maarten
            Capital : Philipsburg
            Flags : πΈπ½

            debugger eval code:17:29

            Name : Republic of Uganda
            Capital : Kampala
            Flags : πΊπ¬

            debugger eval code:17:29

            Name : Republic of Ghana
            Capital : Accra
            Flags : π¬π­

            debugger eval code:17:29

            Name : Republic of Albania
            Capital : Tirana
            Flags : π¦π±

            debugger eval code:17:29

            Name : Republic of Palau
            Capital : Ngerulmud
            Flags : π΅πΌ

            debugger eval code:17:29

            Name : Federated States of Micronesia
            Capital : Palikir
            Flags : π«π²

            debugger eval code:17:29

            Name : Country of CuraΓ§ao
            Capital : Willemstad
            Flags : π¨πΌ

            debugger eval code:17:29

            Name : Republic of Finland
            Capital : Helsinki
            Flags : π«π?

            debugger eval code:17:29

            Name : Bailiwick of Jersey
            Capital : Saint Helier
            Flags : π―πͺ

            debugger eval code:17:29

            Name : Republic of Namibia
            Capital : Windhoek
            Flags : π³π¦

            debugger eval code:17:29

            Name : Socialist Republic of Vietnam
            Capital : Hanoi
            Flags : π»π³

            debugger eval code:17:29

            Name : Antarctica
            Capital : undefined
            Flags : π¦πΆ

            debugger eval code:17:29

            Name : State of Palestine
            Capital : Ramallah
            Flags : π΅πΈ

            debugger eval code:17:29

            Name : Republic of Turkey
            Capital : Ankara
            Flags : πΉπ·

            debugger eval code:17:29

            Name : Republic of Moldova
            Capital : ChiΘinΔu
            Flags : π²π©

            debugger eval code:17:29

            Name : Federation of Saint Christopher and Nevis
            Capital : Basseterre
            Flags : π°π³

            debugger eval code:17:29

            Name : Commonwealth of Australia
            Capital : Canberra
            Flags : π¦πΊ

            debugger eval code:17:29

            Name : Japan
            Capital : Tokyo
            Flags : π―π΅

            debugger eval code:17:29

            Name : Republic of Croatia
            Capital : Zagreb
            Flags : π­π·

            debugger eval code:17:29

            Name : Burkina Faso
            Capital : Ouagadougou
            Flags : π§π«

            debugger eval code:17:29

            Name : Republic of Indonesia
            Capital : Jakarta
            Flags : π?π©

            debugger eval code:17:29

            Name : Turkmenistan
            Capital : Ashgabat
            Flags : πΉπ²

            debugger eval code:17:29

            Name : Republic of the Congo
            Capital : Brazzaville
            Flags : π¨π¬

            debugger eval code:17:29

            Name : Republic of Vanuatu
            Capital : Port Vila
            Flags : π»πΊ

            debugger eval code:17:29

            Name : Belize
            Capital : Belmopan
            Flags : π§πΏ

            debugger eval code:17:29

            Name : Federal Democratic Republic of Ethiopia
            Capital : Addis Ababa
            Flags : πͺπΉ

            debugger eval code:17:29

            Name : Republic of Honduras
            Capital : Tegucigalpa
            Flags : π­π³

            debugger eval code:17:29

            Name : Republic of Poland
            Capital : Warsaw
            Flags : π΅π±

            debugger eval code:17:29

            Name : Republic of Nauru
            Capital : Yaren
            Flags : π³π·

            debugger eval code:17:29

            Name : Territory of Norfolk Island
            Capital : Kingston
            Flags : π³π«

            debugger eval code:17:29

            Name : State of Qatar
            Capital : Doha
            Flags : πΆπ¦

            debugger eval code:17:29

            Name : Republic of Haiti
            Capital : Port-au-Prince
            Flags : π­πΉ

            debugger eval code:17:29

            Name : Oriental Republic of Uruguay
            Capital : Montevideo
            Flags : πΊπΎ

            debugger eval code:17:29

            Name : Republic of Kenya
            Capital : Nairobi
            Flags : π°πͺ

            debugger eval code:17:29

            Name : Republic of Equatorial Guinea
            Capital : Malabo
            Flags : π¬πΆ

            debugger eval code:17:29

            Name : Republic of Benin
            Capital : Porto-Novo
            Flags : π§π―

            debugger eval code:17:29

            Name : French Republic
            Capital : Paris
            Flags : π«π·

            debugger eval code:17:29

            Name : Kingdom of Thailand
            Capital : Bangkok
            Flags : πΉπ­

            debugger eval code:17:29

            Name : Guam
            Capital : HagΓ₯tΓ±a
            Flags : π¬πΊ

            debugger eval code:17:29

            Name : Saint Martin
            Capital : Marigot
            Flags : π²π«

            debugger eval code:17:29

            Name : Republic of India
            Capital : New Delhi
            Flags : π?π³

            debugger eval code:17:29

            Name : Hashemite Kingdom of Jordan
            Capital : Amman
            Flags : π―π΄

            debugger eval code:17:29

            Name : Republic of Costa Rica
            Capital : San JosΓ©
            Flags : π¨π·

            debugger eval code:17:29

            Name : Federal Democratic Republic of Nepal
            Capital : Kathmandu
            Flags : π³π΅

            debugger eval code:17:29

            Name : Republic of Cabo Verde
            Capital : Praia
            Flags : π¨π»

            debugger eval code:17:29

            Name : Republic of Trinidad and Tobago
            Capital : Port of Spain
            Flags : πΉπΉ

            debugger eval code:17:29

            Name : Republic of South Africa
            Capital : Pretoria,Bloemfontein,Cape Town
            Flags : πΏπ¦

            debugger eval code:17:29

            Name : Gabonese Republic
            Capital : Libreville
            Flags : π¬π¦

            debugger eval code:17:29

            Name : State of Eritrea
            Capital : Asmara
            Flags : πͺπ·

            debugger eval code:17:29

            Name : State of Israel
            Capital : Jerusalem
            Flags : π?π±

            debugger eval code:17:29

            Name : Federal Republic of Nigeria
            Capital : Abuja
            Flags : π³π¬

            debugger eval code:17:29

            Name : Kingdom of Norway
            Capital : Oslo
            Flags : π³π΄

            debugger eval code:17:29

            Name : French Polynesia
            Capital : PapeetΔ
            Flags : π΅π«

            debugger eval code:17:29

            Name : Kingdom of Sweden
            Capital : Stockholm
            Flags : πΈπͺ

            debugger eval code:17:29

            Name : Republic of Iraq
            Capital : Baghdad
            Flags : π?πΆ

            debugger eval code:17:29

            Name : Pitcairn Group of Islands
            Capital : Adamstown
            Flags : π΅π³

            debugger eval code:17:29

            Name : Tokelau
            Capital : Fakaofo
            Flags : πΉπ°

            debugger eval code:17:29

            Name : Republic of Cameroon
            Capital : YaoundΓ©
            Flags : π¨π²

            debugger eval code:17:29

            Name : People's Republic of China
            Capital : Beijing
            Flags : π¨π³

            debugger eval code:17:29

            Name : United Arab Emirates
            Capital : Abu Dhabi
            Flags : π¦πͺ

            debugger eval code:17:29

            Name : Republic of CΓ΄te d'Ivoire
            Capital : Yamoussoukro
            Flags : π¨π?

            debugger eval code:17:29

            Name : Republic of Malta
            Capital : Valletta
            Flags : π²πΉ

            debugger eval code:17:29

            Name : Mongolia
            Capital : Ulan Bator
            Flags : π²π³

            debugger eval code:17:29

            Name : Republic of Guatemala
            Capital : Guatemala City
            Flags : π¬πΉ

            debugger eval code:17:29

            Name : Czech Republic
            Capital : Prague
            Flags : π¨πΏ

            debugger eval code:17:29

            Name : Hungary
            Capital : Budapest
            Flags : π­πΊ

            debugger eval code:17:29

            Name : Svalbard og Jan Mayen
            Capital : Longyearbyen
            Flags : πΈπ―
            */