
let btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    alert('Если что это сайт начинающего программиста')
})

let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.nav-list')

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');

});


$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: '<img src="Arrow_left.svg">',
  nextArrow: '<img src="Arrow_right.svg">',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
				