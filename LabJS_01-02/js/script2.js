alert ('Part 2');

var nameArray = new Array(5);
var checkName;
var found = false;

for (var i = 0; i < nameArray.length; i++) {
  nameArray[i] = prompt('Введите имя №' + (i+1) );
}

checkName = prompt('Поиск имени:');

for (var i = 0; i < nameArray.length; i++) {
  if (nameArray[i] == checkName) {
    found = true;
  }
}

if (found) {
  alert('Привет, ' + checkName + '!');
  } else {
    alert('Имя '+ checkName + ' не найдено!');
}
