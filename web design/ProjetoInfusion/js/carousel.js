function Carousel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens;

    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev;
    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext;

    let _this = this;
    let currentSlide = 0;

    init();

    function init(){
        let show = _this.container.querySelectorAll('.show');

        Array.prototype.forEach.call(show, function(item){
            item.classList.remove('show');
        });

        _this.itens[0].classList.add('show');
        _this.btnNext.removeAttribute('style');
        _this.btnPrev.removeAttribute('style');

        addListeners();

    }

    function addListeners(){
        _this.btnNext.addEventListener('click', showNextSlide);
        _this.btnPrev.addEventListener('click', showPrevSlide);
    }

    function showNextSlide(){
        currentSlide++;
        showSlide();
    }

    function showPrevSlide(){
        currentSlide--;
        showSlide();
    }

    function showSlide(){
        let qtd = _this.itens.length;
        let slide = currentSlide % qtd;
        slide = Math.abs(slide);

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }

}