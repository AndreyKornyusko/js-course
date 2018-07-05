'use strict';
let sharm = 15;
let hurgada = 25;
let taba = 6;
const SHARM = 'SHARM';
const HURGADA = 'HURGADA';
const TABA = 'TABA';
const START_MASSEGE = 'Введите число необходимых мест';
const WARNING_MASSEGE = 'Ошибка ввода';
const CHOISE_SHARM = `Есть место в группе ${SHARM}, согласны ли Вы быть в этой группе?`;
const CHOISE_HURGADA = `Есть место в группе ${HURGADA}, согласны ли Вы быть в этой группе?`;
const CHOISE_TABA = `Есть место в группе ${TABA}, согласны ли Вы быть в этой группе?`;
const CHOISE_YES_SHARM = `Приятного путешествия в группе ${SHARM}`;
const CHOISE_YES_HURGADA = `Приятного путешествия в группе ${HURGADA}`;
const CHOISE_YES_TABA = `Приятного путешествия в группе ${TABA}`;
const CHOISE_NO = 'Нам очень жаль, приходите еще!';
const NO_SEATS = 'Извините, столько мест нет ни в одной группе!';

let numberOfSeats = prompt(START_MASSEGE);
if (
  Number(numberOfSeats) <= 0 || 
  Number.isInteger(Number(numberOfSeats)) == false) {
  alert(WARNING_MASSEGE);
 } else if (Number(numberOfSeats) <= taba) {
  let choiseTaba = confirm(CHOISE_TABA);
  if (choiseTaba == true) {
    alert(CHOISE_YES_TABA);
  } else {
    if (Number(numberOfSeats) <= sharm) {
      let choiseSharm = confirm(CHOISE_SHARM);
      if (choiseSharm == true) {
        alert(CHOISE_YES_SHARM);
      } else {
        if (Number(numberOfSeats) <= hurgada) {
          let choiseHurgada = confirm(CHOISE_HURGADA);
          if (choiseHurgada == true) {
            alert(CHOISE_YES_HURGADA);
          } else {
            alert(CHOISE_NO);
          }
        }
      }
    }
  }
} else if (Number(numberOfSeats) <= sharm) {
  let choiseSharm = confirm(CHOISE_SHARM);
  if (choiseSharm == true) {
    alert(CHOISE_YES_SHARM);
  } else {
    if (Number(numberOfSeats) <= hurgada) {
      let choiseHurgada = confirm(CHOISE_HURGADA);
      if (choiseHurgada == true) {
        alert(CHOISE_YES_HURGADA);
      } else {
        alert(CHOISE_NO);
      }
    } else {
      alert(NO_SEATS);
    }
  }
} else if (Number(numberOfSeats) <= hurgada) {
  let choiseHurgada = confirm(CHOISE_HURGADA);
  if (choiseHurgada == true) {
    alert(CHOISE_YES_HURGADA);
  } else {
    alert(CHOISE_NO);
  }
} else {
  alert(NO_SEATS);
}
