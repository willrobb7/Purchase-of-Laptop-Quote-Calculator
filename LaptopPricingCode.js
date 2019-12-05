function onSubmit() {
    var purcasePrice, purchaseDate, currentDate, diff, mac, dell, mult1, mult2, mult3, mult4, mult5;

    var typeOfLaptop = document.getElementById("TypeOfLaptop").value;
    purchasePrice = document.getElementById("purchasePrice").value;
    purchaseDate = document.getElementById("purchaseDate").value;
    currentDate = Date.now()
    purchaseDate = new Date(purchaseDate).getTime()
    diff = (((((currentDate - purchaseDate) / 1000) / 60) / 60) / 24) / 30
    diff = Math.round(diff)
    
    if (typeOfLaptop === "mac") {
        mult1 = 0.525;
        mult2 = 0.315;
        mult3 = 0.126;
        mult4 = 0.0882;
        mult5 = 0.06174;
    } else if (typeOfLaptop === "dell") {
        mult1 = 0.375;
        mult2 = 0.1875;
        mult3 = 0.09375;
        mult4 = 0.046875;
        mult5 = 0.0234375;
    }

    var obj = {
        quotePrice: purchasePrice * mult1,
        quotePrice2: purchasePrice * mult2,
        quotePrice3: purchasePrice * mult3,
        quotePrice4: purchasePrice * mult4,
        quotePrice5: purchasePrice * mult5,
        monthlyDeductions1224: null,
        monthlyDeductions2436: null,
        monthlyDeductions3648: null,
        monthlyDeductions48Plus: null,
        monthsToTake: diff - 12,
        monthsToTake2: diff - 24,
        monthsToTake3: diff - 36,
        monthsToTake4: diff - 48
    }

    obj.monthlyDeductions1224 = (((obj.quotePrice) - (obj.quotePrice2)) / 12.0)
    obj.monthlyDeductions2436 = (((obj.quotePrice2) - (obj.quotePrice3)) / 12.0)
    obj.monthlyDeductions3648 = (((obj.quotePrice3) - (obj.quotePrice4)) / 12.0)
    obj.monthlyDeductions48Plus = (((obj.quotePrice4) - (obj.quotePrice5)) / 12.0)

    doStuff(diff, mult1, mult2, mult3, mult4, mult5, obj)

}


function doStuff(diff, mult1, mult2, mult3, mult4, mult5, obj) {

    if (diff <= 12) {
        var price = obj.quotePrice
        price = Math.round(price)
        document.getElementById('Results').innerHTML = "The quoted price for this laptop is £" + price


    } else if (diff > 12 && diff <= 24) {
        var price = (obj.quotePrice - (obj.monthlyDeductions1224 * obj.monthsToTake))
        price = Math.round(price)
        document.getElementById('Results').innerHTML = "The quoted price for this laptop is £" + price


    } else if (diff > 24 && diff <= 36) {
        var price = (obj.quotePrice2 - (obj.monthlyDeductions2436 * obj.monthsToTake2))
        price = Math.round(price)
        document.getElementById('Results').innerHTML = "The quoted price for this laptop is £" + price


    } else if (diff > 36 && diff <= 48) {
        var price = (obj.quotePrice3 - (obj.monthlyDeductions3648 * obj.monthsToTake3))
        price = Math.round(price)
        document.getElementById('Results').innerHTML = "The quoted price for this laptop is £" + price


    } else {
       
        var price = (obj.quotePrice4 - (obj.monthlyDeductions48Plus * obj.monthsToTake4))
        price = price = Math.round(price)
        document.getElementById('Results').innerHTML = "The quoted price for this laptop is £" + price


    }

}