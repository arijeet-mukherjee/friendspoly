define([
    'jquery',
    'bootstrap'
], function($, bootstrap) {
    'use strict';

    var methods = {};

    methods.loadContact = function(args) {

        console.log(args);
        this.phonenumber = "+91 91238 67498"
        document.getElementById(args).innerHTML = `
                <div class="about_info_area" style="background-color: #66cc33;">
        
                 <div class="container" style="padding:35px 5px 5px 0px">
        
        
                    <div class="row align-items-left pad2" style="margin-left:20px">
        
        
                   
                    <div class="col-xl-7 col-lg-7">
                        <div class="container">
                            <span class="sc" style="color: #000;font-size:50px; font-weight:bold;">Let's 
                            </span>
                             <span class="sc" style="color: #fff;font-size:50px; font-weight:bold;">package
                             </span>
                             <span class="sc" style="color: #000;font-size:50px; font-weight:bold;">it up.
                             </span>
                             
                        </div>
                        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500"
                            class="about_thumb aos-init aos-animate">
                            <div class="container" style="width:100%;margin-top:10px">
                                <div id="myForm">
                                    <div id="text-span" style="position:inline; margin-top:2px">
                                        <span class="sc" style="color: #fff;font-size:28px; font-weight:normal"></span>
                                        <span class="sc" style="color: #000;font-size:28px; font-weight:bold;"></span></div>
                                    </div>
                                    <div style="position:relative;margin-top:20px;margin-bottom:20px;">
                                        <button type="button" class="btn bg-dark" style="text-align : center; width:55%;background-color:#000">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                            </svg>
                                                        Consult With Us on WhatsApp
                                        </button>
                                    </div>
                                    <div id="text-span" style="position:inline; margin-top:2px">
                                        <span class="sc" style="color: #000;font-size:28px; font-weight:bold">Friends Packaging</span>
                                    </div>
                                    <div style="position:relative;margin-top:20px;margin-bottom:16px;">
                                        <span class="sc" style="color: #fff;font-size:18px; font-weight:normal">16, MM Feeder Rd, opposite KALACHAND High school,<br> SP Paul Pally, Ariadaha, Kolkata, West Bengal 700057</span><br>
                                    </div>
                                    <div id="text-span" style="position:inline; margin-top:2px;margin-bottom:20px">
                                        <span class="sc" style="color: #000;font-size:20px; font-weight:bold;">Mobile : </span>
                                        <a href="tel:+919038448613"><span class="sc" style="color: #fff;font-size:18px; font-weight:normal;">+91 90384 48613</span></a>
                                        <span class="sc" style="color: #fff;font-size:20px; font-weight:normal;"> , </span>
                                        <a href="tel:+918820179479"><span class="sc" style="color: #fff;font-size:18px; font-weight:normal;">+91 88201 79479</span></a>
                                    </div>
                                    <div id="text-span" style="position:inline; margin-top:2px;margin-bottom:20px">
                                        <span class="sc" style="color: #000;font-size:20px; font-weight:bold;">E-mail : </span>
                                        <a href="mailto:xyz@gmail.com"><span class="sc" style="color: #fff;font-size:18px; font-weight:normal;">xyz@gmail.com</span></a>
                                        <span class="sc" style="color: #fff;font-size:20px; font-weight:normal;"> , </span>
                                        <a href="mailto:+xyz@gmail.com"><span class="sc" style="color: #fff;font-size:18px; font-weight:normal;">xyz@gmail.com</span></a>
                                    </div>                                
                            </div>
        
                        </div>
        
                    </div>
                    <div class="col-xl-4 col-lg-5">
                           <div class="showmap" id="showmap" style="width:100%;  margin:5px 0 15px 0">
                           <div class="mapouter"><div class="gmap_canvas"><iframe width="620" height="381" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.34382713743366!2d88.36743651547829!3d22.6659404150143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d72e3f68fb62c2b!2sFriends%20Enterprise%20(Printed%20Pouch%20Manufacturers)!5e0!3m2!1sen!2sin!4v1664109745242!5m2!1sen!2sin" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org">putlocker</a><br><style>.mapouter{position:relative;text-align:right;height:381px;width:320px;}</style><a href="https://www.embedgooglemap.net">how to embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:381px;width:320px;}</style></div></div>
                            </div>
                    </div>
        
                </div>
              </div>
        </div>      
       `;


    };

    methods.show = function(params) {
        console.log("Arijeet");
    };


    return methods;

});