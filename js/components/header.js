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