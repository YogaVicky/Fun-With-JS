// Js objects are written in Javascript Object Notation,JSON
let book = {
	title:'Bowl,Sleep,Repeat',
	author:'James Anderson',
	numberOfPages:300,
	isAvailable:true
};

let bookTitle = book.title;
let bookPages = book.numberOfPages;
console.log(bookTitle," ",bookPages);

class Player{
	constructor(name,country,wickets){
		this.name = name;
		this.country = country;
		this.wickets = wickets;
	}
}

let stuartBroad = new Player('stuartBroad','england',486);
console.log(stuartBroad.name," has taken ",stuartBroad.wickets," wickets ");