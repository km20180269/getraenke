window.addEventListener('load', () => {
    const homeNav = document.getElementById('homeNav');
    const getraenkeNav = document.getElementById('getraenkeNav');
    const slideshowNav = document.getElementById('slideshowNav');
    
    const homeSection = document.getElementById('home');
    const getraenkeSection = document.getElementById('getraenke');
    // const slideshowSection = document.getElementById('slideshow');

    homeNav.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    getraenkeNav.addEventListener('click', () => {
            window.scrollTo({
                top: homeSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
    })

    slideshowNav.addEventListener('click', () => {
            window.scrollTo({
                top: homeSection.clientHeight + getraenkeSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })    
    })
})