var slideIndex = 0
var slides = document.querySelectorAll('.slide')

var hideSlide = () => {
  displayDot(slides)
  for (let index = 1; index < slides.length; index++) {
    const slide = slides[index]
    slide.style.display = 'none'
  }
}

var initSlider = () => {
  hideSlide()
}

var displayDot = (sliders) => {
  for (let index = 0; index < sliders.length; index++) {
    const slide = sliders[index]
    var span = document.createElement('span')
    // span.className = 'dot'
    span.setAttribute('class', 'dot')
    document.getElementById('dots').appendChild(span)
  }
}

var showSlide = (index) => {
  let lastSlideIndex = slideIndex
  slideIndex = Math.abs(index) % slides.length
  // console.log(slideIndex)

  // Hide previous slide
  slides[lastSlideIndex].style.display = 'none'

  // Display matched slide of slideIndex position
  slides[slideIndex].style.display = 'block'
}
