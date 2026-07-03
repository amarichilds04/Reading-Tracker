// use selectors to retrieve the form data. 

const booktitle = document.getElementById('booktitle');
const author = document.getElementById('author');
const result = document.getElementById('result');
const btn = document.querySelector('button').addEventListener('click', addBook)
//const status = document.getElementsByName('bookstatus');

// get radio value 
function getRadioValue(){
    var status = document.getElementsByName('bookstatus');

    for (i = 0; i < status.length; i++){
        if (status[i].checked){
            return status[i].value;
        }
        else {
            console.log("error!");
        }
    }
   
}

// Create Book Class to store Book objects

class Book {
    constructor(title, author, status){
        this.title = title;
        this.author = author;
        this.status = status; 
    }

    displaySummary(){
        return `${this.title} - ${this.author}`;
    }
}


function addBook (){
    const userBook = booktitle.value;
    const userAuthor = author.value;
    const bookArray = [];

    var resultArray = bookArray.push()
    
    //result.innerHTML = `<p> ${userBook} ${userAuthor}</p>`

}





