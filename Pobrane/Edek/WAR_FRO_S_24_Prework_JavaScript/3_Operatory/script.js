//zadanie 1

var prawda = true;

var falsz = false;

console.log(prawda == falsz);

//w konsoli pojawiło się false, gdyż obie zmienne mają inną wartość

//zadanie 2

var numb1 = 12;

var numb2 = 5;

var resultModulo = 0;

resultModulo = 12 % 5;

console.log(resultModulo);

//zadanie 3

var ciag1 = "Ala";

var ciag2 = " ma kota.";

var joinedStrings = "";

joinedStrings = ciag1 + ciag2;

console.log(joinedStrings);

//zadanie 4

var myNumber = 4;

var myString = "4";

console.log(myNumber == myString); //true
console.log(myNumber === myString); //false

//w pierwszym przypadku uzyskujemy true, gdyż mamy tę samą wartość, a typ nas nie interesuje, w drugim zaś typy są już inne, co zwraca nam false, mimo tych samych wartości.

//zadanie 5

var counter = 145;
console.log(counter);

counter++;
console.log(counter);

counter--;
console.log(counter);

//zadanie 6

var num1 = 10;
var num2 = 15;
var result = null;

result = 10 > 15;

console.log(result);

