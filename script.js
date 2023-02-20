const student = "Ким Вадим Максимович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

const firstWeek = Array(16).fill([4, 1, 2, 5, 2, 2, 0,]);
const firstexam = Array(1).fill([0, 2, 0, 2, 0, 0, 0,]);
const holiday = Array(2).fill([0, 0, 0, 0, 0, 0, 0,]);
const lastWeek = Array(23).fill([1, 4, 4, 2, 5, 0, 0,]);
const lastexam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]);

const array = [firstWeek, firstexam, holiday, lastWeek, lastexam];
let doe = 0
let tor = 0
let kop = 0
let days = 0;
let weeks = 0;
let dor = 150 // стоимость проезда
let eda = 250 // деньги на обед 
let pro = 120 // деньги на проезд 
let ps = 23500 // приставка
let dor2 = dor - pro
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    weeks = weeks + 1;
    console.log(`Неделя номер ${weeks}`);
    for (let k = 0; k < array[i][j].length; k++) {
      days = days + 1;
      console.log(`день номер ${days}, кол-во пар: ${array[i][j][k]}`)
      if (array[i][j][k] > 0) {
        doe = doe + dor2;
      }
      if ((array[i][j][k] <= 3) && (array[i][j][k] > 0)) {
        kop = kop + eda
      }
      if (array[i][j][k] > 0) {
        tor = doe + kop
        console.log(`в копилке: ${tor} руб.`)
      }
      if (tor >= ps) {
        console.log(`Получилось накопить денеги`)
        break;
      }
      else {
        console.log(`Пока не получилось накопить денеги`)
      }
    }
  }
}
