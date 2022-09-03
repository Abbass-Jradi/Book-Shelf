let myLibrary = [];

function Book(title, author, numberOfPages, isRead){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

const add_book = document.getElementById('add_book');
const form = document.getElementById('form');
const submit = document.getElementById('submit');

add_book.addEventListener('click',() => {
    form.style.opacity = '1';
    form.style.visibility = 'visible';
    form.style.zIndex = '99';

});

submit.addEventListener('click', () => {
    addBookToLibrary();
    form.style.opacity = '0';
    form.style.visibility = 'hidden';
    form.style.zIndex = '-99';
    title.value = null;
    author.value = null;
    numberOfPages.value = null;
    select.value = 'read';   
});

const title = document.getElementById('title');
const author = document.getElementById('author');
const numberOfPages = document.getElementById('numberOfPages');
const select = document.getElementById('select');
function addBookToLibrary(){
    const book = new Book(title.value, author.value, numberOfPages.value, select.value);
    const card = document.createElement("div");
    const main = document.querySelector('.main');
    card.classList.add('card');

    const card_author = document.createElement('div');
    card_author.textContent = `${author.value}`;
    card.appendChild(card_author);

    const card_title = document.createElement('div');
    card_title.textContent = `${title.value}`;
    card.appendChild(card_title);

    const card_numberOfPages = document.createElement('div');
    card_numberOfPages.textContent = `${numberOfPages.value}`;
    card.appendChild(card_numberOfPages);

    const card_select = document.createElement('div');
    card_select.textContent = `${select.value}`;
    card.appendChild(card_select);

    const remove_button = document.createElement('button');
    remove_button.style.padding = '.25rem .5rem';
    remove_button.style.marginLeft = '.6rem';
    remove_button.style.backgroundColor = '#EFEFE';
    remove_button.innerHTML = 'Remove';
    remove_button.style.Color = '#EC823A';

    remove_button.addEventListener('click', ()=>{
        card.style.display = 'none';
    })
    card.appendChild(remove_button);

    card_div = card.querySelectorAll('div');
    card_div.forEach((sample) =>{
        sample.style.margin = '0 0 0.6rem 1rem';
        sample.style.fontFamily = 'sans-serif';
        sample.style.fontSize = '1.5rem';



    });

    main.appendChild(card);
}



