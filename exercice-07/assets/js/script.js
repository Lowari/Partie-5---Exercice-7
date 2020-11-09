const paragraph = document.querySelector('p');

window.addEventListener('scroll', function() {
    paragraph.setAttribute('class', 'zoom');
})