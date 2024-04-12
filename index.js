import { books } from './Books.js'



let bookCards = document.getElementById('book-cards')
const navHamburger = document.getElementById('nav-hamburger')



books.forEach(book => {
    renderBooks(book)
})

function renderBooks(book){
    
    bookCards.innerHTML += `
        <div id="book-card" class="book-card" data-book-id="${book.id}">
            <div id="inner-book-card">
                <img src="${book.iconUrl}" alt="">
                <h3>${book.bookName}</h3>
            </div>
        </div>
    
    `
  
}

bookCards.addEventListener('click', function(e){
    const bookCard = e.target.closest('.book-card');
    if (bookCard) {
        const bookId = bookCard.dataset.bookId;
        const clickedBook = books.find(book => book.id === parseInt(bookId));
        localStorage.setItem('clickedBook', JSON.stringify(clickedBook));
        window.location.href = '/pages/chapters.html'; // Redirect to chapters.html
    }
});

    










function hamburgerToggle(){
    
    const openbtn = document.querySelector('#openbtn')

    openbtn.classList.toggle('active')
}

navHamburger.addEventListener('click', hamburgerToggle)



