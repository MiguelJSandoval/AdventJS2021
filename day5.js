function daysToXmas(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let newDate = new Date(`${year}-${month}-${day}`);
  let xmasDate = new Date('2021-12-25');
  let millisND = newDate.getTime();
  let millisXmas = xmasDate.getTime();
  let days = 0;
  if (millisXmas > millisND || millisXmas < millisND)
    days = (millisXmas - millisND) / 86400000;
  else return 0;
  return Math.round(days);
}

console.log(daysToXmas(new Date('Dec 1, 2021')))