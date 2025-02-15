function openCard() {
    const card = document.getElementById('card');
    card.style.transform = 'rotateY(180deg)';
}

function closeCard() {
    const card = document.getElementById('card');
    card.style.transform = 'rotateY(0deg)';
}