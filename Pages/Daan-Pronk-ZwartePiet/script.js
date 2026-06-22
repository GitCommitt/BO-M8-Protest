function openVideoModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoPlayer");
    iframe.src = iframe.getAttribute("data-src");
    modal.style.display = "flex";
}

function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoPlayer");
    iframe.src = "";
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closeVideoModal();
    }
}

function toggleYear(year, event) {
    const contentId = 'year-' + year;
    const content = document.getElementById(contentId);
    const buttons = document.querySelectorAll('.timeline-button');
    const contents = document.querySelectorAll('.timeline-content');

    contents.forEach(item => {
        if (item.id !== contentId) {
            item.classList.remove('active');
        }
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    content.classList.toggle('active');
    if (event && event.currentTarget) {
        event.currentTarget.classList.toggle('active');
    }
}

let selectedCard = null;

document.addEventListener('DOMContentLoaded', function () {
    const eventsPool = document.getElementById('eventsPool');
    const slots = document.querySelectorAll('.timeline-slot');

    function handlePoolInteraction(e) {
        const card = e.target.closest('.event-card');
        if (card) {
            e.preventDefault();
            selectCard(card);
        } else if (selectedCard) {
            e.preventDefault();
            eventsPool.appendChild(selectedCard);
            selectedCard.classList.remove('selected');
            selectedCard = null;
            document.getElementById('timelineResult').innerHTML = '';
        }
    }

    eventsPool.addEventListener('click', handlePoolInteraction);
    eventsPool.addEventListener('touchstart', handlePoolInteraction, { passive: false });

    slots.forEach(slot => {
        function handleSlotInteraction(e) {
            const card = e.target.closest('.event-card');
            if (card) {
                e.preventDefault();
                e.stopPropagation();
                selectCard(card);
            } else if (selectedCard) {
                e.preventDefault();
                placeCardInSlot(slot);
            }
        }

        slot.addEventListener('click', handleSlotInteraction);
        slot.addEventListener('touchstart', handleSlotInteraction, { passive: false });
    });
});

function selectCard(card) {
    if (selectedCard && selectedCard !== card) {
        selectedCard.classList.remove('selected');
    }

    if (selectedCard === card) {
        selectedCard.classList.remove('selected');
        selectedCard = null;
    } else {
        selectedCard = card;
        selectedCard.classList.add('selected');
    }
}

function placeCardInSlot(slot) {
    if (!selectedCard) return;

    const existingCard = slot.querySelector('.event-card');
    if (existingCard) {
        document.getElementById('eventsPool').appendChild(existingCard);
    }

    slot.appendChild(selectedCard);
    selectedCard.classList.remove('selected');
    selectedCard = null;
    
    document.getElementById('timelineResult').innerHTML = '';
}

function checkTimeline() {
    const slots = document.querySelectorAll('.timeline-slot');
    let correct = 0;
    let total = 0;
    
    slots.forEach(slot => {
        const card = slot.querySelector('.event-card');
        if (card) {
            total++;
            const cardYear = card.getAttribute('data-year');
            const slotYear = slot.getAttribute('data-year');
            
            card.classList.remove('correct', 'wrong');
            if (cardYear === slotYear) {
                correct++;
                card.classList.add('correct');
            } else {
                card.classList.add('wrong');
            }
        }
    });
    
    const result = document.getElementById('timelineResult');
    
    if (total === 0) {
        result.innerHTML = '<p class="result-text">📍 Klik eerst op een kaart en daarna op een vakje!</p>';
        return;
    }
    
    if (correct === total && total === 4) {
        result.innerHTML = '<p class="result-text success">🎉 Perfect! Alles staat in de juiste volgorde!</p>';
    } else if (correct === total) {
        result.innerHTML = `<p class="result-text success">✓ Correct!</p>`;
    } else {
        result.innerHTML = `<p class="result-text error">✗ ${correct} van ${total} juist. Probeer opnieuw!</p>`;
    }
}

function resetTimeline() {
    const eventsPool = document.getElementById('eventsPool');
    const allCards = document.querySelectorAll('.event-card');
    
    if (selectedCard) {
        selectedCard.classList.remove('selected');
        selectedCard = null;
    }

    allCards.forEach(card => {
        card.classList.remove('correct', 'wrong');
        eventsPool.appendChild(card);
    });
    
    document.getElementById('timelineResult').innerHTML = '';
}