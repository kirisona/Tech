
 (function ($) {
  "use strict";

  $('.ba-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinity: true,
      autoplay: true,
      speed: 1300
  });

//mobile navigation

  $(".nav").click(function() {
    
    $(".menu").toggleClass('menu--open');

    $('section').click(function (e){ 
      var div = $(".menu");
      if ($('.menu--open').length && !div.is(e.target)
          && div.has(e.target).length === 0) {
        div.removeClass('menu--open');
      }
    });
  });

  $('.menu a').on('click', function(){
    if ($(this).closest('.menu').hasClass('menu--open')){
      $(".menu").toggleClass('menu--open');
    }
    
  })

var lastId,
    topMenu = $(".ba-header"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find(".menu a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

$(window).scroll(function(){
  var fromTop = $(this).scrollTop()+topMenuHeight;
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  
  if (lastId !== id) {
      lastId = id;
      menuItems
        .removeClass("active")
        .end().parent().find("[href='#"+id+"']").addClass("active");
  }                   
});

// modal

var openModal = function(){
  $('.modal').css('display', 'flex');
}

var closeModal = function(){
  $('.modal').css('display', 'none');
}

$('#register-btn').click(function(e) {
  e.preventDefault();
  openModal();
});

$('.modal').on('click', function(e) {
  e.preventDefault();
      let modal = $(".modal-content");
      if (!modal.is(e.target)
          && modal.has(e.target).length === 0) {
            closeModal();
      }
});

//math

  const TICKET_PRICE = 100;
  const MAX_TICKETS_COUNT = 10;
  var counter = $('#tickets_count');
  var total_price = $('#total_price');
  $('#count_plus').click(function (e) {
    var tickets_count = Math.min(Math.max(parseInt(counter.val()) || 0, 0), MAX_TICKETS_COUNT);
    if (tickets_count < MAX_TICKETS_COUNT) {
      tickets_count++;
      counter.val(tickets_count);
      total_price.html(tickets_count * TICKET_PRICE);
      onCartCountChange();
    }
    e.preventDefault();
  });
  $('#count_minus').click(function (e) {
    var tickets_count = Math.min(Math.max(parseInt(counter.val()) || 0, 0), MAX_TICKETS_COUNT);
    if (tickets_count > 0) {
      tickets_count--;
      counter.val(tickets_count);
      total_price.html(tickets_count * TICKET_PRICE);
      onCartCountChange();
    }
    e.preventDefault();
  });
  $('#tickets_count').keyup(function (e) {
      var tickets_count = Math.min(Math.max(parseInt(counter.val()) || 0, 0), MAX_TICKETS_COUNT);
      if (tickets_count >= 0) {
        total_price.html(tickets_count * TICKET_PRICE);
        onCartCountChange();
      } else {
        e.preventDefault();
      }
  });
 
})(jQuery);

function onCartCountChange() {
  console.log('onCartCountChange');
  $('#register_btn').css('background-color', 'red');
}

var map;

function initMap() {
        var myLatLng = {lat: 50.026559, lng: 36.22025};
      
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatLng,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#9013fe"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#9013fe"
                },
                {
                  "weight": 0.5
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
        });
      
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
        });
}

const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB29GFItZiDCx4QqCTDLLAOG30ryMUMxik&callback=initMap';
document.head.appendChild(googleMapsScript);
