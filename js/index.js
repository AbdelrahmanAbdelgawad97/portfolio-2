///////////////////////////////////////////////////////////////////////////  landing Page
let descriptionParagraph = document.querySelector(".photo-part p");

let description = "I'm Front End Designer";

function collrectword(word) {
    let i=0;
    let startInterval = setInterval((e)=>{
        descriptionParagraph.innerHTML+=`${word[i]}`;
        i++
        if (i >= word.length) clearInterval(startInterval);
    },400)
}

collrectword(description);


////////////////////////////////////////////////////////////////////////////  change page

let backGroundImage = document.querySelector(".big-father .photo-part");

// let arrOfImage = ["/photos/9.jpg", "/photos/10.jpg" ,"/photos/3.jpg","/photos/4.webp","/photos/8.jpg","/photos/labtop.jpg"];
let arrOfImage = ["/photos/2.jpg", "/photos/5.jpg" ,"/photos/11.webp","/photos/12jpg.jpg","/photos/13.jpg","/photos/13.webp"];
let i=0;
setInterval(()=>{
    backGroundImage.style.backgroundImage = `url('${arrOfImage[i]}')`;
    i++;
    if (i === arrOfImage.length) i=0
    
},4000)

///////////////////////////////////////////////////////////////////////////  about 

let homeSectopm = document.querySelector(".photo-part");
let Thesection = document.querySelector(".about");
let skillsSection = document.querySelector(".skills");
let projectsSection = document.querySelector(".projects");
let contactsSection = document.querySelector(".cards");

let allLists = document.querySelectorAll(".side-bar ul li");



let arrofSections = []
let arrofInputsValue = []

allLists.forEach(part => {
    arrofInputsValue.push(part.textContent)
})


arrofSections.push(homeSectopm);
arrofSections.push(Thesection);
arrofSections.push(skillsSection);
arrofSections.push(projectsSection);
arrofSections.push(contactsSection);

let textContent = document.querySelector(".text");

////////////////////////////////////////////////////////////////////////////////////////////  skills

let huntedPart = document.querySelectorAll(".bar-chart .content .skill span");

let moveToUp = document.querySelector(".move-uo");

window.onscroll = function () {

    if (window.scrollY >= Thesection.offsetTop-400) {
        textContent.style.opacity= 1;
        textContent.style.top= 0;
    }

    if (window.scrollY >= skillsSection.offsetTop-400) {
        
        huntedPart.forEach(ele=>{
        ele.style.width =`${ele.dataset.skill}`
        } 
        )
    }

    if (window.scrollY > 200) {
        moveToUp.style.top = `${90}%`;
    } else {
        moveToUp.style.top = `${110}%`;
    }


    // function backGroundLists() {

    //     arrofSections.forEach(sec => {

    //             allLists.forEach((list,index) => {

    //                 list.classList.remove("active");
    //                 if (list.textContent === `${arrofInputsValue[index]}`) {
    //                     list.classList.add("active");
    //                 }

    //                 // arrofInputsValue.forEach((partList ,index) => {

    //                 //     console.log(partList);


    //                 //     }
    //                 // })
    //             })
    //         })
        
    // }
    // backGroundLists();




        
    if(window.scrollY >= homeSectopm.offsetTop) {
        allLists.forEach(sec => {
            sec.classList.remove("active");
            if (sec.innerHTML === `<i class="fa-solid fa-house"> </i> Home`) {
                sec.classList.add("active");
            }
        })
    }

    if(window.scrollY >= Thesection.offsetTop-300) {
        allLists.forEach(sec => {
            sec.classList.remove("active");
            if (sec.innerHTML === `<i class="fa-solid fa-user-tie"> </i> About`) {
                sec.classList.add("active");
            }
        })
    }

    if(window.scrollY >= skillsSection.offsetTop-200) {

        allLists.forEach(sec => {

            sec.classList.remove("active");

            if (sec.innerHTML === `<i class="fa-solid fa-chart-column"></i> Skills`) {
                sec.classList.add("active");
            }
        })
    }

    if(window.scrollY >= projectsSection.offsetTop-300) {
        allLists.forEach(sec => {
            sec.classList.remove("active");
            if (sec.innerHTML === `<i class="fa-solid fa-book"> </i>Portfolio`) {
                sec.classList.add("active");
            }
        })
    }

    if(window.scrollY >= contactsSection.offsetTop-300) {
        allLists.forEach(sec => {
            sec.classList.remove("active");
            if (sec.innerHTML === `<i class="fa-solid fa-address-card"> </i>Contact`) {
                sec.classList.add("active");
            }
        })
    }
}

/* ====================================================================================================== dark mood */

let changeMood = document.querySelector(".dark-mood");
let iconMood = document.querySelector(".dark-mood i");

function colors() {
    let bgColor = window.localStorage.getItem("backGrounds");
    let hLetter = window.localStorage.getItem("headLetters");
    let sLetter = window.localStorage.getItem("sideHeadLetters");
    let moodShape = window.localStorage.getItem("shape");
    console.log(moodShape);
    
    
    document.body.style.backgroundColor = `${bgColor}`;
    document.documentElement.style.setProperty("--headerColor",hLetter);
    document.documentElement.style.setProperty("--sideHeaderColor",sLetter);
    iconMood.classList.remove(`fa-moon`);
    iconMood.classList.remove(`fa-sun`);
    iconMood.classList.add(`${moodShape}`);

}
colors();


changeMood.addEventListener("click",function() {
    
    
    if (changeMood.classList.contains("dark")) {

        changeMood.classList.remove("dark");
        changeMood.classList.add("light");

        iconMood.classList.add("fa-sun");
        iconMood.classList.remove("fa-moon");
        
        window.localStorage.setItem("shape","fa-sun");
        window.localStorage.setItem("backGrounds","#333");
        window.localStorage.setItem("headLetters","#ddd");
        window.localStorage.setItem("sideHeadLetters","#ffffff");

        colors();
    } else {
        changeMood.classList.add("dark");
        changeMood.classList.remove("light");
        iconMood.classList.remove("fa-sun");
        iconMood.classList.add("fa-moon");
        
        window.localStorage.setItem("shape","fa-moon");
        window.localStorage.setItem("backGrounds","#ffffff");
        window.localStorage.setItem("headLetters","#222");
        window.localStorage.setItem("sideHeadLetters","#333");

        colors();
        
    }
    
})
