// Stuff for nav
$(document).ready(function() {
    nav = {};
    nav.button = $('.navButton');
    // Overlay stuff
    overlay = {};
    overlay.background = $('.overlay');
    overlay.list = $('.navContent li');
    // Function for navs click behavior
    nav.clickMe = function() {
            nav.button.on('click', function() {
                $('body').toggleClass('stopScrolling');
                overlay.background.fadeToggle(500);
                // overlay.list.slideToggle(1000);
                overlay.list.css('transform', 'translateZ(0)');

            });
        }
        // Calling the listener
    nav.clickMe();
    // Stuff for nav end
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
            bio.bioOverlay.addClass('fadeIn').one('animationend', function() {
                $(this).removeClass('fadeIn');
            });
            // Adding the animation class
            bio.sideBar.addClass('bioSideBarOpen').one('animationend', function() {
                // When the animation is finished it will remove to class
                $(this).removeClass('bioSideBarOpen');
            });
        });
    }
    $('.closeSideBar').on('click', function(e) {
        e.preventDefault();
        bio.sideBar.addClass('bioSideBarClose').one('animationend', function() {
            // When the animation is finished it will remove to class
            bio.bioOverlay.fadeOut(500, function() {
                bio.sideBar.removeClass('bioSideBarClose');
            });
        });
        $('body').removeClass('stopScrolling');
    });

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
        form.container.addClass('fadeIn').one('animationend', function() {
            $(this).removeClass('fadeIn');
        });
        form.content.addClass('formOpeningAnimated').one('animationend', function() {
            $(this).removeClass('formOpeningAnimated');
        });
        $('body').addClass('stopScrolling');
    });
    // Form opening end
    form.close.on('click', function(e) {
        e.preventDefault();
        form.content.addClass('formClosingAnimated').one('animationend', function() {
            $(this).removeClass('formClosingAnimated');
        })
        form.container.addClass('fadeOut').one('animationend', function() {
            $(this).removeClass('fadeOut');
            $(this).hide();
        });
        $('body').removeClass('stopScrolling');
    });
});
// Document Ready end
