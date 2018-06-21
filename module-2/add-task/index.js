'use strict';
const PASSWORD_MASSEGE = 'Введите свой пароль';
const WELLCOME_MASSEGE = 'Добро пожаловать!';
const ATTEMPTS_MASSEGE = 'У вас закончились попытки, аккаунт заблокирован!';
let noWarning;
let n;
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let password;

do {
  password = prompt(PASSWORD_MASSEGE);

  if (passwords.includes(password)) {
    alert(WELLCOME_MASSEGE);
  } else if (password == null) {
    break;
  } else if (passwords.includes(password) == false) {
    let i = 1;
    do {
      n = attempts - i;
      if (n !== 0) {
        const WARNING_MASSEGE = `Неверный пароль, у вас осталось ${n} попыток`;
        alert(WARNING_MASSEGE);
        password = prompt(PASSWORD_MASSEGE);
        if (password == null) {
          break;
        } else if (passwords.includes(password)) {
          alert(WELLCOME_MASSEGE);
          break;
        }
      } else if (n == 0) {
        alert(ATTEMPTS_MASSEGE);
        break;
      }

      i += 1;
    } while (
      n !== 0 &&
      password !== null &&
      passwords.includes(password) == false
    );

    break;
  }
} while (password !== null && passwords.includes(password) == false);

console.log('!!!!!');
