import { islamiyatChapters } from './chapters.js';
import { physicsChapters } from './chapters.js';



document.addEventListener('DOMContentLoaded', function() {
    
    const clickedBookString = localStorage.getItem('clickedBook');

   
    const clickedBook = JSON.parse(clickedBookString);

    
    const bookDetails = document.getElementById('book-details');
    if (bookDetails) {
        bookDetails.innerHTML = `
            <div id="book-title">${clickedBook.bookName}</div>
            <div id="book-author">${clickedBook.author}</div>
        `;
    } 

    
    localStorage.removeItem('clickedBook');

    renderChapters(clickedBook.bookName);
});

const chapterArrays = {
    'islamiyat': islamiyatChapters,
    'physics': physicsChapters,
    
};

function renderChapters(bookName) {
    const chaptersContainer = document.getElementById('chapters-container');
    if (!chaptersContainer) return;

    const chapters = chapterArrays[bookName];
    if (!chapters) {
        console.error(`Chapter array not found for book: ${bookName}`);
        return;
    }

    chapters.forEach(chapter => {
        chaptersContainer.innerHTML += `
        <div id="chapter">
        <p>${chapter.chNo}</p>
        <div>
            <a href="${chapter.pdfUrl}" target="_blank">View</a>
            <a href="${chapter.pdfUrl}" download>Download</a>
        </div>
    </div>
        `;
    });
}





