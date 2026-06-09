
var published = "This book was published in..."
class Book{

    constructor(title , author, genre){
        this.title =title;
        this.author =author;
        this.genre =genre;
    }

    knowledge(){
        let rec = "would recommend"
        console.log("This book taught me something new")
    }
}
let book1 = new Book( " IT" , "Stephen King" , "Horror")
let book2 = new Book( " Me Before You" , "Jojo Moyes", "Romance")
let book3 = new Book( "The Picture of Dorian Gray" , "Oscar Wilde", " Gothic")

console.log(book1)
console.log(book2)
console.log(book3)