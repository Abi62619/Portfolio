const resumeLists = document.querySelectorAll('.resume-list'); 
const resumeBoxes = document.querySelectorAll('.resume-box'); 

const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box'); 
const sections = document.querySelectorAll('.section')

// Resume Tabs
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active'); 
        list.classList.add('active'); 

        document.querySelector('.resume-box.active').classList.remove('active'); 
        resumeBoxes[idx].classList.add('active'); 
    }); 
});

// Navigation & 3D Cube Rotation
navs.forEach((item, idx) => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-list li.active')?.classList.remove('active'); 
        item.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active'); 
        sections[idx].classList.add('active'); 

        const array = Array.from(sections); 
        const arrSecs = array.slice(1, -1); 
        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });
        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact');
        }
    });
});