const bttButtons=document.querySelectorAll('.js-btt'),primaryBttButton=document.querySelector('body > .js-btt'),links=document.querySelectorAll('.js-nav a'),years=document.querySelectorAll('.js-year'),backToTop=()=>{scrolls(0)},hideBackToTop=()=>{primaryBttButton&&primaryBttButton.classList.remove('is--shown')},initPrimaryBttButton=()=>{primaryBttButton&&(20<=window.pageYOffset?showBackToTop():hideBackToTop())},showBackToTop=()=>{primaryBttButton&&primaryBttButton.classList.add('is--shown')};window.addEventListener('scroll',()=>{initPrimaryBttButton()}),(()=>{if(bttButtons&&bttButtons.forEach(a=>{a.addEventListener('click',()=>{backToTop()})}),initPrimaryBttButton(),years&&years.forEach(a=>{a.innerText=new Date().getFullYear()}),links){let a=links.length;for(let b=0;b<a;b++){let a=links[b],c=a.getAttribute('href').replace('#','');a.addEventListener('click',a=>{a.preventDefault(),scrolls('.'+c)})}}})();