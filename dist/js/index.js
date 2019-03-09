new WOW().init();
// $('.owl-carousel').owlCarousel({
//   autoplay: true,
//   animateOut: 'zoomOut',
//   animateIn: 'ZoomIn',
//   items: 1,
//   margin: 30,
//   stagePadding: 30,
//   smartSpeed: 450
// });

// $(window).load(function() {
//   $('#myslideshow').smoothSlides();
// });

$('#myslideshow').smoothSlides({
  effectDuration: 6000,
  effect: 'zoomIn'
});
if (document.querySelector('.img-container')) {
  var mixer = mixitup('.img-container', {
    selectors: {
      control: '[data-mixitup-control]'
    }
  });
}

window.addEventListener('scroll', function() {
  const UIheader = document.querySelector('.header-container');
  if (window.scrollY >= 100) {
    UIheader.classList.add('header-colored');
  } else {
    UIheader.classList.remove('header-colored');
  }
});

const UIlines = document.querySelector('.lines');
const UIheader = document.querySelector('.header-md');
const UIinsideUL = document.querySelector('.md-inside-ul');
const UIdropA = document.querySelector('.drop-a');
function handleClickLines() {
  UIheader.classList.toggle('toggle-header-md');
  UIlines.classList.toggle('toggle-lines');
}
function handleClickDrop(e) {
  // if (e.target.classList.contains('drop-down-i')) {
  // }
  UIinsideUL.classList.toggle('toggle-md-inside-ul');
  e.preventDefault();
}
UIlines.addEventListener('click', handleClickLines);
UIdropA.addEventListener('click', handleClickDrop);
