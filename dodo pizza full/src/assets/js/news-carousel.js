$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        
        1000:{
            items:1
        }
    }
})