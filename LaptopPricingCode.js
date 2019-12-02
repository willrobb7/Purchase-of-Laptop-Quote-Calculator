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
// var currentDate = Date.now()


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

var currentDate = Date.now()


function onSubmit() {

    var purchaseDate = document.getElementById("purchaseDateMac").value;
    var purchasePrice = document.getElementById("purchasePriceMac").value;
    var currentDate = Date.now()

    purchaseDate = new Date(purchaseDate).getTime()
    // console.log(purchaseDate)

    var diff = (((((currentDate - purchaseDate) / 1000) / 60) / 60) / 24) / 30
    diff = Math.round(diff)
    console.log(diff)
    var quotePrice = purchasePrice * 0.525
    var quotePrice2 = purchasePrice * 0.315
    var quotePrice3 = purchasePrice * 0.126
    var quotePrice4 = purchasePrice * 0.0882
    var monthlyDeductions1224 = (((purchasePrice * 0.525) - (purchasePrice * 0.315)) / 12)
    var monthlyDeductions2436 = (((purchasePrice * 0.315) - (purchasePrice * 0.126)) / 12)
    var monthlyDeductions3648 = (((purchasePrice * 0.126) - (purchasePrice * 0.0882)) / 12)
    var monthlyDeductions48Plus = (((purchasePrice * 0.0882) - (purchasePrice * 0.06174)) / 12)

    // console.log(quotePrice, monthlyDeductions1224)
    // console.log(quotePrice2, monthlyDeductions2436)
    if (diff <= 12) {
        console.log(quotePrice)
    } else if (diff > 12 && diff <= 24) {
        var monthsToTake = diff - 12
        console.log(monthsToTake)
        console.log(quotePrice - (monthlyDeductions1224 * monthsToTake))
        // console.log(1)
    } else if (diff > 24 && diff <= 36) {
        var monthsToTake2 = diff - 24
        console.log(monthsToTake2)
        console.log(quotePrice2 - (monthlyDeductions2436 * monthsToTake2))
        // console.log(2)
    } else if (diff > 36 && diff <= 48) {
        var monthsToTake3 = diff - 36
        console.log(monthsToTake3)
        console.log(quotePrice3 - (monthlyDeductions3648 * monthsToTake3))
    } else {
        var monthsToTake4 = diff - 48
        console.log (monthsToTake4)
        console.log(quotePrice4 - (monthlyDeductions48Plus * monthsToTake4))
    }

}
// var purchasePrice = document.getElementById("purchasePriceMac").value;
// var currentDate = Date.now()




























