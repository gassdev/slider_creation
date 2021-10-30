var hideSlide = () => {
  var slides = document.querySelectorAll('.slide')
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
