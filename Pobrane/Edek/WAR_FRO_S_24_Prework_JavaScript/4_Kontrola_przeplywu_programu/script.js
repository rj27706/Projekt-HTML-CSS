//zadanie 1

var li1 = 6;
var li2 = 9;

if(li1 > li2){
	console.log("zmienna li1 jest wieksza");
} 
else {
	console.log("zmienna li2 jest wieksza");
}

//zadanie 2

var li3 = 10;
var li4 = 15;
var li5 = 20;


if( li3 > li4 && li3 > li5) {
	console.log("zmienna li3 jest najwieksza");
}

else if( li4 > li3 && li4 > li5) {
	console.log("zmienna li4 jest najwieksza");
}

else {
	console.log("zmienna li5 jest najwieksza");
}

//zadanie 3

for(var i=1; i<=10; i++) {
	console.log(i + ". Lubie JavaScript");
}

//zadanie 4

var result = 0;

for(var i=1; i<=10; i++){
	result += i;
}
console.log(result);

//zadanie 5

var n = 15;

for(var i=0; i<n; i++){
	
		
	if(i % 2 === 0){
		console.log(i + " - liczba parzysta");
	}
	
	else{
		console.log(i + " - liczba nieparzysta");
	}
}

//zadanie 6

for(var i=0; i<10; i++){
	for(var j=0; j<10; j++){
		console.log("i= " + i + ", j= " + j);
	}
}




// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


//zadanie 8

var rozmiar = 25;
var linie = "";


for(var i=0; i<rozmiar; i++){
	linie = ""
	for(var j=0; j<=i; j++){
		linie = linie + "*";
	}
	console.log(" ");

	console.log(linie);
}






