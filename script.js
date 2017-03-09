//Assignment 4 
//Kevin Lai 

//1.
//
//var ANIMAL = ANIMAL || {};
//ANIMAL.house = function(cat,dog){
//	this.cat
//	this.dog
//	}
//
//2.
//var animal = {
//	cat:"fluffy"
//	
//};
//function animal () {
//	this.dog ="bolt"
//}
//3.
//
//function animal (){
//buddy instanceof dog;	
//	
//}
//4.
//var animal = function(){
//	this.dog = dog;
//	this.displaydog = fucntion(dog){
//		return "i am " + this.dog +"love me"; 
//	}
//window.console.log(displaydog);
//	}
//5.
//var animal = function(){
//	this.dog = dog;
//	instanceof dog;
//	this.displaydog = fucntion(dog){
//		return "i am " + this.dog +"love me"; 
//	}
//window.console.log(displaydog);

//6.
//var animal = function(breed,color,height,length){
//	this.breed = breed;
//	this.color = color;
//	this.height = height;
//	this.length = length;
//	
//}
//window.console.log(animal);

//7.
//var animal = function(breed,color,height,length,leashed){
//	this.breed = breed;
//	this.color = color;
//	this.height = height;
//	this.length = length;
//	this.leashed = leashed; 
//for (var i = this.length - 1; i >= 0; i--) 
//{return animal			}
//	
//}
//window.console.log(animal);
//8.
//dog.prototype.dogname= function(){
//	this.breed = breed;
//	this.color = color;
//	this.height = height;
//	this.length = length;
//	cat.prototype.catname= function(){
//	this.breed = breed;
//	this.color = color;
//	this.height = height;
//	this.length = length;
	
//if	{return .dog color + "dog is bark"
//	}
//else{
//	return .dog color +"cat is meowing"
//	
//}
//}
//window.console.log(dogname)

//9.
//dog.prototype.dogname= function(){
//	this._breed = breed;
//	this._color = color;
//	this._height = height;
//	this._length = length;
//	cat.prototype.catname= function()
//	this._breed = breed;
//	this._color = color;
//	this.-height = height;
////	this._length = length;
//	
//var checkType = function(dog,car){}
////
//checktype.breed = "dog","cat" ;
//breed.displayanimal = function(dog,cat){
//	return(breed+ "has made a noise")
//} 
////
////
////window.console.log(breed)
//
//10.

//var findwords = str.search
//
//alert(findwords )




//Recipe Card
// var recipe = {
//    'title': "Guacamole",
//    'servings': 4,
//    'ingredients': ["3 Avocados", "1 Lime ", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro ", "2 Diced Tomatoes ","1 Teaspoon Garlic", 
//"1 Pinch Ground Pepper",];
//};
//
//console.log(recipe.title);
//console.log('Servings: ' + recipe.servings);
//console.log('Ingredients:');
//for (var i = 0; i < recipe.ingredients.length; i++) {
//    console.log(recipe.ingredients[i]);
//}

//Reading List

//var book = [
//  {title: "Harry Potter",
//   author: "JK Rowling",
//   HaveRead: false
//  },
//  {title: "Fire and Ice",
//  author: "George RR Martin ",
//  HaveRead: true
//  },
//  {title: "The Lord OF the Rings",
//   author: "JRR Tolkien",
//   HaveRead: false
//  },
//  {title: "The Cat in The Hat",
//  author: "Dr Seuss",
// 	HaveRead: true
//  },
//  {title: "Captain Underpaints",
//  author: "Dav Pilkey",
//  HaveRead: true
//  },
//];
//
//for (var i = 0; i < book.length; i++) {
//  var book = book[i];
//  var bookInfo = book.title + '" by ' + book.author;
//  if (book.HaveRead) {
//    console.log('You already read "' + bookInfo);
//  } else {
//    console.log('You still need to read "' + bookInfo);
//  }
//}