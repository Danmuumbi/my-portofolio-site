function hoverEffect(element) {
    element.style.backgroundColor = '#f8f9fa';
    element.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
    element.style.transform = 'scale(1.05)';
}

function removeEffect(element) {
    element.style.backgroundColor = '';
    element.style.boxShadow = '';
    element.style.transform = '';
}

function hoverEffect(element) {
    element.style.transform = 'scale(1.05)';
    element.style.backgroundColor = '#f8f9fa';
}

function removeEffect(element) {
    element.style.transform = 'scale(1)';
    element.style.backgroundColor = '#fff';
}
