function toggle() {
    let button = document.querySelector('.button'); //за клас с . 
    let divExtra = document.querySelector('#extra'); //за див с #
    
    divExtra.style.display = (divExtra.style.display === 'none'||divExtra.style.display === '') ? 'block' : 'none';
    button.textContent = button.textContent === 'More' ? 'Less' : 'More'
}