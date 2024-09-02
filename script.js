function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const  icon = document.querySelector(".hamburger-icon ")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    

}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('desktop-nav')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', blurHeader)