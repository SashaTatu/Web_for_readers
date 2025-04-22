console.log('Script connected')

fetch('js/books.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let divBook = document.createElement('div');
      divBook.classList.add('item');
      divBook.innerHTML = `
        <div class="item-image">
          <img src="img/index.img/books-gallery/${item.img}" alt="Книжка ${item.title}">
        </div>
        <div class="item-author">${item.author}</div>
        <div class="item-title">${item.title}</div>
        <div class="act">
          <button>Зберегти</button>
        </div>
      `;
      document.getElementById('items').appendChild(divBook);
    });
    const allCards = document.querySelectorAll('.item');
    allCards.forEach((item, index) => {
        if (index > 3) item.style.display = 'none';
    });
  })
  
  
  .catch(error => console.error('Помилка отримання книжок:', error));