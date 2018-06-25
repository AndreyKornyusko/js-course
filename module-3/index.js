'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const LOGIN_MASSEGE = 'Введите Ваш логин';
const WARNING_MASSEGE = 'Ошибка! Логин должен быть от 4 до 16 символов';
const LOGIN_ADDS_MASSEGE = 'Логин успешно добавлен!';
const LOGIN_WARNING_MASSEGE = 'Такой логин уже используется!';

let login;
login = prompt(LOGIN_MASSEGE);

const checkLoginValidity = function(log) {
  let isValidity;
  if (log.length >= 4 && log.length <= 16) {
    isValidity = true;
  } else {
    isValidity = false;
  }
  return isValidity;
};

const checkIfLoginExists = function(logs, log) {
  logs = logins;
  let isLoginExists;
  if (logs.includes(log)) {
    isLoginExists = true;
  } else {
    isLoginExists = false;
  }
  return isLoginExists;
};

const addLogin = function(logs, log) {
  logs = logins;
  if (checkLoginValidity(login)) {
    if (checkIfLoginExists(logins, login)) {
      alert(LOGIN_WARNING_MASSEGE);
    } else {
      logins.push(log);
      alert(LOGIN_ADDS_MASSEGE);
    }
  } else {
    alert(WARNING_MASSEGE);
  }
};

let addsLogin = addLogin(logins, login);
console.log(logins);
