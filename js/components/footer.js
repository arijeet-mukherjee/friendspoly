define([
    'jquery',
    'bootstrap'
], function ($, bootstrap) {
    'use strict';

    var methods = {};

    methods.loadFooter = function (args, tab) {

        console.log(args);

        let phonenumber = "+91 91238 67498"
        document.getElementById(args).innerHTML = `
       <footer class="footer" style="position:relative;">
    
      <ul class="footer_icons">
        
          <li><a title="Instagram" href="https://www.instagram.com/tacoclout"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M22.7 5H7.3C6 5 5 6 5 7.3v15.4C5 24 6 25 7.3 25h15.4c1.3 0 2.3-1 2.3-2.3V7.3C25 6 24 5 22.7 5zM15 11.2c2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8zm7.7 10.7c0 .4-.3.8-.8.8H8.1c-.4 0-.8-.3-.8-.8v-8.5H9c-.1.5-.2 1-.2 1.5 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-.5-.1-1-.2-1.5h1.7v8.5zm0-11.5c0 .4-.3.8-.8.8h-2.3c-.4 0-.8-.3-.8-.8V8.1c0-.4.3-.8.8-.8h2.3c.4 0 .8.3.8.8v2.3z"/></svg></a></li>
        

        

        
          <li><a title="Facebook" href="https://www.facebook.com/tacoclout"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M23.9 5H6.1C5.5 5 5 5.5 5 6.1v17.7c0 .7.5 1.2 1.1 1.2h9.5v-7.7H13v-3h2.6V12c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.2 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6V25h5.1c.6 0 1.1-.5 1.1-1.1V6.1c.1-.6-.4-1.1-1-1.1z"/></svg></a></li>
        
    </ul>
    
    <ul class="footer_pages">
      
      
        <li><a title="View Brands" href="/brands">Brands</a></li>
      
        <li><a title="View Shipping Policy" href="/shipping-policy">Shipping Policy</a></li>
      
        <li><a title="View Returns &amp; Refunds" href="/returns-refunds">Returns & Refunds</a></li>
      
        <li><a title="View Privacy Policy" href="/privacy-policy">Privacy Policy</a></li>
      
        <li><a title="View Become a Dealer" href="/become-a-dealer">Become a Dealer</a></li>
      
      <li><a href="/contact">Contact</a></li>
    </ul>
    
    <div class="disclaimer-text"><strong>Disclaimer:</strong> All manufacturer names, symbols, and descriptions, used in our images and text are used solely for identification purposes only. It is neither inferred nor implied that any item sold by FriendsPolyIndia.com is a product authorized by or in any way connected with our manufacturers displayed on page.</div>
 <br>
    <!-- TrustBox widget - Review Collector -->
<div class="trustpilot-widget" data-locale="en-US">
  <a href="https://www.trustpilot.com/review/tacoclout.com" target="_blank" rel="noopener">Friends Packaging</a>
</div>
<!-- End TrustBox widget --> 
  </footer>`

        /*  <!-- END nav -->; */


    };

    methods.show = function (params) {
        console.log("Arijeet");
    };


    return methods;



});