'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  cheese: 1,
  milk: 2,
  bread: 2,
  apples: 1,
};

function Cashier(name, productsDatabase) {
  this.name = name;
  this.productsDatabase = productsDatabase;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;
  this.greet = function() {
    console.log(`Здравствуйте, вас обслуживает ${this.name}`);
  };
  this.onSuccess = function() {
    if (this.changeAmount > 0) {
      console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    } else if (this.changeAmount === 0) {
      console.log(`Спасибо за покупку`);
    } else {
      return this.onError();
    }
  };
  this.onError = function() {
    console.log('Очень жаль, вам не хватает денег на покупки');
  };
  //  выбор товара и подсчет суммы
  this.countTotalPrice = function(order) {
    const orderAll = Object.entries(order);
    for (let elem of orderAll) {
      this.totalPrice += productsDatabase[elem[0]] * order[elem[0]];
    }
  };

  // this.countTotalPrice = function(order) {
  //   let orderKey;
  //   let productsKey;
  //   let orderValue;
  //   let productsValue;
  //   const totalOrderPrices = [];

  //   for (const key in order) {
  //     orderKey = key;
  //     orderValue = order[key];

  //     for (const key in productsDatabase) {
  //       productsKey = key;
  //       productsValue = productsDatabase[key];
  //       if (orderKey === productsKey) {
  //         totalOrderPrices.push(orderValue * productsValue);
  //       }
  //     }
  //   }
  //   let total = 0;
  //   for (let value of totalOrderPrices) {
  //     total += value;
  //   }
  //   this.totalPrice = total;
  // };

  // ввод денег
  this.getCustomerMoney = function(value) {
    value = Number(prompt('Введите деньги'));
    this.customerMoney = value;
  };
  // подсчет сдачи
  this.countChange = function() {
    if (this.customerMoney - this.totalPrice >= 0) {
      return (this.changeAmount = this.customerMoney - this.totalPrice);
    } else {
      return null;
    }
  };
  // личная иницатива (выдача чека)
  this.check = function() {
    if (this.customerMoney - this.totalPrice >= 0) {
      console.log(' ===============');
      console.log('Товарный чек');
      console.log('Кассир', this.name);
      let orderKey;
      let productsKey;
      let orderValue;
      let productsValue;

      for (const key in order) {
        orderKey = key;
        orderValue = order[key];

        for (const key in productsDatabase) {
          productsKey = key;
          productsValue = productsDatabase[key];
          if (orderKey === productsKey) {
            console.log(
              `${orderKey}  ${productsValue}x${orderValue} = ${productsValue *
                orderValue}`,
            );
          }
        }
      }
      console.log('Всего к оплате', this.totalPrice);
      console.log('Сдача', this.changeAmount);
      console.log(' ===============');
    }
  };

  // сброс
  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };
}

const mango = new Cashier('Mango', products);
console.log(mango.name); // Mango
console.log(mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.totalPrice); // 0
console.log(mango.customerMoney); // 0
console.log(mango.changeAmount); // 0

mango.greet();

mango.countTotalPrice(order);

// Проверям что посчитали
console.log('к оплатe', mango.totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log('Вы внесли', mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const result = mango.countChange();

// Проверяем что нам вернул countChange
console.log('countChange =', result);

// Проверяем результат подсчета денег
if (result !== null) {
  // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// выдача чека
mango.check();

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения полей после reset
console.log(mango.totalPrice); // 0
console.log(mango.customerMoney); // 0
console.log(mango.changeAmount); // 0
