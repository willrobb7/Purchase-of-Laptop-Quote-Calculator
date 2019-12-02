// var currentDay = function(sp){
// today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //As January is 0.
// var yyyy = today.getFullYear();

// if(dd<10) dd='0'+dd;
// if(mm<10) mm='0'+mm;
// return (mm+sp+dd+sp+yyyy);
// };
// console.log(currentDay('/'));
// console.log(Date.now())

//  var purchaseDate = {pDate: parseInt(document.getElementById("purchaseDateMac").value) };
var currentDate = Date.now()


// function calcAge(){
//     // var purchaseDate = {pDate: parseInt(document.getElementById("purchaseDateMac").value) };
//     // var currentDate = Date.now()
//     // console.log(currentDate)
// }

// console.log(currentDate)
// var parsedUnixTime = new Date('24th January 2017').getUnixTime();
// console.log(parsedUnixTime)



// Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
// if(!Date.now) Date.now = function() { return new Date(); }
// Date.time = function() { return Date.now().getUnixTime(); }



// var someDate =new Date('Wed, 07 Jun 2017 12:00:00 GMT');
// var buyDate = someDate.getUnixTime();
// var sellDate   = Date.now();

// console.log(buyDate)

// console.log(quotePrice)

// var laptop = {
//     quote: quotePrice =purchasePrice * 0.525,
//     quote2: quotePrice2 = (quotePrice) - ((((quotePrice*0.75) * (quotePrice * 0.525)) /12) * monthsToTake),
// };
//         var quotePrice2 = (quotePrice) - ((((quotePrice*0.75) * (quotePrice * 0.525)) /12) * monthsToTake)
//         console.log(laptop.quote2)



function onSubmit() {

    var purchaseDate = document.getElementById("purchaseDateMac").value;
    var purchasePrice = document.getElementById("purchasePriceMac").value;
    var currentDate = Date.now()

    purchaseDate = new Date(purchaseDate).getTime()
    // console.log(purchaseDate)

    var diff = (((((currentDate - purchaseDate) / 1000) / 60) / 60) / 24) / 30
    diff = Math.round(diff)
    console.log(diff)
    var quotePrice =purchasePrice * 0.525
    var monthlyDeductions1224 = (((purchasePrice * 0.525)-(purchasePrice * 0.315))/12)
    console.log (quotePrice , monthlyDeductions1224)
    if (diff <= 12) {
        console.log(quotePrice)
    } else if (12 < diff <= 24) {
        var monthsToTake = diff - 12
        console.log(monthsToTake)
        console.log(quotePrice - (monthlyDeductions1224 * monthsToTake))


    } else {

    }

    // console.log(purchasePrice)
   
}
// var purchasePrice = document.getElementById("purchasePriceMac").value;
// var currentDate = Date.now()




























