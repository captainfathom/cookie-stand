'use strict';

var FirstPike = {
  name: '1st and Pike',
  customersHourMin: 23,
  customersHourMax: 65,
  openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  customersHour: function() {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  },
  cookiesPurchasedAvg: 6.3,
  hourlyPurchaseLog: [],
  dailySalesTotal: 0,
  cookiesPurchasedHour: function() {
    this.hourlyPurchaseLog = [];
    for (var i = 0; i < this.openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  },
  dailySales: function () {
    this.dailySalesTotal = 0;
    for (var i = 0; i < FirstPike.hourlyPurchaseLog.length; i++) {
      this.dailySalesTotal = this.dailySalesTotal + FirstPike.hourlyPurchaseLog[i];
    }
    // liTotalOne.innerText = 'Total: ' + dailySalesTotal + ' cookies.';
  },
  dailySalesReport: function() {
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
  }
};

var SeaTac = {
  name: 'SeaTac Airport',
  customersHourMin: 3,
  customersHourMax: 24,
  openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  cookiesPurchasedAvg: 1.2,
  customersHour: function() {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  },
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    this.hourlyPurchaseLog = [];
    for (var i = 0; i < this.openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  }
};

var SeattleCenter = {
  name: 'Seattle Center',
  customersHourMin: 11,
  customersHourMax: 38,
  cookiesPurchasedAvg: 3.7,
  openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  customersHour: function() {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  },
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    this.hourlyPurchaseLog = [];
    for (var i = 0; i < this.openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  }
};

var CapitolHill = {
  name: 'Capitol Hill',
  customersHourMin: 20,
  customersHourMax: 38,
  cookiesPurchasedAvg: 2.3,
  openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  customersHour: function() {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  },
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    this.hourlyPurchaseLog = [];
    for (var i = 0; i < this.openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  }
};

var Alki = {
  name: 'Alki',
  customersHourMin: 2,
  customersHourMax: 16,
  cookiesPurchasedAvg: 4.6,
  openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  customersHour: function() {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  },
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    this.hourlyPurchaseLog = [];
    for (var i = 0; i < this.openHours.length; i++) {
      var product = Math.floor(this.cookiesPurchasedAvg * this.customersHour());
      this.hourlyPurchaseLog.push(product);
    }
  }
};

// var storeName = document.getElementsbyTagName('h2');
//
// if (storeNames.lenth > 0) {
//   for (var i = 0; i < storeNames.length; i++)
//   storeNames[i].innerHTML = '';
// }

FirstPike.customersHour();
FirstPike.cookiesPurchasedHour();
FirstPike.dailySales();
FirstPike.dailySalesReport();
// SeaTac.customersHour();
// SeaTac.cookiesPurchasedHour();
// SeattleCenter.customersHour();
// SeattleCenter.cookiesPurchasedHour();
// CapitolHill.customersHour();
// CapitolHill.cookiesPurchasedHour();
// Alki.customersHour();
// Alki.cookiesPurchasedHour();

