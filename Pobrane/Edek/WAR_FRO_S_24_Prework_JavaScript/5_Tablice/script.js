var tab1 = [4, 6, 8];

for(var i=0; i<tab1.length; i++) {
	console.log(tab1[i]);
}

//zadanie 2

var tab2 = ["banan", "malina", "truskawka", "ananas", "gruszka", "wisnia"];

console.log(tab2[0]);

console.log(tab2[5]);

for(var i=0; i<tab2.length; i++) {
	console.log(tab2[i]);
}

//zadanie 3

var tab3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var sum = 0

for(var i=0; i<tab3.length; i++){
	sum = sum + tab3[i];
	console.log(sum);
}

//zadanie 4

var tab4 = [2, 5, 7, 8, 10, 13, 15, 16, 18, 20]
var sumaPar = 0;


for(var i=0; i<tab4.length; i++){
	if(tab4[i] % 2 === 0){
			console.log(tab4[i] + " - liczba parzysta");
			sumaPar = sumaPar + tab4[i];
		}
		
		else{
			console.log(tab4[i] + " - liczba nieparzysta");
	}
	
}

console.log(sumaPar);

//zadanie  5

var tab5 = [2, 5, 7, 28, 10, 34, 15, 16, 38, 20];
var max = 0;

for(var i=0; i<tab5.length; i++) {
	if(tab5[i] > max){
		max = tab5[i];
		
	}
}

console.log(max);

//zadanie 6

var tab6 = [23, 5, 7, 28, 10, 34, 15, 15, 38, 20];
var firstIndex = null;

for(var i=0; i<tab6.length; i++) {
	for(var j=i+1; j<tab6.length; j++) {
		if(tab6[i] == tab6[j]) {
			firstIndex = i;
		}
		if (firstIndex != null) {
		break;
		}
	}
}	
console.log(firstIndex);

//zadanie 7


var tab7 = [2, 5, 7, 28, 10, 34, 15, 16, 38, 20];

	for(var i=tab7.length-1; i>=0; i--) {
	console.log(tab7[i]);
 }
