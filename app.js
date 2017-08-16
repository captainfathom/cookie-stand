'use strict';
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieStore (name, customersHourMin, customersHourMax, openHours, cookiesPurchasedAvg) {
  this.name = name;
  this.customersHourMin = customersHourMin;
  this.customersHourMax = customersHourMax;
  this.openHours = openHours;
  this.cookiesPurchasedAvg = cookiesPurchasedAvg;
  this.hourlyPurchaseLog = [];
  this.dailySalesTotal = 0;
  this.customersHour = function () {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  };
  this.cookiesPurchasedHour = function () {
    this.hourlyPurchaseLog = [];
    for (var i = 0; i < this.openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  };
  this.dailySales = function () {
    this.dailySalesTotal = 0;
    for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
      this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
    }
  };
  this.dailySalesReport = function () {
    var content = document.getElementById('table');
    var store = document.createElement('tr');
    store.innerText = this.name;
    content.appendChild(store);
    for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
      var printSales = document.createElement('td');
      printSales.innerText = this.hourlyPurchaseLog[i];
      store.appendChild(printSales);
    };
    var theTotal = document.createElement('td');
    theTotal.innerText = this.dailySalesTotal;
    store.appendChild(theTotal);
    // var content = document.getElementsById('table');
    // var rows = document.createElement(tr);
    // rows.id = name;
    // rows.innerText = name;
    // for (var i = 0; i < this.openHours.length; i++) {
    //   var data = document.createElement('td');
    //   data.innerText = this.openHours[i];
    //   table.appendChild(rows);
    // };

    // var total = document.createElement('li');
    // total.innerText = 'Total: ' + this.dailySalesTotal + ' cookies.';
    // list.appendChild(total);
  };
};

var firstPike = new CookieStore ('1st and Pike', 23, 65, openHours, 6.3);
var seaTac = new CookieStore ('Sea Tac Airport', 3, 24, openHours, 1.2);
var seattleCenter = new CookieStore ('Seattle Center', 11, 38, openHours, 3.7);
var capitolHill = new CookieStore ('Capitol Hill', 20, 38, openHours, 2.3);
var alki = new CookieStore ('Alki', 2, 16, openHours, 4.6);

var storeList = [firstPike, seaTac, seattleCenter, capitolHill, alki];

var createTable = function () {
  var location = document.getElementById('stores');
  var table = document.createElement('table');
  location.appendChild(table);
  table.id = 'table';
  var blank = document.createElement('th');
  table.appendChild(blank);
  for (var i = 0; i < openHours.length; i++) {
    var time = document.createElement('th');
    time.innerText = openHours[i];
    table.appendChild(time);
  };
  var grandTotal = document.createElement('th');
  grandTotal.innerText = 'Total';
  table.appendChild(grandTotal);
};
createTable();

// for (var i = 0; i < storeList.length; i++) {
//   storeList[i].dailySalesReport;
// };
firstPike.customersHour();
firstPike.cookiesPurchasedHour();
firstPike.dailySales();
firstPike.dailySalesReport();
seaTac.customersHour();
seaTac.cookiesPurchasedHour();
seaTac.dailySales();
seaTac.dailySalesReport();
seattleCenter.customersHour();
seattleCenter.cookiesPurchasedHour();
seattleCenter.dailySales();
seattleCenter.dailySalesReport();
capitolHill.customersHour();
capitolHill.cookiesPurchasedHour();
capitolHill.dailySales();
capitolHill.dailySalesReport();
alki.customersHour();
alki.cookiesPurchasedHour();
alki.dailySales();
alki.dailySalesReport();

var subTotals = document.createElement('tr');
subTotals.innerText = 'Daily Totals';
table.appendChild(subTotals);

//my hiddeous attempt at totalling each column. still not sure why the for loops didn't work
var columnOne = document.createElement('td');
var sumOne = 0;
for (var a = 0; a < storeList.length; a++) {
  sumOne += storeList[a].hourlyPurchaseLog[0];
}
columnOne.innerText = sumOne;
subTotals.appendChild(columnOne);

var columnTwo = document.createElement('td');
var sumTwo = 0;
for (var b = 0; b < storeList.length; b++) {
  sumTwo += storeList[b].hourlyPurchaseLog[1];
}
columnTwo.innerText = sumTwo;
subTotals.appendChild(columnTwo);

