document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-btn');
    const hiddenProjects = document.querySelectorAll('.project-box[style*="display: none"]');
    let showMore = true;

    toggleButton.addEventListener('click', () => {
        hiddenProjects.forEach(project => {
            project.style.display = showMore ? 'block' : 'none';
        });
        toggleButton.textContent = showMore ? 'Show Less' : 'Show More';
        showMore = !showMore;
    });
});

document.getElementById('rmore').onclick = function() {
    window.location.href = 'index.html';
};

document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (name === '' || email === '' || feedback === '') {
        e.preventDefault();
        alert('All fields are required!');
    } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


