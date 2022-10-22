/*
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [53.891800, 27.573168],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 18
    });
}
*/
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.891800, 27.573168],
            zoom: 16,
            //controls: ['smallMapDefaultSet'],
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            //hintContent: 'Собственный значок метки',
            //balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([53.891800, 27.573168], {
            //hintContent: 'Собственный значок метки с контентом',
            //balloonContent: 'А эта — новогодняя',
            //iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map.svg',
            // Размеры метки.
            iconImageSize: [58, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});

$('.home-slider').slick({
  fade: true, 
  arrows: false,
  dots: true, 
})

/*
const btn = document.querySelector('.offer__order');
btn.addEventListener('click', function () {
  btn.classList.toggle('offer__order--active'); 
});
*/
const list = document.querySelectorAll('.offer__order')
      list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('offer__order--active'); });
        item.classList.add('offer__order--active');
       })
    })


$('.reviews-slider').slick({
  //fade: true, 
  arrows: true,
  dots: false, 
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slick-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slick-next.svg" alt=""></button>',
})







  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);


 $('.cart-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  fade: true,
  asNavFor: '.cart-slider__nav'
});
$('.cart-slider__nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.cart-slider__big',
  dots: false,
  //centerMode: true,
  focusOnSelect: true
});



$('.basket__item-number').styler({})