var columnThree = document.createElement('td');
var sumThree = 0;
for (var c = 0; c < storeList.length; c++) {
  sumThree += storeList[c].hourlyPurchaseLog[2];
}
columnThree.innerText = sumThree;
subTotals.appendChild(columnThree);

var columnFour = document.createElement('td');
var sumFour = 0;
for (var d = 0; d < storeList.length; d++) {
  sumFour += storeList[d].hourlyPurchaseLog[3];
}
columnFour.innerText = sumFour;
subTotals.appendChild(columnFour);

var columnFive = document.createElement('td');
var sumFive = 0;
for (var e = 0; e < storeList.length; e++) {
  sumFive += storeList[e].hourlyPurchaseLog[4];
}
columnFive.innerText = sumFive;
subTotals.appendChild(columnFive);

var columnSix = document.createElement('td');
var sumSix = 0;
for (var f = 0; f < storeList.length; f++) {
  sumSix += storeList[f].hourlyPurchaseLog[5];
}
columnSix.innerText = sumSix;
subTotals.appendChild(columnSix);

var columnSeven = document.createElement('td');
var sumSeven = 0;
for (var g = 0; g < storeList.length; g++) {
  sumSeven += storeList[g].hourlyPurchaseLog[6];
}
columnSeven.innerText = sumSeven;
subTotals.appendChild(columnSeven);

var columnEight = document.createElement('td');
var sumEight = 0;
for (var h = 0; h < storeList.length; h++) {
  sumEight += storeList[h].hourlyPurchaseLog[7];
}
columnEight.innerText = sumEight;
subTotals.appendChild(columnEight);

var columnNine = document.createElement('td');
var sumNine = 0;
for (var k = 0; k < storeList.length; k++) {
  sumNine += storeList[k].hourlyPurchaseLog[8];
}
columnNine.innerText = sumNine;
subTotals.appendChild(columnNine);

var columnTen = document.createElement('td');
var sumTen = 0;
for (var l = 0; l < storeList.length; l++) {
  sumTen += storeList[l].hourlyPurchaseLog[9];
}
columnTen.innerText = sumTen;
subTotals.appendChild(columnTen);

var columnEleven = document.createElement('td');
var sumEleven = 0;
for (var m = 0; m < storeList.length; m++) {
  sumEleven += storeList[m].hourlyPurchaseLog[10];
}
columnEleven.innerText = sumEleven;
subTotals.appendChild(columnEleven);

var columnTwelve = document.createElement('td');
var sumTwelve = 0;
for (var n = 0; n < storeList.length; n++) {
  sumTwelve += storeList[n].hourlyPurchaseLog[11];
}
columnTwelve.innerText = sumTwelve;
subTotals.appendChild(columnTwelve);

var columnThirteen = document.createElement('td');
var sumThirteen = 0;
for (var o = 0; o < storeList.length; o++) {
  sumThirteen += storeList[o].hourlyPurchaseLog[12];
}
columnThirteen.innerText = sumThirteen;
subTotals.appendChild(columnThirteen);

var columnFourteen = document.createElement('td');
var sumFourteen = 0;
for (var p = 0; p < storeList.length; p++) {
  sumFourteen += storeList[p].hourlyPurchaseLog[13];
}
columnFourteen.innerText = sumFourteen;
subTotals.appendChild(columnFourteen);

// var grandTotal = 0;
//
// var dailyStoreTotal = function () {
//   for (var i = 0; i < openHours.length; i++) {
//     var hourlyTotal = 0;
//     console.log(hourlyTotal);
//     for (var j = 0; j < storeList.lenth; j++) {
//       hourlyTotal += storeList[j].hourlyPurchaseLog[i];
//     }
//     var columnTotal = document.createElement('td');
//     columnTotal.innerText = hourlyTotal;
//     subTotals.appendChild(columnTotal);
//     grandTotal = grandTotal + hourlyTotal;
//   }
// };
// dailyStoreTotal();

var theBigTotes = document.createElement('td');
var grandTotal = 0;
for (var q = 0; q < storeList.length; q++) {
  grandTotal += storeList[q].dailySalesTotal;
}
theBigTotes.innerText = grandTotal;
subTotals.appendChild(theBigTotes);
