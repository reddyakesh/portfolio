/* ===================================== */
/* TYPING EFFECT */
/* ===================================== */

const text = [

    "Computer Science Student",

    "Aspiring Software Developer",

    "Java Developer",

    "Machine Learning Enthusiast",

    "Problem Solver"

];

let index = 0;

let char = 0;

const typing = document.getElementById("typing-text");

function type(){

    if(char < text[index].length){

        typing.textContent += text[index].charAt(char);

        char++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1800);

    }

}

function erase(){

    if(char > 0){

        typing.textContent = text[index].substring(0,char-1);

        char--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index==text.length){

            index=0;

        }

        setTimeout(type,500);

    }

}

window.addEventListener("load", () => {
    type();
});

/* ===================================== */
/* SCROLL REVEAL */
/* ===================================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements=document.querySelectorAll(

"section,.project-card,.skill-category,.achievement-card,.contact-card"

);

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/* ===================================== */
/* FLOATING HOME SECTION */
/* ===================================== */

const home=document.querySelector(".home-content");

let move=0;

setInterval(()=>{

    move++;

    home.style.transform=`translateY(${Math.sin(move/15)*8}px)`;

},30);

/* ===================================== */
/* BUTTON RIPPLE */
/* ===================================== */

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

button.clientWidth,

button.clientHeight

);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

