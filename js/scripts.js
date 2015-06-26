// Stuff for nav
nav = {};
nav.button = $('.navButton');
// Overlay stuff
overlay ={};
overlay.background = $('.overlay');
overlay.list =$('.navContent li');
$(document).ready(function() {
    nav.button.on('click', function() {
        nav.button.toggleClass('active');
	        overlay.background.fadeToggle(1000);
	        overlay.list.slideToggle(1100);
    });
});
