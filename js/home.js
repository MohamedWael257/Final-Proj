window.onscroll = function () {
    let about = document.querySelector(".about");
    let aboutcontaintop = about.offsetTop;
    let aboutheight = about.offsetHeight;
    let screenheight = this.innerHeight;
    let scrollaction = this.pageYOffset;
    let anileftcards = document.querySelector(".about .about-left");
    let anirightcards = document.querySelector(".about .about-right");
    //   .................................................*/
    if (scrollaction > (aboutcontaintop + (0.5 * aboutheight) - screenheight)) {
        anileftcards.classList.add("active");
        anirightcards.classList.add("active");

    } else {
        anileftcards.classList.remove("active");
        anirightcards.classList.remove("active");
    }
    ///////////////////////////////////////////////////////
    let our_services = document.querySelector(".our-services");

    let ourservicescontaintop = our_services.offsetTop;
    let ourservicesheight = our_services.offsetHeight;

    let card1 = document.querySelector(".our-services .container-cards .card:nth-child(1)");
    let card2 = document.querySelector(".our-services .container-cards .card:nth-child(2)");
    let card3 = document.querySelector(".our-services .container-cards .card:nth-child(3)");
    let card4 = document.querySelector(".our-services .container-cards .card:nth-child(4)");

    if (scrollaction > (ourservicescontaintop + (0.5 * ourservicesheight) - screenheight)) {
        card1.classList.add("active");
        card2.classList.add("active");
        card3.classList.add("active");
        card4.classList.add("active");

    } else {
        card1.classList.remove("active");
        card2.classList.remove("active");
        card3.classList.remove("active");
        card4.classList.remove("active");
    }
    /////////////////////////////////////////////////////////
    let pricing = document.querySelector(".pricing");

    let pricingcontaintop = pricing.offsetTop;
    let pricingheight = pricing.offsetHeight;

    let anileftcont = document.querySelector(".pricing .cont2 .cont2-left");
    let anirightcont = document.querySelector(".pricing .cont2 .cont2-right");
    //   .................................................*/
    if (scrollaction > (pricingcontaintop + (0.5 * pricingheight) - screenheight)) {
        anileftcont.classList.add("active");
        anirightcont.classList.add("active");

    } else {
        anileftcont.classList.remove("active");
        anirightcont.classList.remove("active");
    }
}