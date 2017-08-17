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
  this.cookiesPurchasedHour = function () {
    for (var i = 0; i < openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  };
  this.dailySales = function () {
    for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
      this.dailySalesTotal = this.dailySalesTotal + this.hourlyPurchaseLog[i];
    }
  };
  this.renderToHTML = function () {
    this.customersHour();
    this.cookiesPurchasedHour();
    this.dailySales();
    var content = document.getElementById('table');
    var storeRow = document.createElement('tr');
    content.appendChild(storeRow);
    var store = document.createElement('td');
    store.innerText = this.name;
    storeRow.appendChild(store);
    for (var i = 0; i < this.hourlyPurchaseLog.length; i++) {
      var printSales = document.createElement('td');
      printSales.innerText = this.hourlyPurchaseLog[i];
      storeRow.appendChild(printSales);
    };
    var theTotal = document.createElement('td');
    theTotal.innerText = this.dailySalesTotal;
    storeRow.appendChild(theTotal);
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
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  var blank = document.createElement('th');
  headerRow.appendChild(blank);
  for (var i = 0; i < openHours.length; i++) {
    var time = document.createElement('th');
    time.innerText = openHours[i];
    headerRow.appendChild(time);
  };
  var storeTotal = document.createElement('th');
  storeTotal.innerText = 'Total';
  headerRow.appendChild(storeTotal);
};
createTable();

//call each render function for the ind. store
for (var z = 0; z < storeList.length; z++) {
  storeList[z].renderToHTML();
}

//totals
var subTotalsRow = document.createElement('tr');
table.appendChild(subTotalsRow);
subTotalsRow.id = 'subTotals';
var subTotals = document.createElement('td');
subTotals.innerText = 'Daily Totals';
subTotalsRow.appendChild(subTotals);


var dailyStoreTotal = function () {
  var grandTotal = 0;
  for (var i = 0; i < openHours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeList.length; j++) {
      hourlyTotal += storeList[j].hourlyPurchaseLog[i];
    }
    var columnTotal = document.createElement('td');
    columnTotal.innerText = hourlyTotal;
    subTotalsRow.appendChild(columnTotal);
    grandTotal += hourlyTotal;
  }
  var theBigTotes = document.createElement('td');
  theBigTotes.innerText = grandTotal;
  subTotalsRow.appendChild(theBigTotes);
};
dailyStoreTotal();


function createStore (event) {
  event.preventDefault();
  var newStore = new CookieStore;
  newStore.name = this.elements['location'].value;
  newStore.customersHourMin = parseInt(this.elements['mincustomerhour'].value);
  newStore.customersHourMax = parseInt(this.elements['maxcustomerhour'].value);
  newStore.cookiesPurchasedAvg = parseFloat(this.elements['cookiespercustomer'].value);
  newStore.renderToHTML();
  form.reset();
}

var form = document.getElementById('newStoreForm');
form.addEventListener('submit', createStore);
