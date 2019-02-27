/*if(document.body.scrollWidth>=900){
    console.log(1);
    document.getElementById("menu").style.display='none';
    document.getElementById("primaryNav").removeAttribute("class");

}
else{
    console.log(2);
    document.getElementById("menu").style.display='block';
    document.getElementById("primaryNav").classList.toggle("hide");

}*/

function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}
