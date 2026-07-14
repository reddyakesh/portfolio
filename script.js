// ==============================
// SELECTORS
// ==============================

const navLinks = document.querySelectorAll("nav a");

const sections = document.querySelectorAll("section");

const navbar = document.querySelector("header");

const buttons = document.querySelectorAll("button");

// ==============================
// STICKY NAVBAR
// ==============================

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.style.background = "#020617";

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

    else{

        navbar.style.background = "#111827";

        navbar.style.boxShadow = "none";

    }

});

// ==============================
// ACTIVE NAV LINK
// ==============================

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ==============================
// SMOOTH SCROLL
// ==============================

navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const id = link.getAttribute("href");

        const section = document.querySelector(id);

        section.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==============================
// BACK TO TOP BUTTON
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.bottom="30px";

topButton.style.right="30px";

topButton.style.padding="15px";

topButton.style.borderRadius="50%";

topButton.style.display="none";

topButton.style.cursor="pointer";

topButton.style.background="#38bdf8";

topButton.style.color="white";

topButton.style.border="none";

topButton.style.fontSize="20px";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==============================
// DOWNLOAD RESUME
// ==============================

buttons[0].addEventListener("click",()=>{

    window.open("Resume.pdf");

});

// ==============================
// VIEW PROJECTS
// ==============================

buttons[1].addEventListener("click",()=>{

    document.querySelector("#projects").scrollIntoView({

        behavior:"smooth"

    });

});