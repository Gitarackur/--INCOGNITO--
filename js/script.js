

 // Counter 

$('.counter').counterUp({
    delay: 10,
    time: 3000
});



window.onload= setTimeout(()=>{
    let loader= document.querySelector(".loader");
    loader.className += " hidden";
    console.log(loader);
}, 5000)




let Navbar= document.querySelector(".bar");
let sticky= Navbar.offsetTop;

function ScrollMe(){
    if(window.pageYOffset>=sticky){
        Navbar.classList.add("sticky");
        console.log(sticky);
    }else{
        Navbar.classList.remove("sticky");
        console.log(sticky);
    }
}

window.onscroll= ()=>{
    ScrollMe();
}





