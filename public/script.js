const navSlide = () => {
    const mobileview = document.querySelector('.mobileview');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

    mobileview.addEventListener('click' , () => {
   
        // This is used to toggle the navigation bar in mobile view
        nav.classList.toggle('nav-active');
    
        // This animates the links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
             console.log(index / 7);
        });

        // This animates the 3 bars
        mobileview.classList.toggle('icon');

    });
}

navSlide();


function openList1() {
    var list = document.getElementById("ollist");

    if (list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
}



