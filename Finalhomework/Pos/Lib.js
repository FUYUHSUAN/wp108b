const Lib = {}


Lib.dateToString = function (date) {
  return (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()
}

Lib.timeToString = function (date) {
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}