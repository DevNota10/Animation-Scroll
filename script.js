

// Controle de addEventListener
const debounce = function(func,wait,immediate){
    let timeout;
    return function(...args){
        const context =this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context,args);
    };
};
const target = document.querySelectorAll('[data-anime]');

const animateClas = 'animate';

//Animação das Section
function animeScroll(){
    const windowTop = window.scrollY  + ((window.innerHeight * 3) / 4); 

    target.forEach((element)=>{
       if((windowTop) > element.offsetTop){
        element.classList.add(animateClas)
       }
       else{
        element.classList.remove(animateClas)
       }
    })
}

animeScroll()

if(target.length){

    window.addEventListener('scroll', debounce(function(){
        animeScroll()
        console.log('foi')
    }, 200));

}
