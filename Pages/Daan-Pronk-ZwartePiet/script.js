function openVideoModal() {
    document.getElementById("videoModal").style.display = "flex";
}

function closeVideoModal() {
    document.getElementById("videoModal").style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("videoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleYear(year) {
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

    event.target.classList.toggle('active');
}

let draggedElement = null;

document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('event-card')) {
        draggedElement = e.target;
        e.target.style.opacity = '0.5';
    }
});

document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('event-card')) {
        e.target.style.opacity = '1';
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    const slot = e.target.closest('.timeline-slot');
    
    if (slot && draggedElement) {
        const existingCard = slot.querySelector('.event-card');
        
        if (existingCard) {
            document.getElementById('eventsPool').appendChild(existingCard);
        }
        
        draggedElement.style.opacity = '1';
        slot.appendChild(draggedElement);
        draggedElement = null;
        document.getElementById('timelineResult').innerHTML = '';
    }
});

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
        result.innerHTML = '<p class="result-text">📍 Sleep eerst de kaarten naar de tijdlijn!</p>';
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
    const slots = document.querySelectorAll('.timeline-slot');
    
    allCards.forEach(card => {
        card.classList.remove('correct', 'wrong');
        eventsPool.appendChild(card);
    });
    
    document.getElementById('timelineResult').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
});
