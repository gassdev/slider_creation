var hideSlide = () => {
  var slides = document.querySelectorAll('.slide')
  for (let index = 1; index < slides.length; index++) {
    const slide = slides[index]
    slide.style.display = 'none'
  }
}

var initSlider = () => {
  hideSlide()
}
