alert('Part 1');
function pwr(a, b) {
  var k=1;
  for (var i = 0; i < b; i++) {
    k *= a;
  }
  return k;
}

a = prompt('Введите число:');
b = prompt('Ввдеите степень');
console.log(  pwr(a,b)  );
