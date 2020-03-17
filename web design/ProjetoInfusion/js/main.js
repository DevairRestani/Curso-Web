(function(){
    let body = document.querySelector("body");

    body.classList.remove('no-js');
    body.classList.add('js');

    let menu = new Menu({
        container: '.headerNav',
        toggleBtn: '.headerBtnMenu',
        widthEnabled: 1024
    });

    let carousel = new Carousel({
        container: '.slideShow',
        itens: 'figure', 
        btnPrev: '.prev',
        btnNext: '.next'
    });
})();