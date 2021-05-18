/* Variables */

const hamburger = document.querySelector('.icon');
const menu = document.getElementById("myLinks");
const mobileNav = document.querySelector('.mobile-nav');
const modalOverlay = document.getElementById('modal-overlay');
const pfCard = document.querySelector('.pf-cards');
const projectImage = document.querySelectorAll('.project-images');
const projectDetailsBtn = document.querySelectorAll('.project-details-btn');

/* Mobile Navigation Event Listeners */

/* These event listners listen for clicks on the hamburger menu and menu items and execute the css fade in and fade out animations. */

hamburger.addEventListener('click', () => {
    if (menu.style.display === "block") {
        mobileNav.classList.add('animate__fadeOut');
    } else {
        menu.style.display = "block";
        mobileNav.classList.add('animate__fadeIn');
    }

    mobileNav.addEventListener('animationend', () => {
        if (mobileNav.classList.contains('animate__fadeIn')) {
            mobileNav.classList.remove('animate__fadeIn');
        } else if (mobileNav.classList.contains('animate__fadeOut')) {
            mobileNav.classList.remove('animate__fadeOut');
            menu.style.display = 'none';
        }
    });
});

mobileNav.addEventListener('click', e => {
    const navItems = mobileNav.querySelectorAll('li a');
    navItems.forEach((li) => {
        if (e.target === li) {
            mobileNav.classList.add('animate__fadeOut');
        }
    });
});

window.addEventListener('click', e => {
    const bars = document.querySelector('.fa-bars');
    if (e.target !== bars) {
      mobileNav.classList.add('animate__fadeOut');
      return;
    }
});

/* Overlay & Image Modal Event Listeners */

/* These event listners listen for clicks on the project images and close icon and then execute the css flip in and flip out animations. */

pfCard.addEventListener('click', e => {
    projectImage.forEach((image, index) => {
        if (e.target === image) {
            modalOverlay.style.display = 'flex';
            modalOverlay.innerHTML = `
                <span class="close-icon">X</span>
                <img class="overlay-project-image" src="img/screen-shots/${projectInfo[index].projectName}.png" alt="Modal Project Image">
            `;
            modalOverlay.classList.add('animate__flipInY');   
        }
    });

    modalOverlay.addEventListener('animationend', () => {
        if (modalOverlay.classList.contains('animate__flipInY')) {
            modalOverlay.classList.remove('animate__flipInY');
        } else if (modalOverlay.classList.contains('animate__flipOutY')) {
            modalOverlay.classList.remove('animate__flipOutY');
            modalOverlay.style.display = 'none';
        }
    });

    const closeIcon = document.querySelector('.close-icon');
    closeIcon.addEventListener('click', () => {
        modalOverlay.classList.add('animate__flipOutY');
    });
});

/* Overlay & Project Details Modal Event Listeners */

/* These event listners reset the css animations. */

pfCard.addEventListener('click', e => {
    projectDetailsBtn.forEach((button, index) => {
        if (e.target === button) {
            modalOverlay.style.display = 'flex';
            modalOverlay.innerHTML = `${projectInfo[index].projectDetails}`;

            modalOverlay.classList.add('animate__fadeIn');
        }
    });

    modalOverlay.addEventListener('animationend', () => {
        if (modalOverlay.classList.contains('animate__fadeIn')) {
            modalOverlay.classList.remove('animate__fadeIn');
        } else if (modalOverlay.classList.contains('animate__fadeOut')) {
            modalOverlay.classList.remove('animate__fadeOut');
            modalOverlay.style.display = 'none';
        }
    });

    const closeIconDetails = document.querySelector('.close');
    closeIconDetails.addEventListener('click', () => {
        modalOverlay.classList.add('animate__fadeOut');
    });
});
