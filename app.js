'use strict';

var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieStore (name, customersHourMin, customersHourMax, cookiesPurchasedAvg) {
  this.name = name;
  this.customersHourMin = customersHourMin;
  this.customersHourMax = customersHourMax;
  this.cookiesPurchasedAvg = cookiesPurchasedAvg;
  this.hourlyPurchaseLog = [];
  this.dailySalesTotal = 0;
  this.customersHour = function () {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  };
  this.customersHour();
  this.cookiesPurchasedHour = function () {
    this.hourlyPurchaseLog = [];
    for (var i = 0; i < openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  };
  this.cookiesPurchasedHour();
  this.dailySales = function () {
    this.dailySalesTotal = 0;
    for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
      this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
    }
  };
  this.dailySales();
  this.renderToHTML = function () {
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
  };
  storeList.push(this);
};

var storeList = [];

var firstPike = new CookieStore ('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore ('Sea Tac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore ('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore ('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore ('Alki', 2, 16, 4.6);

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

//call each render function for the ind. store
for (var z = 0; z < storeList.length; z++) {
  storeList[z].renderToHTML();
}

//totals
var subTotals = document.createElement('tr');
subTotals.innerText = 'Daily Totals';
table.appendChild(subTotals);

var grandTotal = 0;

var dailyStoreTotal = function () {
  for (var i = 0; i < openHours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeList.length; j++) {
      hourlyTotal += storeList[j].hourlyPurchaseLog[i];
    }
    var columnTotal = document.createElement('td');
    columnTotal.innerText = hourlyTotal;
    subTotals.appendChild(columnTotal);
    grandTotal += hourlyTotal;
  }
};
dailyStoreTotal();

var theBigTotes = document.createElement('td');
theBigTotes.innerText = grandTotal;
subTotals.appendChild(theBigTotes);

function createStore (event) {
  event.preventDefault();
  var newStore = new CookieStore;
  newStore.name = this.elements['location'].value;
  newStore.customersHourMin = this.elements['mincustomerhour'].value;
  newStore.customersHourMax = this.elements['maxcustomerhour'].value;
  newStore.cookiesPurchasedAvg = this.elements['cookiespercustomer'].value;
  newStore.cookiesPurchasedHour();
  newStore.dailySales();
  newStore.renderToHTML();
}

var form = document.getElementById('newStoreForm');
form.addEventListener('submit', createStore);
