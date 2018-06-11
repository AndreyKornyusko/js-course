'use strict';
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const LOGIN_MESSAGE = 'Введите Ваш логин';
const PASSWORD_MESSAGE = 'Введите Ваш пароль';
const CANCEL_MESSAGE = 'Отменено пользователем!';
const ACCESS_MESSAGE = 'Доступ запрещен!';
const WELLCOME_MESSAGE = 'Добро пожаловать!';

let password;

let login = prompt(LOGIN_MESSAGE);
if (login === null) {
  alert(CANCEL_MESSAGE);
} else if (login === ADMIN_LOGIN) {
  let password = prompt(PASSWORD_MESSAGE);
  if (password === null) {
    alert(CANCEL_MESSAGE);
  } else if (password === ADMIN_PASSWORD) {
    let password = alert(WELLCOME_MESSAGE);
  } else {
    alert(ACCESS_MESSAGE);
  }
} else if (login != ADMIN_LOGIN) {
  alert(ACCESS_MESSAGE);
} else if (password === null) {
  alert(CANCEL_MESSAGE);
} else {
  alert(ACCESS_MESSAGE);
}
