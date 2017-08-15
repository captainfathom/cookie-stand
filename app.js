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
  cookiesPurchasedHour: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.cookiesPurchasedAvg * this.customersHour();
      this.hourlyPurchaseLog.push(product);
    }
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
  cookiesPurchasedAvg: 6.3,
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.cookiesPurchasedAvg * this.customersHour();
      this.hourlyPurchaseLog.push(product);
    }
  }
};

var SeattleCenter= {
  name: 'Seattle Center',
  customersHourMin: 11,
  customersHourMax: 38,
  cookiesPurchasedAvg: 3.7,
  openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  customersHour: function() {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  },
  cookiesPurchasedAvg: 6.3,
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.cookiesPurchasedAvg * this.customersHour();
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
  cookiesPurchasedAvg: 6.3,
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.cookiesPurchasedAvg * this.customersHour();
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
  cookiesPurchasedAvg: 6.3,
  hourlyPurchaseLog: [],
  cookiesPurchasedHour: function() {
    for (var i = 0; i < 14; i++) {
      var product = this.cookiesPurchasedAvg * this.customersHour();
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

//Pike
var ulOne = document.createElement('ul');
var textOne = document.createTextNode(FirstPike.name);
ulOne.appendChild(textOne);
var positionOne = document.getElementById('firstpike');
positionOne.appendChild(ulOne);
ulOne.className = 'firstcookies';

for (i = 0; i < FirstPike.openHours.length; i++) {
  var liOne = document.createElement('li');
  liOne.innerText = FirstPike.openHours[i] + ': ' + Math.round(FirstPike.hourlyPurchaseLog[i]) + ' cookies.';
  ulOne.appendChild(liOne);
}

var liTotalOne = document.createElement('li');
var sumOne = 0;
for (i = 0; i < FirstPike.hourlyPurchaseLog.length; i++) {
  sumOne = sumOne + Math.round(FirstPike.hourlyPurchaseLog[i]);
}
liTotalOne.innerText = 'Total: ' + sumOne + ' cookies.';
liOne.appendChild(liTotalOne);

//SeaTac
var ulTwo = document.createElement('ul');
var textTwo = document.createTextNode(SeaTac.name);
ulTwo.appendChild(textTwo);
var positionTwo = document.getElementById('seatac');
positionTwo.appendChild(ulTwo);
ulTwo.className = 'secondcookies';

for (i = 0; i < SeaTac.openHours.length; i++) {
  var liTwo = document.createElement('li');
  liTwo.innerText = SeaTac.openHours[i] + ': ' + Math.round(SeaTac.hourlyPurchaseLog[i]) + ' cookies.';
  ulTwo.appendChild(liTwo);
}

var liTotalTwo = document.createElement('li');
var SumTwo = 0;
for (i = 0; i < SeaTac.hourlyPurchaseLog.length; i++) {
  SumTwo = SumTwo + Math.round(SeaTac.hourlyPurchaseLog[i]);
}
liTotalTwo.innerText = 'Total: ' + SumTwo + ' cookies.';
liTwo.appendChild(liTotalTwo);

//Seattle Center
var ulThree = document.createElement('ul');
var textThree = document.createTextNode(SeattleCenter.name);
ulThree.appendChild(textThree);
var positionThree = document.getElementById('seattlecenter');
positionThree.appendChild(ulThree);
ulThree.className = 'thirdcookies';

for (i = 0; i < SeattleCenter.openHours.length; i++) {
  var liThree = document.createElement('li');
  liThree.innerText = SeattleCenter.openHours[i] + ': ' + Math.round(SeattleCenter.hourlyPurchaseLog[i]) + ' cookies.';
  ulThree.appendChild(liThree);
}

var liTotalThree = document.createElement('li');
var sumThree = 0;
for (i = 0; i < SeattleCenter.hourlyPurchaseLog.length; i++) {
  sumThree = sumThree + Math.round(SeattleCenter.hourlyPurchaseLog[i]);
}
liTotalThree.innerText = 'Total: ' + sumThree + ' cookies.';
liThree.appendChild(liTotalThree);

//Capitol Hill
var ulFour = document.createElement('ul');
var textFour = document.createTextNode(CapitolHill.name);
ulFour.appendChild(textFour);
var positionFour = document.getElementById('capitolhill');
positionFour.appendChild(ulFour);
ulFour.className = 'fourthcookies';

for (i = 0; i < CapitolHill.openHours.length; i++) {
  var liFour = document.createElement('li');
  liFour.innerText = CapitolHill.openHours[i] + ': ' + Math.round(CapitolHill.hourlyPurchaseLog[i]) + ' cookies.';
  ulFour.appendChild(liFour);
}

var liTotalFour = document.createElement('li');
var sumFour = 0;
for (i = 0; i < CapitolHill.hourlyPurchaseLog.length; i++) {
  sumFour = sumFour + Math.round(CapitolHill.hourlyPurchaseLog[i]);
}
liTotalFour.innerText = 'Total: ' + sumFour + ' cookies.';
liFour.appendChild(liTotalFour);

//Alki
var ulFive = document.createElement('ul');
var textFive = document.createTextNode(Alki.name);
ulFive.appendChild(textFive);
var positionFive = document.getElementById('alki');
positionFive.appendChild(ulFive);
ulFive.className = 'fifthcookies';

for (i = 0; i < Alki.openHours.length; i++) {
  var liFive = document.createElement('li');
  liFive.innerText = Alki.openHours[i] + ': ' + Math.round(Alki.hourlyPurchaseLog[i]) + ' cookies.';
  ulFive.appendChild(liFive);
}

var liTotalFive = document.createElement('li');
var sumFive = 0;
for (i = 0; i < Alki.hourlyPurchaseLog.length; i++) {
  sumFive = sumFive + Math.round(Alki.hourlyPurchaseLog[i]);
}
liTotalFive.innerText = 'Total: ' + sumFive + ' cookies.';
liFive.appendChild(liTotalFive);

//fish
// var fish = document.createElement('img');
// fish.innerText = src = 'img/salmon.png';
// var fishpic = document.getElementById('header');
// fish.appendChild(fishpic);
