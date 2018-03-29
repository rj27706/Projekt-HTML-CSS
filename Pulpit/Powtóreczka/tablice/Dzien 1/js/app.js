/*Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
1. Wypisz pierwszy owoc w konsoli.
2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).
*/

const tab = ['banan', 'marchew','jabłko', 'arbuz'];
console.log(tab[0]);
console.log(tab [tab.length-1]);

for (var i=0; i<tab.length; i++){
    console.log(tab[i]);

}
/*Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr
 &ndash; tablicę. Następnie przy pomocy pętli **for** przeiteruj (przejdź)
 po każdym elemencie i wypisz każdy z nich w konsoli.
  */


function printTable(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}
    const a = [1,2,3,4,5,6];
    printTable(a);

/*Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden
 argument &ndash; tablicę. Następnie funkcja ```multiply``` ma
 pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli **for**) i zwrócić wynik.
  */

function multiply(array) {
    var sum = 1;
    for(var i= 0; i<array.length; i++){
        sum = sum * array[i];

    }
    return sum
}
const b = [4,2,3];
console.log(multiply(b));

