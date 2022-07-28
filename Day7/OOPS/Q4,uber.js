class UberFare { //creating a class UberFare.
         constructor(baseRateFare,etaFare,upfrontdistanceFare,demandFare,bookingFee,surcharges,tollcharge,dynamicPricing,totalJourneyTime,vehicleTypeFare,afterRideDistance) {
            
            this._baseRateFare = baseRateFare;
            this._etaFare = etaFare;
            this._upfrontdistanceFare = upfrontdistanceFare;
            this._demandFare = demandFare;
            this._bookingFee = bookingFee;
            this._surcharges = surcharges;
            this._tollcharge = tollcharge;     
            this._dynamicPricing = dynamicPricing;
            this._totalJourneyTime = totalJourneyTime; 
            this._vehicleTypeFare = vehicleTypeFare; 
            this._afterRideDistance = afterRideDistance;
            
}
////creating Methods
UpfrontFares (){
    let fare = [this._baseRateFare,this._etaFare,this._upfrontdistanceFare,this._demandFare,this._bookingFee,this._surcharges,this._tollcharge,this._dynamicPricing,0,this._vehicleTypeFare,0]
    let sum = 0;
    for (let i=0; i<fare.length; i++) {
         sum += fare[i];
    }
        return sum;
}
postTripFare (){
    let Fare =[this._baseRateFare,this._etaFare,0,this._demandFare,this._bookingFee,this._surcharges,this._tollcharge,this._dynamicPricing,this._totalJourneyTime,this._vehicleTypeFare,this._afterRideDistance]
    let price = 0;
    for (let j = 0; j < Fare.length; j++){
         price += Fare[j];
    }
         return price;
}
}
//////creating objects

let SUV = new UberFare(24,14,60,5,2,0,8,6,6,32,60);
let Sedan = new UberFare(14,12,40,5,2,0,8,5,20,7,30);


//calling and printing the method with obj ref
console.log(SUV.UpfrontFares()); ///output 151
console.log(SUV.postTripFare());////output 157
console.log(Sedan.UpfrontFares());////output 93
console.log(Sedan.postTripFare());////output 103
