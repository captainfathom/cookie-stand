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
    var location = document.getElementById('firstpike');
    var name = document.createElement('h2');
    name.innerText = this.name;
    location.appendChild(name);
    var list = document.createElement('ul');
    location.appendChild(list);
    for (var i = 0; i < this.openHours.length; i++) {
      var sales = document.createElement('li');
      sales.innerText = this.openHours[i] + ': ' + Math.round(this.hourlyPurchaseLog[i]) + ' cookies.';
      list.appendChild(sales);
    };
    var total = document.createElement('li');
    total.innerText = 'Total: ' + this.dailySalesTotal + ' cookies.';
    list.appendChild(total);
  };
};

var firstPike = new CookieStore ('1st and Pike', 23, 65, openHours, 6.3);
var seaTac = new CookieStore ('Sea Tac Airport', 3, 24, openHours, 1.2);
var seattleCenter = new CookieStore ('Seattle Center', 11, 38, openHours, 3.7);
var capitolHill = new CookieStore ('Capitol Hill', 20, 38, openHours, 2.3);
var alki = new CookieStore ('Alki', 2, 16, openHours, 4.6);

// var storeList = [firstPike, seaTac, seattleCenter, capitolHill, alki]

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
//objects from former part of assignment. just here for reference.
// var firstPike = {
//   name: '1st and Pike',
//   customersHourMin: 23,
//   customersHourMax: 65,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   customersHour: function() {
//     return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
//   },
//   cookiesPurchasedAvg: 6.3,
//   hourlyPurchaseLog: [],
//   dailySalesTotal: 0,
//   cookiesPurchasedHour: function() {
//     this.hourlyPurchaseLog = [];
//     for (var i = 0; i < this.openHours.length; i++) {
//       var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
//       this.hourlyPurchaseLog.push(product);
//     }
//   },
//   dailySales: function () {
//     this.dailySalesTotal = 0;
//     for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
//       this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
//     }
//   },
//   dailySalesReport: function() {
//     var location = document.getElementById('firstpike');
//     var name = document.createElement('h2');
//     name.innerText = this.name;
//     location.appendChild(name);
//     var list = document.createElement('ul');
//     location.appendChild(list);
//     for (var i = 0; i < this.openHours.length; i++) {
//       var sales = document.createElement('li');
//       sales.innerText = this.openHours[i] + ': ' + Math.round(this.hourlyPurchaseLog[i]) + ' cookies.';
//       list.appendChild(sales);
//     };
//     var total = document.createElement('li');
//     total.innerText = 'Total: ' + this.dailySalesTotal + ' cookies.';
//     list.appendChild(total);
//   }
// };
//
// var seaTac = {
//   name: 'SeaTac Airport',
//   customersHourMin: 3,
//   customersHourMax: 24,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   cookiesPurchasedAvg: 1.2,
//   customersHour: function() {
//     return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
//   },
//   hourlyPurchaseLog: [],
//   dailySalesTotal: 0,
//   cookiesPurchasedHour: function() {
//     this.hourlyPurchaseLog = [];
//     for (var i = 0; i < this.openHours.length; i++) {
//       var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
//       this.hourlyPurchaseLog.push(product);
//     }
//   },
//   dailySales: function () {
//     this.dailySalesTotal = 0;
//     for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
//       this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
//     }
//   },
//   dailySalesReport: function() {
//     var location = document.getElementById('seatac');
//     var name = document.createElement('h2');
//     name.innerText = this.name;
//     location.appendChild(name);
//     var list = document.createElement('ul');
//     location.appendChild(list);
//     for (var i = 0; i < this.openHours.length; i++) {
//       var sales = document.createElement('li');
//       sales.innerText = this.openHours[i] + ': ' + Math.round(this.hourlyPurchaseLog[i]) + ' cookies.';
//       list.appendChild(sales);
//     };
//     var total = document.createElement('li');
//     total.innerText = 'Total: ' + this.dailySalesTotal + ' cookies.';
//     list.appendChild(total);
//   }
// };
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   customersHourMin: 11,
//   customersHourMax: 38,
//   cookiesPurchasedAvg: 3.7,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   customersHour: function() {
//     return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
//   },
//   hourlyPurchaseLog: [],
//   dailySalesTotal: 0,
//   cookiesPurchasedHour: function() {
//     this.hourlyPurchaseLog = [];
//     for (var i = 0; i < this.openHours.length; i++) {
//       var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
//       this.hourlyPurchaseLog.push(product);
//     }
//   },
//   dailySales: function () {
//     this.dailySalesTotal = 0;
//     for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
//       this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
//     }
//   },
//   dailySalesReport: function() {
//     var location = document.getElementById('seattlecenter');
//     var name = document.createElement('h2');
//     name.innerText = this.name;
//     location.appendChild(name);
//     var list = document.createElement('ul');
//     location.appendChild(list);
//     for (var i = 0; i < this.openHours.length; i++) {
//       var sales = document.createElement('li');
//       sales.innerText = this.openHours[i] + ': ' + Math.round(this.hourlyPurchaseLog[i]) + ' cookies.';
//       list.appendChild(sales);
//     };
//     var total = document.createElement('li');
//     total.innerText = 'Total: ' + this.dailySalesTotal + ' cookies.';
//     list.appendChild(total);
//   }
// };
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   customersHourMin: 20,
//   customersHourMax: 38,
//   cookiesPurchasedAvg: 2.3,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   customersHour: function() {
//     return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
//   },
//   hourlyPurchaseLog: [],
//   dailySalesTotal: 0,
//   cookiesPurchasedHour: function() {
//     this.hourlyPurchaseLog = [];
//     for (var i = 0; i < this.openHours.length; i++) {
//       var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
//       this.hourlyPurchaseLog.push(product);
//     }
//   },
//   dailySales: function () {
//     this.dailySalesTotal = 0;
//     for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
//       this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
//     }
//   },
//   dailySalesReport: function() {
//     var location = document.getElementById('capitolhill');
//     var name = document.createElement('h2');
//     name.innerText = this.name;
//     location.appendChild(name);
//     var list = document.createElement('ul');
//     location.appendChild(list);
//     for (var i = 0; i < this.openHours.length; i++) {
//       var sales = document.createElement('li');
//       sales.innerText = this.openHours[i] + ': ' + Math.round(this.hourlyPurchaseLog[i]) + ' cookies.';
//       list.appendChild(sales);
//     };
//     var total = document.createElement('li');
//     total.innerText = 'Total: ' + this.dailySalesTotal + ' cookies.';
//     list.appendChild(total);
//   }
// };
//
// var alki = {
//   name: 'Alki',
//   customersHourMin: 2,
//   customersHourMax: 16,
//   cookiesPurchasedAvg: 4.6,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   customersHour: function() {
//     return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
//   },
//   hourlyPurchaseLog: [],
//   dailySalesTotal: 0,
//   cookiesPurchasedHour: function() {
//     this.hourlyPurchaseLog = [];
//     for (var i = 0; i < this.openHours.length; i++) {
//       var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
//       this.hourlyPurchaseLog.push(product);
//     }
//   },
//   dailySales: function () {
//     this.dailySalesTotal = 0;
//     for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
//       this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
//     }
//   },
//   dailySalesReport: function() {
//     var location = document.getElementById('alki');
//     var name = document.createElement('h2');
//     name.innerText = this.name;
//     location.appendChild(name);
//     var list = document.createElement('ul');
//     location.appendChild(list);
//     for (var i = 0; i < this.openHours.length; i++) {
//       var sales = document.createElement('li');
//       sales.innerText = this.openHours[i] + ': ' + Math.round(this.hourlyPurchaseLog[i]) + ' cookies.';
//       list.appendChild(sales);
//     };
//     var total = document.createElement('li');
//     total.innerText = 'Total: ' + this.dailySalesTotal + ' cookies.';
//     list.appendChild(total);
//   }
// };
//
// firstPike.customersHour();
// firstPike.cookiesPurchasedHour();
// firstPike.dailySales();
// firstPike.dailySalesReport();
// seaTac.customersHour();
// seaTac.cookiesPurchasedHour();
// seaTac.dailySales();
// seaTac.dailySalesReport();
// seattleCenter.customersHour();
// seattleCenter.cookiesPurchasedHour();
// seattleCenter.dailySales();
// seattleCenter.dailySalesReport();
// capitolHill.customersHour();
// capitolHill.cookiesPurchasedHour();
// capitolHill.dailySales();
// capitolHill.dailySalesReport();
// alki.customersHour();
// alki.cookiesPurchasedHour();
// alki.dailySales();
// alki.dailySalesReport();
