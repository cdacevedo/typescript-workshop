// Actividad #1: Traducir codigo JS a TS 🚀

// Ejercicio #1
function displayPerson(name, age, height) {
  const str1 = 'Person named ' + name + ',  ' + age + ' years old';
  const str2 = height !== undefined ? ' and ' + height + ' feet tall' : '';
  console.log(str1 + str2);
}

displayPerson('John', 32);

// Ejercicio #2
let employee = {};
employee.code = 10;
employee.name = 'John';

console.log(employee);

// Ejercicio #3
const element = document.getElementById('ts-logo');
element.src =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png';
