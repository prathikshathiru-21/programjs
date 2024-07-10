// Concatenating string properties

var book1;
var book2;
var book3;
book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

book3 = {
	title : "Pride and Prejudice" ,
	author    : " Jane Austen"
};

book1.published = 1937;
book2.published = 1995;
book3.published = 1813;

console.log(book1.title + " by " + ", published in " +  book1.author);
console.log(book2.title + " by " + ", published in " +  book2.author);
console.log(book3.title + " by " + ", published in " +  book3.author);


/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */