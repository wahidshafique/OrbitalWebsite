// Stuff for nav
$(document).ready(function() {
   var scrollPosition =0;
   var windowHeight = $(window).height();
   $(window).scroll(function(){
    if($(this).scrollTop() > windowHeight){
        $('.nav').css('background', '#292929')
    } else {
        $('.nav').css('background', 'none');
    }
   });
    $('.nav .navList a').smoothScroll({
        offset: -65,
        autoCoefficient: 2,
        ease: 'ease-out',
        speed: 1000
    });
    nav = {};    
    bio = {};
    // Cache variables 
    bio.learnMore = $('.learnMore');
    bio.bioOverlay = $('.bioOverlay');
    bio.sideBar = $('.bioSideBar');
    bio.closeOverlay = $('.closeSideBar');
    bio.headShot = $('.headShot');
    bio.memberName = $('.memberName');
    bio.memberRole = $('.memberRole');
    bio.smallBio = $('.smallBio');
    // Storing the objects
    bio.james = {
        name: "James Barzegar",
        role: "Web Developer",
        bio: "James likes pie",
        pic: 'http://www.placecage.com/200/300'
    }
    bio.eric = {
        name: "Eric Blanchard",
        role: "Captain",
        bio: "Eric likes cake",
        pic: 'http://www.placecage.com/200/300'
    }
    bio.wahid = {
            name: "Wahid Shafique",
            role: "Something",
            bio: "Wahid hates everything, except Macs, he loves Macs",
            pic: 'http://www.placecage.com/200/300'
        }
        // When you click on the class of learn more display the sidebar with the information pulled from an object
    bio.showBio = function() {
        bio.learnMore.on('click', function(e) {
            e.preventDefault();
            $('body').addClass('stopScrolling');
            // Displays Overlay
            bio.bioOverlay.show();
            bio.bioOverlay.addClass('fadeIn').one('animationend webkitAnimationEnd', function() {
                $(this).removeClass('fadeIn');
            });
            // Adding the animation class
            bio.sideBar.addClass('bioSideBarOpen').one('animationend webkitAnimationEnd', function() {
                // When the animation is finished it will remove to class
                $(this).removeClass('bioSideBarOpen');
            });
        });
    }
    $('.closeSideBar').on('click', function(e) {
        e.preventDefault();
        bio.bioOverlay.addClass('fadeOut').one('animationend webkitAnimationEnd', function() {
            $(this).removeClass('fadeOut');
            $(this).hide();
        });
        $('body').removeClass('stopScrolling');
    });
    // });

    $('.james .learnMore').on('click', bio.showBio(), function() {
        bio.headShot.attr('src', bio.james['pic']);
        bio.memberName.text(bio.james['name']);
        bio.memberRole.text(bio.james['role']);
        bio.smallBio.text(bio.james['bio']);
    });
    $('.eric .learnMore').on('click', bio.showBio(), function() {
        bio.headShot.attr('src', bio.eric['pic']);
        bio.memberName.text(bio.eric['name']);
        bio.memberRole.text(bio.eric['role']);
        bio.smallBio.text(bio.eric['bio']);
    });
    $('.wahid .learnMore').on('click', bio.showBio(), function() {
        bio.headShot.attr('src', bio.wahid['pic']);
        bio.memberName.text(bio.wahid['name']);
        bio.memberRole.text(bio.wahid['role']);
        bio.smallBio.text(bio.wahid['bio']);
    });

    // Calling show bio
    form = {};
    form.emailButton = $('.emailButton');
    form.container = $('.emailForm');
    form.content = $('.formContainer')
    form.close = $('.formClose');
    // Caching the vars
    form.emailButton.on('click', function(e) {
        e.preventDefault();
        form.container.show()
        form.container.addClass('fadeIn').one('animationend webkitAnimationEnd', function() {
            $(this).removeClass('fadeIn');
        });
        $('body').addClass('stopScrolling');
    });
    // Form opening end
    form.close.on('click', function(e) {
        e.preventDefault();
        form.container.addClass('fadeOut').one('animationend webkitAnimationEnd', function() {
            $(this).removeClass('fadeOut');
            $(this).hide();
        });
        $('body').removeClass('stopScrolling');
    });
});
// Document Ready end
