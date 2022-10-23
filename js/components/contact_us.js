define([
    'jquery',
    'bootstrap'
], function($,bootstrap) {
    'use strict';

    var methods={};
    
    methods.loadContact = function (args) {

                console.log(args);
                this.phonenumber="+91 91238 67498"
                document.getElementById(args).innerHTML=`
                <div class="about_info_area" style="background-color: #66cc33;">
        
                 <div class="container" style="padding:35px 5px 5px 0px">
        
        
                    <div class="row align-items-left pad2" style="margin-left:20px">
        
        
                   
                    <div class="col-xl-7 col-lg-7">
                        <div class="container">
                            <span class="sc" style="color: rgb(255, 15, 123);font-size:50px; font-weight:bold;">Let's 
                            </span>
                             <span class="sc" style="color: #fff;font-size:50px; font-weight:bold;">spice
                             </span>
                             <span class="sc" style="color: rgb(255, 15, 123);font-size:50px; font-weight:bold;">it up.
                             </span>
                             
                        </div>
                        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500"
                            class="about_thumb aos-init aos-animate">
                            <div class="container" style="width:85%">
                                
                            </div>
        
                        </div>
        
                    </div>
                    <div class="col-xl-4 col-lg-5">
        
                        
                        <div class="about_text aos-init aos-animate" data-aos="fade-right" data-aos-offset="300"
                            data-aos-easing="ease-in-sine" style="padding:15px;">
                            <div>
                                <span class="sc" style="color: rgb(255, 15, 123);font-size:40px; font-weight:bold;">Address
                                </span>
                            
                            </div>
                            
                        </div>   
                           
                           <div class="showmap" id="showmap" style="width:100%;  margin:65px 0 0 0">
                           <div class="mapouter"><div class="gmap_canvas"><iframe width="320" height="381" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.34382713743366!2d88.36743651547829!3d22.6659404150143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d72e3f68fb62c2b!2sFriends%20Enterprise%20(Printed%20Pouch%20Manufacturers)!5e0!3m2!1sen!2sin!4v1664109745242!5m2!1sen!2sin" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org">putlocker</a><br><style>.mapouter{position:relative;text-align:right;height:381px;width:320px;}</style><a href="https://www.embedgooglemap.net">how to embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:381px;width:320px;}</style></div></div>
                            </div>
                    </div>
        
                </div>
              </div>
        </div>      
       `;
    
                
    };

    methods.show=function(params) {
        console.log("Arijeet");
    };


    return methods;
    
});