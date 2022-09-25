define([
    'jquery',
    'popper',
    'slick',
    'imagesloaded',
    'isotope',
    'worldmap',
    'wow',
    'worldmaptopo',
    'mediaelement',
    'bootstrap',
    'header',
    'swiper',
    'smtp',
    'footer',
    'contact_us'

], function ($, popper, slick, imagesloaded, isotype, worldmap, wow, worldmaptopo, mediaelement, bootstrap, header, Swiper, smtp, footer, contact_us) {
    'use strict';
    var map = {};
    $(document).ready(function () {
        header.loadHeader("header");
        footer.loadFooter("footer");

    });

    /* Lazy Loading Images */

    function lazyLoad() {
        var lazyloadImages;
        console.log("Dom created Evnets");

        if ("IntersectionObserver" in window) {
            lazyloadImages = document.querySelectorAll(".lazy");
            var imageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove("lazy");
                        imageObserver.unobserve(image);
                    }
                });
            });

            lazyloadImages.forEach(function (image) {
                imageObserver.observe(image);
            });
        } else {
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll(".lazy");

            function lazyload() {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function () {
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function (img) {
                        if (img.offsetTop < (window.innerHeight + scrollTop)) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
        }
    }

    /* Lazy Loading Images end*/

     /* Testimonial */

     window.onload = function () {
        var testim = document.getElementById("testim"),
            //testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
            testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
            testimLeftArrow = document.getElementById("left-arrow"),
            testimRightArrow = document.getElementById("right-arrow"),
            testimSpeed = 2500,
            currentSlide = 0,
            currentActive = 0,
            testimTimer,
            touchStartPos,
            touchEndPos,
            touchPosDiff,
            ignoreTouch = 10;;
         // Testim Script
         function playSlide(slide) {
              for (var k = 0; k < 4; k++) {
                 testimContent[k].classList.remove("active");
                 testimContent[k].classList.remove("inactive");
                // testimDots[k].classList.remove("active");
             }

             if (slide < 0) {
                 slide = currentSlide = testimContent.length - 1;
             }

             if (slide > testimContent.length - 1) {
                 slide = currentSlide = 0;
             }

             if (currentActive != currentSlide) {
                 testimContent[currentActive].classList.add("inactive");
             }
             testimContent[slide].classList.add("active");
             //testimDots[slide].classList.add("active");

             currentActive = currentSlide;

             clearTimeout(testimTimer);
             testimTimer = setTimeout(function () {
                 playSlide(currentSlide += 1);
             }, testimSpeed)
         }

         testimLeftArrow.addEventListener("click", function () {
             playSlide(currentSlide -= 1);
         })

         testimRightArrow.addEventListener("click", function () {
             playSlide(currentSlide += 1);
         })

        /*  for (var l = 0; l < testimDots.length; l++) {
             testimDots[l].addEventListener("click", function () {
                 playSlide(currentSlide = testimDots.indexOf(this));
             })
         } */

         playSlide(currentSlide);

         // keyboard shortcuts
         document.addEventListener("keyup", function (e) {
             switch (e.keyCode) {
                 case 37:
                     testimLeftArrow.click();
                     break;

                 case 39:
                     testimRightArrow.click();
                     break;

                 case 39:
                     testimRightArrow.click();
                     break;

                 default:
                     break;
             }
         });

         testim.addEventListener("touchstart", function (e) {
             touchStartPos = e.changedTouches[0].clientX;
         });

         testim.addEventListener("touchend", function (e) {
             touchEndPos = e.changedTouches[0].clientX;

             touchPosDiff = touchStartPos - touchEndPos;

             console.log(touchPosDiff);
             console.log(touchStartPos);
             console.log(touchEndPos);


             if (touchPosDiff > 0 + ignoreTouch) {
                 testimLeftArrow.click();
             } else if (touchPosDiff < 0 - ignoreTouch) {
                 testimRightArrow.click();
             } else {
                 return;
             }

         });
         
     }


     /* Testimonial End */

     // Contact Us
     contact_us.loadContact("contact_us");

     /* Added the open close humberger */
     function openCloseNav(){
        document.getElementById("header").addEventListener("click", touchHandler, false);
        document.getElementById("close_overlay").addEventListener("click", touchHandler, false);

        function touchHandler(e) {
            //console.log(e);
            var c = document.querySelectorAll('.overlay');
            //console.log(c[0].className);
            let b = false;
            for (let i = 0; i < c.length; i++) {
                let cN = c[i].className;
                if (cN.includes('open')) {
                    b = true;
                    break;
                }
            }



            let element = document.getElementsByClassName('overlay');
            console.log(element[0].className);
            //  b?elemen.log("remove"):console.log("add");
            if (b) {
                for (let j = 0; j < c.length; j++) {
                    element[j].classList.remove('open');
                    element[j].classList.remove('navigation');
                }

            } else {
                for (let j = 0; j < c.length; j++) {
                    element[j].classList.add('open');
                    element[j].classList.add('navigation');
                }
            }
        }
     }
     openCloseNav();
});