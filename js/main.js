// if ($(window).width() < 1500) {
//     $('#nav-bar .navbar-nav').removeClass('navbar-center');
// } else {
//     $('#nav-bar .navbar-nav').addClass('navbar-center');
// }

// $(window).resize(function() {
//     if ($(window).width() < 1300) {
//         $('.navigation').removeClass('navbar-center');
//     } else {
//         $('.workContainer').addClass('pink-colors');
//     }
// }).resize(); // trigger resize event initially

// jQuery(document).ready(function($) {
//     var alterClass = function() {
//       var ww = document.body.clientWidth;
//       if (ww < 1300) {
//         $('.navbar-nav').removeClass('navbar-center');
//       }
//     };
//     $(window).resize(function(){
//       alterClass();
//     });
//     //Fire it when the page first loads:
//     alterClass();
//   });



//Auto Scroll to id

// $(document).ready(function () {
//     // Read the cookie and if it's defined scroll to id
//     var scroll = $.cookie('scroll');
//     if(scroll){
//         scrollToID(scroll, 1000);
//         $.removeCookie('scroll');
//     }

//     // Handle event onclick, setting the cookie when the href != #
//     $('.nav a').click(function (e) {
//         e.preventDefault();
//         var id = $(this).data('id');
//         var href = $(this).attr('href');
//         if(href === '#'){
//             scrollToID(id, 1000);
//         }else{
//             $.cookie('scroll', id);
//             window.location.href = href;
//         }
//     });

//     // scrollToID function
//     function scrollToID(id, speed) {
//         var offSet = 70;
//         var obj = $('#' + id);
//         if(obj.length){
//           var offs = obj.offset();
//           var targetOffset = offs.top - offSet;
//           $('html,body').animate({ scrollTop: targetOffset }, speed);
//         }
//     }
// });
