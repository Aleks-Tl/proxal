import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// Tippy ========================================================================================================================================================

import tippy from 'tippy.js';

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

// user-profile-favorites close btn ========================================================================================================================================================

if (document.querySelectorAll('.user-profile-favorites').length > 0) {

  const userProfileBtns = document.querySelectorAll('.user-profile-favorites .card__close');

  userProfileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.card__item').style.display = 'none';
    })
  })
}

// Shows passwords ========================================================================================================================================================

if (document.querySelectorAll('.account-details__passwords').length > 0) {

  const iconPassword = document.querySelectorAll('.account-details__passwords span');

  iconPassword.forEach(icon => {
    icon.addEventListener('click', () => {
      if (!icon.classList.contains('show')) {
        icon.classList.add('show');
        icon.previousElementSibling.setAttribute('type', 'text');
      } else {
        icon.classList.remove('show');
        icon.previousElementSibling.setAttribute('type', 'password');
      }
    })
  })
}

// Verifications and registrations display none images ========================================================================================================================================================

if (document.querySelectorAll('.business-form__verifications-brands').length > 0) {

  const closeBtns = document.querySelectorAll('.business-form__verifications-brands-item button');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.business-form__verifications-brands-item').style.display = 'none';
    })
  })
}

// Style outline for radio buttons ========================================================================================================================================================

if (document.querySelectorAll('.checkout__radio').length > 0) {
  const inputsRadio = document.querySelectorAll('.checkout__label');

  for (let i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].addEventListener('click', function() {
      let current = document.querySelectorAll(".border");

      if (current.length > 0) {
        current[0].classList.remove('border');
      }
      this.className += " border";
    })
  }
}

// Tippy ========================================================================================================================================================

tippy('[data-tippy-content]');

// Mask for credit card ========================================================================================================================================================


if (document.querySelectorAll('.checkout').length > 0) {
    let ccNumberInput = document.querySelector('.cc-number-input'),
    ccNumberPattern = /^\d{0,16}$/g,
    ccNumberSeparator = " ",
    ccNumberInputOldValue,
    ccNumberInputOldCursor,

    ccExpiryInput = document.querySelector('.cc-expiry-input'),
    ccExpiryPattern = /^\d{0,4}$/g,
    ccExpirySeparator = "/",
    ccExpiryInputOldValue,
    ccExpiryInputOldCursor,

    ccCVCInput = document.querySelector('.cc-cvc-input'),
    ccCVCPattern = /^\d{0,3}$/g,

    mask = (value, limit, separator) => {
      var output = [];
      for (let i = 0; i < value.length; i++) {
        if ( i !== 0 && i % limit === 0) {
          output.push(separator);
        }

        output.push(value[i]);
      }

      return output.join("");
    },
    unmask = (value) => value.replace(/[^\d]/g, ''),
    checkSeparator = (position, interval) => Math.floor(position / (interval + 1)),
    ccNumberInputKeyDownHandler = (e) => {
      let el = e.target;
      ccNumberInputOldValue = el.value;
      ccNumberInputOldCursor = el.selectionEnd;
    },
    ccNumberInputInputHandler = (e) => {
      let el = e.target,
          newValue = unmask(el.value),
          newCursorPosition;

      if ( newValue.match(ccNumberPattern) ) {
        newValue = mask(newValue, 4, ccNumberSeparator);

        newCursorPosition =
          ccNumberInputOldCursor - checkSeparator(ccNumberInputOldCursor, 4) +
          checkSeparator(ccNumberInputOldCursor + (newValue.length - ccNumberInputOldValue.length), 4) +
          (unmask(newValue).length - unmask(ccNumberInputOldValue).length);

        el.value = (newValue !== "") ? newValue : "";
      } else {
        el.value = ccNumberInputOldValue;
        newCursorPosition = ccNumberInputOldCursor;
      }

      el.setSelectionRange(newCursorPosition, newCursorPosition);

      highlightCC(el.value);
    },
    highlightCC = (ccValue) => {
      let ccCardType = '',
          ccCardTypePatterns = {
            amex: /^3/,
            visa: /^4/,
            mastercard: /^5/,
            disc: /^6/,

            genric: /(^1|^2|^7|^8|^9|^0)/,
          };

      for (const cardType in ccCardTypePatterns) {
        if ( ccCardTypePatterns[cardType].test(ccValue) ) {
          ccCardType = cardType;
          break;
        }
      }

      let activeCC = document.querySelector('.cc-types__img--active'),
          newActiveCC = document.querySelector(`.cc-types__img--${ccCardType}`);

      if (activeCC) activeCC.classList.remove('cc-types__img--active');
      if (newActiveCC) newActiveCC.classList.add('cc-types__img--active');
    },
    ccExpiryInputKeyDownHandler = (e) => {
      let el = e.target;
      ccExpiryInputOldValue = el.value;
      ccExpiryInputOldCursor = el.selectionEnd;
    },
    ccExpiryInputInputHandler = (e) => {
      let el = e.target,
          newValue = el.value;

      newValue = unmask(newValue);
      if ( newValue.match(ccExpiryPattern) ) {
        newValue = mask(newValue, 2, ccExpirySeparator);
        el.value = newValue;
      } else {
        el.value = ccExpiryInputOldValue;
      }
    };

  ccNumberInput.addEventListener('keydown', ccNumberInputKeyDownHandler);
  ccNumberInput.addEventListener('input', ccNumberInputInputHandler);

  ccExpiryInput.addEventListener('keydown', ccExpiryInputKeyDownHandler);
  ccExpiryInput.addEventListener('input', ccExpiryInputInputHandler);

  // Transformation order info ========================================================================================================================================================

  new TransferElements(
    {
      sourceElement: document.querySelector('.checkout__form-order'),
      breakpoints: {
        768: {
          targetElement: document.querySelector('.checkout__card-info'),
          targetPosition: 4
        }
      }
    }
  );
}


