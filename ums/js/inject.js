window.addEventListener('DOMContentLoaded', () => {
    fetch('../components/header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Header load error:', err));

    fetch('../components/footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Footer load error:', err));
});
