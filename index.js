document.getElementById('grayscale-btn').addEventListener('click', function() {
    document.getElementById('img').style.filter = 'grayscale(100%)'
})
document.getElementById('blur-btn').addEventListener('click', function() {
    document.getElementById('img').style.filter = 'blur(3px)'
})
document.getElementById('brightness-btn').addEventListener('click', function() {
    document.getElementById('img').style.filter = 'brightness(30%)'
})
document.getElementById('contrast-btn').addEventListener('click', function() {
    document.getElementById('img').style.filter = 'contrast(150%)'
})
document.getElementById('saturate-btn').addEventListener('click', function() {
    document.getElementById('img').style.filter = 'saturate(400%)'
})