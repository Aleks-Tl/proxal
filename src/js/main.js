import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// Fixed header ========================================================================================================================================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
})

// Dropdown menu ========================================================================================================================================================

if (document.querySelectorAll('.header .header-account').length > 0) {

  const headerAccount = document.querySelectorAll('.header-account');

  headerAccount.forEach(account  => {

    const btnProfile = account.querySelector('.header-account__dropdown-toggle'),
    btnAvatar = account.querySelector('.header-account__avatar img'),
    btnSpan = account.querySelector('.header-account__dropdown-toggle span');

        btnProfile.addEventListener('click', (e) => {

          btnProfile.classList.toggle('header-account__dropdown-toggle_open');

          window.addEventListener('click', (e) => {
            if (!e.target.classList.contains('header-account__dropdown-toggle_open') && e.target != btnAvatar && e.target != btnSpan) {
              btnProfile.classList.remove('header-account__dropdown-toggle_open');
          }
        })
      })
    })
}


// Transformation btn provider portal ========================================================================================================================================================


const btnPortal = document.querySelector('.header__provider'),
      headerButtons = document.querySelector('.header__buttons'),
      navContainer = document.querySelector('.header__nav');


function transformBtnPortal() {
  if (window.innerWidth <= 768) {
    navContainer.prepend(btnPortal);
  } else {
    headerButtons.prepend(btnPortal)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  transformBtnPortal()
})

window.addEventListener('resize', () => {
  transformBtnPortal()
})

// Choices ========================================================================================================================================================

  const selectHero = document.querySelectorAll('.js-choices');
  const selectService = document.querySelectorAll('.search-service');

  selectService.forEach(select => {
    const choices = new Choices(select, {
      searchEnabled: true,
      itemSelectText: '',
    });
  })

  selectHero.forEach(select => {
    const choices = new Choices(select, {
      placeholder: true,
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
  })


// Get year for copyright ========================================================================================================================================================

if (document.querySelectorAll('.footer').length > 0) {

  const spanForYear = document.querySelector('.year');
  const date = new Date;
  const year = date.getFullYear();

  spanForYear.textContent = year;

}

// Map ========================================================================================================================================================

if (document.querySelectorAll('.map-wrap').length > 0) {

  const mapAddress = document.querySelector('.map-address'),
        closeBtn = document.querySelector('.map-address__close');

  closeBtn.addEventListener('click', () => {
    mapAddress.style.display = 'none';
  })

}

if (document.querySelectorAll('.js-map').length > 0) {
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
      let mapOptions = {
          zoom: 15,
          center: new google.maps.LatLng(46.05616329999999, 14.5062507),
          styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#edebe4"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d1ecc7"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bddddd"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
      };

      let mapElement = document.querySelector('.js-map');

      let map = new google.maps.Map(mapElement, mapOptions);

      let marker = new google.maps.Marker({
          position: new google.maps.LatLng(46.05616329999999, 14.5062507),
          map: map,
          title: 'Snazzy!'
      });
  }
}