// Tabs for business account page ========================================================================================================================================================

const tabButtons = document.querySelectorAll(".tab__links");

    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener("click", function () {
        let tabContent = document.querySelector('#' + tabButtons[i].dataset.tab)
        let allTabContent = document.querySelectorAll(".tab__content");
        let allTabButtons = document.querySelectorAll(".tab__links");

        for (let j = 0; j < allTabContent.length; j++) {
          allTabContent[j].style.display = "none";
        }

        for (let k = 0; k < allTabButtons.length; k++) {
          allTabButtons[k].classList.remove("active");
        }

        tabContent.style.display = "block";
        this.classList.add("active");

      });
    }

    document.querySelector(".tab__links").click();

// Range-slider ========================================================================================================================================================

(function ($) {
  $(document).ready(function () {

     document.querySelectorAll('.range_slider').forEach(el => {
        console.log(el);
        const range = new rSlider({
          target: el,
          step: 1,
          values: {
            min: 0,
            max: 11
          },
          range: false,
          tooltip: false,
          scale: true,
          labels: true,
          set: [5]
        })
      });

    let totalTime = 3000;
    let circle = document.getElementById('circle');
    let timer = totalTime;

    function updateClock() {

      let remainingTime = 0;
      let interval = 1000;
      let maxDashOffset = 125.66;

      function update() {

        if (remainingTime < totalTime) {
          remainingTime += 1;
          let dashOffset = (remainingTime / totalTime) * maxDashOffset;
          circle.style.strokeDashoffset = -dashOffset;

          if (timer > 0) {
            timer -= 1
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            $('.timer').text(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

          } else {
            $('.timer').text('00:00')
          }

        } else {
          clearInterval(clockInterval)
        }

      }

      update();

      let clockInterval = setInterval(update, interval);

    }

    if (circle) {
      updateClock();
    }

  });
})(jQuery);
