const openAccount = document.querySelectorAll('.signup');
const containerNav = document.querySelector('.header__container')
const modalAccount = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModelbtn = document.querySelector('.btn--close-modal')
const navigationCont = document.querySelector('.navigation')
const navContainer = document.querySelector('.header__container')
const scrollDown = document.querySelector('.scrollDown')
const section = document.querySelector('#section')


/////Display and Close create Account model

const openModel = function(e){
    modalAccount.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModel = function(e){
    modalAccount.classList.add('hidden')
    overlay.classList.add('hidden')
}

openAccount.forEach(signup => {
    signup.addEventListener('click', openModel)
})
overlay.addEventListener('click' , closeModel);
closeModelbtn.addEventListener('click', closeModel)

///////scroll down 
scrollDown.addEventListener('click' , function(e){
   const scrollS =   section.getBoundingClientRect();
//    console.log(scrollS)
//    console.log(e.target.getBoundingClientRect());
   console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);
// window.scrollTo({
//     left:scrollS.left + window.scrollX,
//     top:scrollS.top + window.scrollY,
//     behavior: "smooth",
// })

section.scrollIntoView({behavior : 'smooth'})
})

///////////

navigationCont.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
})
//////fade the navigation link other thna the mouseover

const navHover = function(e){
    if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.header__container').querySelectorAll('.nav__link')
        const image = link.closest('.header__container').querySelector('img')
       const singin = link.closest('.header__container').querySelector('.sign__In')
        siblings.forEach(el =>{
            if(el !== link) el.style.opacity = this;
        })
        image.style.opacity = this;
        singin.style.opacity = this;
    }
}

navContainer.addEventListener('mouseover' , navHover.bind(0.5))
navContainer.addEventListener('mouseout' ,navHover.bind(1))


//////////
const navheight = navigationCont.getBoundingClientRect().height;
const headerContainer = document.querySelector('.header__part')

const stickyNav = function(entries){
    const [entry] = entries;

    //
    //
    if (!entry.isIntersecting) containerNav.classList.add('sticky');
    else containerNav.classList.remove('sticky');
}
const Observer = new IntersectionObserver(stickyNav , {
    root:null,
    threshold:0,
    rootMargin:` -${navheight}px`
})
Observer.observe(headerContainer)

////////translateY

const translateAbove = document.querySelectorAll('.translate')

const translateContenet = function(entries, observer){
    const [entry] = entries;
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('transitionY');
        observer.unobserve(entry.target);
}

const observer = new IntersectionObserver(translateContenet , {
    root:null , 
    threshold:0.5,
})

translateAbove.forEach(cont => {
  observer.observe(cont)
  cont.classList.add('transitionY')
})

//////transition of the trusted client atricls
