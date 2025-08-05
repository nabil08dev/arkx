const books = require("./books.json");

function priceOfBook(bookName) {
  for(i=0;i<=books.length;i++){
    if(books[i].title===bookName){
      return books[i].price
    }
  }

}
console.log(priceOfBook("The Alchemist"))

function affordableBooks(budget) {
  let result=[];
  for(i=0;i<books.length;i++){
    if(books[i].price<=budget){
      result.push(books[i].title);
    }
  }
  return result
}
console.log(affordableBooks(8))


function findBookByGenre(genre) {
  let result=[]
  for (i=0;i<books.length;i++){
    for (j=0;j<genre.length;j++){
    if(books[i].genres[j]==genre){

      result.push(books[i].title)
    }
  }}
    return result
}
console.log(findBookByGenre("Religion"))


function groupByGenre() {
  const groupedBooks = {};
  for (let bookKey in books) {
    const book = books[bookKey];
    for (let genre of book.genres) {
      if (!groupedBooks[genre]) {
        groupedBooks[genre] = [];
      }
      groupedBooks[genre].push(book.title);
    }
  }
  return groupedBooks;
}

console.log(groupByGenre());


function sortBooksByPrice() {

  let sortedBooks = [];
  for (let i = 0; i < books.length; i++) {
    sortedBooks[i] = books[i];
  }

  for (let i = 0; i < sortedBooks.length - 1; i++) {
    for (let j = 0; j < sortedBooks.length - 1 - i; j++) {
      if (sortedBooks[j].price > sortedBooks[j + 1].price) {

        let temp = sortedBooks[j];
        sortedBooks[j] = sortedBooks[j + 1];
        sortedBooks[j + 1] = temp;
      }
    }
  }

  return sortedBooks;
}

console.log(sortBooksByPrice())
/*
(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();*/
