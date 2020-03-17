function Menu(config){
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;
    this.maxWidth = config.widthEnabled ||false;

    let opened = false;

    this.btn.removeAttribute('style');
    this.btn.addEventListener('click', openOrClose);
    
    let _this = this;
    //closeMenu();

    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > _this.maxWidth){
                _this.nav.removeAttribute('style');
                opened = true;
            }else if(!_this.nav.getAttribute('style')){
                closeMenu();
            }
        });
        if(window.innerWidth <= _this.maxWidth){
            closeMenu();
        }
    }

    function openOrClose(){
        if(!opened){
            openMenu()
        }
        else{
            closeMenu();
        } 
        
    }

    function openMenu(){
        let top = _this.nav.getBoundingClientRect().top + 'px';
        let _style = {
            maxHeight: 'calc(100vh - ' + top + ')',
            overflow: 'hidden'
        }

        applyStyle(_style);
        opened = true;
    }

    function closeMenu(){
        let _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        }

        applyStyle(_style);
        opened = false;
    }

    function applyStyle(_style){
        Object.keys(_style).forEach(stl => {
            _this.nav.style[stl] = _style[stl]
        })
    }

}