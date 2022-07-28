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
        let noCurrencyFiltered = data.filter((newData) => (newData.currencies !== undefined))
        let USCurrency = noCurrencyFiltered.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
        console.log(USCurrency.name.official)
        
        }  
    else {
        ///run if the request is not successful
        console.log("Error");
    }}
///send the request
xhr.send();


////////expected output/
/*
'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
1: {name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
2: {name: 'Virgin Islands (British)', topLevelDomain: Array(1), alpha2Code: 'VG', alpha3Code: 'VGB', callingCodes: Array(1), …}
3: {name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
4: {name: 'Ecuador', topLevelDomain: Array(1), alpha2Code: 'EC', alpha3Code: 'ECU', callingCodes: Array(1), …}
5: {name: 'El Salvador', topLevelDomain: Array(1), alpha2Code: 'SV', alpha3Code: 'SLV', callingCodes: Array(1), …}
6: {name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
7: {name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
8: {name: 'Micronesia (Federated States of)', topLevelDomain: Array(1), alpha2Code: 'FM', alpha3Code: 'FSM', callingCodes: Array(1), …}
9: {name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
10: {name: 'Palau', topLevelDomain: Array(1), alpha2Code: 'PW', alpha3Code: 'PLW', callingCodes: Array(1), …}
11: {name: 'Puerto Rico', topLevelDomain: Array(1), alpha2Code: 'PR', alpha3Code: 'PRI', callingCodes: Array(1), …}
12: {name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
13: {name: 'United States of America', topLevelDomain: Array(1), alpha2Code: 'US', alpha3Code: 'USA', callingCodes: Array(1), …}
length: 14
*/