async function loadCardsData() {
    try {
        const response = await fetch('./info.json');

        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }

        const cardsData = await response.json();

        renderCards(cardsData);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

function renderCards(cards) {
    const cardsContainer = document.getElementById('cards-container');

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.alt;

        const p = document.createElement('p');
        p.textContent = card.text;

        cardElement.appendChild(img);
        cardElement.appendChild(p);

        cardsContainer.appendChild(cardElement);
    });
}

loadCardsData();
