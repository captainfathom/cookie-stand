var FirstPike = {
  customersHourMin: 23,
  customersHourMax: 65,
  customersHour: function() {
    return Math.floor(Math.random() * (this.customersHourMax - this.customersHourMin) + this.customersHourMin);
  }
  cookiesPurchasedAvg: 6.3,
  cookiesPurchasedHour: function(){
    for (var i = 0, i < 15, i++)
    cookiesPurchasedHour = cookiesPurchasedAvg * customersHour;
  }
};

console.log(customersHour)

var SeaTac = {
  customersHourMin: 3,
  customersHourMax: 24,
  cookiesPurchasedAvg: 1.2
};

var SeattleCenter= {
  customersHourMin: 11,
  customersHourMax: 38,
  cookiesPurchasedAvg: 3.7
};

var CapitolHill = {
  customersHourMin: 20,
  customersHourMax: 38,
  cookiesPurchasedAvg: 2.3
};

var Alki = {
  customersHourMin: 2,
  customersHourMax: 16,
  cookiesPurchasedAvg: 4.6
};
