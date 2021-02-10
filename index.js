const img = document.querySelector("img");
const ratings = document.querySelectorAll("span");
const text = document.querySelector(".text");
const button = document.querySelector("button");
let imgNum = 2;
function color(last){
    let yellow = true;
    ratings.forEach((current) => {
        if( current == this.nextElementSibling || current == last.nextElementSibling ){
            yellow = !yellow;
            
         };    
        if(yellow){
            current.style.color = "yellow"
 
        }else{
            current.style.color = "black"
        }
    })
}


function setColor(){
    ratings.forEach(current => current.removeEventListener("mouseleave", out));
    ratings.forEach(current => current.removeEventListener("mouseenter", color));
        color(this);  
    text.innerHTML = `<p>You have rated ${this.dataset.id}</p>`

}

function out(){
    ratings.forEach(current => current.style.color ="black" )
};

function next(){
        if(imgNum >= 3){
            imgNum = 1;
            img.src = `${imgNum}.jpg`;
        } else{
            imgNum++
            img.src = `${imgNum}.jpg`;
        

        }  
        ratings.forEach(current => current.style.color = " black")
        
        ratings.forEach(current => current.addEventListener("mouseenter", color));
        ratings.forEach(current => current.addEventListener("mouseleave", out));
        text.innerHTML = `<p>Please Rate</p>`
}

button.addEventListener("click", next);
ratings.forEach(current => current.addEventListener("mouseenter", color));
ratings.forEach(current => current.addEventListener("mouseleave", out));
ratings.forEach(current => current.addEventListener("click", setColor))