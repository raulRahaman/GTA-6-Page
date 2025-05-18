document.querySelector('.nav__links').addEventListener('mouseenter', function(el){
    
    if(el.target.classList.contains('.nav__link')) {
            el.target.style.backgroundColor = 'orangered'
            console.log(el.target)
            
        }
})