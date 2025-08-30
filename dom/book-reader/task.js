const fontSizeElements = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontSizeElements.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        fontSizeElements.forEach(el => el.classList.remove('font-size_active'));
        this.classList.add('font-size_active');
        book.classList.remove('font-size_small', 'font-size_big'); 

        const size = this.dataset.size;
        if (size === 'small') {
            book.classList.add('font-size_small');
        } else {
            book.classList.add('font-size_big');
        }
    });
});