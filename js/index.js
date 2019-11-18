import "./import-jquery";
import Headroom from "headroom.js";

var theNav = document.querySelector("nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(theNav);
// initialise
headroom.init();


const mobileMenu = $("#nav-mobile");
const mobileMenuItems = $("ul.nav-items");
const linkItem = $(".nav-item a")
mobileMenu.click(function(){
   mobileMenuItems.toggleClass("show-menu");
   $(".mobile-init").toggleClass("lock-body");
   $("nav").toggleClass("bg-primary");
   $("#nav-icon2").toggleClass('open');
});

linkItem.click(function(){
  mobileMenuItems.removeClass("show-menu");
   $(".mobile-init").removeClass("lock-body");
   $("nav").removeClass("bg-primary");
   $("#nav-icon2").removeClass('open');
});

var accordion = (function(){
  
   var $accordion = $('.js-accordion');
   var $accordion_header = $accordion.find('.js-accordion-header');
   var $accordion_item = $('.js-accordion-item');
  
   // default settings 
   var settings = {
     // animation speed
     speed: 400,
     
     // close all other accordion items if true
     oneOpen: false
   };
     
   return {
     // pass configurable object literal
     init: function($settings) {
       $accordion_header.on('click', function() {
         accordion.toggle($(this));
       });
       
       $.extend(settings, $settings); 
       
       // ensure only one accordion is active if oneOpen is true
       if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
         $('.js-accordion-item.active:not(:first)').removeClass('active');
       }
       
       // reveal the active accordion bodies
       $('.js-accordion-item.active').find('> .js-accordion-body').show();
     },
     toggle: function($this) {
             
       if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
         $this.closest('.js-accordion')
                .find('> .js-accordion-item') 
                .removeClass('active')
                .find('.js-accordion-body')
                .slideUp()
       }
       
       // show/hide the clicked accordion item
       $this.closest('.js-accordion-item').toggleClass('active');
       $this.next().stop().slideToggle(settings.speed);
     }
   }
 })();
 
 $(document).ready(function(){
   accordion.init({ speed: 300, oneOpen: true });
 });

 if($(window).width() > 1000) {
  $(function() {
    var picsLength = $("#slide-container").children('.slide-element');
    if (picsLength.length > 1) {
        setInterval( function() {
            var active = $("#slide-container .slide-element.active");
            var next = active.next().length ? active.next() : $("#slide-container .slide-element:first");
            active.addClass('last-active');
            next.css( { opacity: 0.0} ).addClass('active').animate( { opacity : 1.0}, 1000, function() {
            active.removeClass('active last-active');
        } );
    }, 4000);
    }
  });
  
  $(function() {
    var listLength = $(".keunggulan-list").children('.keunggulan-item');
    if (listLength.length > 1) {
        setInterval( function() {
            var active = $(".keunggulan-list .keunggulan-item.active");
            var next = active.next().length ? active.next() : $(".keunggulan-list .keunggulan-item:first");
            active.removeClass('active');
            next.addClass('active');
    }, 4000);
    }
  });
 }

 // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

 var mkrMarker = L.icon({
  iconUrl: 'img/marker.png',

  iconSize:     [48, 48], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var mymap = L.map('station-map').setView([-6.188366, 106.814125], 13);
var marker = L.marker([-6.188366, 106.814125], {icon: mkrMarker}).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

L.tileLayer('https://api.mapbox.com/styles/v1/rizalondev/ck2qii238058b1cmsjhx359op/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicml6YWxvbmRldiIsImEiOiJjano0NzRtbGowYWJ1M25vOHU5c2I0MTJkIn0.5ofFvKznKfiFyBAIx2C_uA'
}).addTo(mymap);




// https://api.mapbox.com/styles/v1/rizalondev/ck2qii238058b1cmsjhx359op/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicml6YWxvbmRldiIsImEiOiJjano0NzJvMjcwMDhlM2NwMGdqNDNmcGJ0In0.GSZg6WD5afsnHQGoPENsbw
// https://api.mapbox.com/styles/v1/rizalondev/ck2qii238058b1cmsjhx359op/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicml6YWxvbmRldiIsImEiOiJjano0NzJvMjcwMDhlM2NwMGdqNDNmcGJ0In0.GSZg6WD5afsnHQGoPENsbw