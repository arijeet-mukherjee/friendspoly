define([
    'jquery',
    'bootstrap'
], function ($, bootstrap) {
    'use strict';

    var methods = {};

    methods.loadHeader = function (args, tab) {

        console.log(args);

        let phonenumber = "+91 91238 67498"
        document.getElementById(args).innerHTML = `
        <header class="header">
    <div class="store_name image">
      <a href="/" title="Friends Packaging">
        
          <img src="../../assets/img/logo.png" style = "fill:#fff" alt="Friends Packaging">
        
      </a>
    </div>
    
    <ul class="header_icons">
      <li class="open_search"><a href="#"><svg viewBox="0 0 30 30"><path d="M26.1 24.7l-5.9-5.9c1.3-1.6 2-3.6 2-5.8 0-5.1-4.1-9.2-9.2-9.2S3.9 8 3.9 13.1s4.1 9.2 9.2 9.2c2.2 0 4.2-.8 5.8-2l5.9 5.9 1.3-1.5zM5.9 13.1c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2-3.2 7.2-7.2 7.2-7.2-3.2-7.2-7.2z"></path></svg></a></li>
      <li class="open_cart"><a href="/cart"><svg viewBox="0 0 30 30"><path d="M22.7 8c-.9-3.4-4-6-7.7-6S8.2 4.6 7.3 8H2l3 20h20l3-20h-5.3zM15 4c2.6 0 4.8 1.7 5.6 4H9.3c.9-2.3 3.1-4 5.7-4zm8.3 22H6.7L4.3 10H7v3h2v-3h12v3h2v-3h2.7l-2.4 16z"></path></svg><span class="cart_count"><span class="cart_value" style="display:none;">0</span></span></a></li>
      <li class="open_menu"><a href="#" title="Menu"><span></span><span></span><span></span><span></span></a></li>
    </ul>
  </header>`

        /*  <!-- END nav -->; */


    };

    methods.show = function (params) {
        console.log("Arijeet");
    };


    return methods;



});