//Pike
// var ulOne = document.createElement('ul');
// var textOne = document.createTextNode(FirstPike.name);
// ulOne.appendChild(textOne);
// var positionOne = document.getElementById('firstpike');
// positionOne.appendChild(ulOne);
// ulOne.className = 'firstcookies';
//
// for (var i = 0; i < FirstPike.openHours.length; i++) {
//   var liOne = document.createElement('li');
//   liOne.innerText = FirstPike.openHours[i] + ': ' + Math.round(FirstPike.hourlyPurchaseLog[i]) + ' cookies.';
//   ulOne.appendChild(liOne);
// }
//
// var liTotalOne = document.createElement('li');
// var sumOne = 0;
// for (var m = 0; m < FirstPike.hourlyPurchaseLog.length; m++) {
//   sumOne = sumOne + Math.round(FirstPike.hourlyPurchaseLog[m]);
// }
// liTotalOne.innerText = 'Total: ' + sumOne + ' cookies.';
// liOne.appendChild(liTotalOne);
//
// //SeaTac
// var ulTwo = document.createElement('ul');
// var textTwo = document.createTextNode(SeaTac.name);
// ulTwo.appendChild(textTwo);
// var positionTwo = document.getElementById('seatac');
// positionTwo.appendChild(ulTwo);
// ulTwo.className = 'secondcookies';
//
// for (var b = 0; b < SeaTac.openHours.length; b++) {
//   var liTwo = document.createElement('li');
//   liTwo.innerText = SeaTac.openHours[b] + ': ' + Math.round(SeaTac.hourlyPurchaseLog[b]) + ' cookies.';
//   ulTwo.appendChild(liTwo);
// }
//
// var liTotalTwo = document.createElement('li');
// var SumTwo = 0;
// for (var a = 0; a < SeaTac.hourlyPurchaseLog.length; a++) {
//   SumTwo = SumTwo + Math.round(SeaTac.hourlyPurchaseLog[a]);
// }
// liTotalTwo.innerText = 'Total: ' + SumTwo + ' cookies.';
// liTwo.appendChild(liTotalTwo);
//
// //Seattle Center
// var ulThree = document.createElement('ul');
// var textThree = document.createTextNode(SeattleCenter.name);
// ulThree.appendChild(textThree);
// var positionThree = document.getElementById('seattlecenter');
// positionThree.appendChild(ulThree);
// ulThree.className = 'thirdcookies';
//
// for (var x = 0; x < SeattleCenter.openHours.length; x++) {
//   var liThree = document.createElement('li');
//   liThree.innerText = SeattleCenter.openHours[x] + ': ' + Math.round(SeattleCenter.hourlyPurchaseLog[x]) + ' cookies.';
//   ulThree.appendChild(liThree);
// }
//
// var liTotalThree = document.createElement('li');
// var sumThree = 0;
// for (var y = 0; y < SeattleCenter.hourlyPurchaseLog.length; y++) {
//   sumThree = sumThree + Math.round(SeattleCenter.hourlyPurchaseLog[y]);
// }
// liTotalThree.innerText = 'Total: ' + sumThree + ' cookies.';
// liThree.appendChild(liTotalThree);
//
// //Capitol Hill
// var ulFour = document.createElement('ul');
// var textFour = document.createTextNode(CapitolHill.name);
// ulFour.appendChild(textFour);
// var positionFour = document.getElementById('capitolhill');
// positionFour.appendChild(ulFour);
// ulFour.className = 'fourthcookies';
//
// for (var s = 0; s < CapitolHill.openHours.length; s++) {
//   var liFour = document.createElement('li');
//   liFour.innerText = CapitolHill.openHours[s] + ': ' + Math.round(CapitolHill.hourlyPurchaseLog[s]) + ' cookies.';
//   ulFour.appendChild(liFour);
// }
//
// var liTotalFour = document.createElement('li');
// var sumFour = 0;
// for (var d = 0; d < CapitolHill.hourlyPurchaseLog.length; d++) {
//   sumFour = sumFour + Math.round(CapitolHill.hourlyPurchaseLog[d]);
// }
// liTotalFour.innerText = 'Total: ' + sumFour + ' cookies.';
// liFour.appendChild(liTotalFour);
//
// //Alki
// var ulFive = document.createElement('ul');
// var textFive = document.createTextNode(Alki.name);
// ulFive.appendChild(textFive);
// var positionFive = document.getElementById('alki');
// positionFive.appendChild(ulFive);
// ulFive.className = 'fifthcookies';
//
// for (var g = 0; g < Alki.openHours.length; g++) {
//   var liFive = document.createElement('li');
//   liFive.innerText = Alki.openHours[g] + ': ' + Math.round(Alki.hourlyPurchaseLog[g]) + ' cookies.';
//   ulFive.appendChild(liFive);
// }
//
// var liTotalFive = document.createElement('li');
// var sumFive = 0;
// for (var h = 0; h < Alki.hourlyPurchaseLog.length; h++) {
//   sumFive = sumFive + Math.round(Alki.hourlyPurchaseLog[h]);
// }
// liTotalFive.innerText = 'Total: ' + sumFive + ' cookies.';
// liFive.appendChild(liTotalFive);
