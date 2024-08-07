
const list = document.querySelectorAll('.dom img');
let slideI =0;
let intV =null;
intVslider();
function intVslider() {
    list[slideI].classList.add("displaySlide");
    intV = setInterval(next, 5000);
}
function showSlide(i){
    if (i>=list.length) {
        slideI = 0
        
    } else if(i <0){
        slideI = list.length -1 ;
    }


    list.forEach(list =>{
        list.classList.remove("displaySlide");
    })
    list[slideI].classList.add("displaySlide")

}
function next() {
    slideI++;
    showSlide(slideI);
    
}
function back() {
    clearInterval(intV);
    slideI--;
    showSlide(slideI);
    
}
function goRight() {
    
}