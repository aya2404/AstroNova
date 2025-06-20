document.addEventListener('DOMContentLoaded', () => {
    //  nav toggle================================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');

    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });

    // active link=====================================================
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active-link'));
            link.classList.add('active-link');
            navMenu.classList.remove('show-menu');
        });
    });

    // scroll header=====================================================
    const scrollHeader = () => {
        const header = document.querySelector('.header');
        if (window.scrollY >= 50) {
            header.classList.add('shadow-header');
        } else {
            header.classList.remove('shadow-header');
        }
    };
    window.addEventListener('scroll', scrollHeader);

    // scroll up=============================================================
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        if (window.scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    };
    window.addEventListener('scroll', scrollUp);

    // Swiper for events=========================================================
    const swiper = new Swiper('.event-sweper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            350: {
                slidesPerView: 1,
            },
        },
    });

    // arti modals===========================================================
    const modalLinks = document.querySelectorAll('.more-information');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');

    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // reg modal==================================================================
    const registerLink = document.getElementById('register-link');
    const registerModal = document.getElementById('register-modal');

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'flex';
    });

    // close modals when clicking outside=============================================
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
            registerModal.style.display = 'none';
        }
    });
});