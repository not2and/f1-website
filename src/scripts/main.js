// This file contains the JavaScript for adding interactivity to the F1 website.

document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute('href');

            fetch(targetPage)
                .then(response => response.text())
                .then(html => {
                    document.querySelector('main').innerHTML = html;
                    window.history.pushState({ path: targetPage }, '', targetPage);
                })
                .catch(error => console.error('Error loading page:', error));
        });
    });

    window.addEventListener('popstate', (event) => {
        if (event.state) {
            fetch(event.state.path)
                .then(response => response.text())
                .then(html => {
                    document.querySelector('main').innerHTML = html;
                })
                .catch(error => console.error('Error loading page:', error));
        }
    });
});