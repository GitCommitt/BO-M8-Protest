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

document.addEventListener('DOMContentLoaded', function () {
});
