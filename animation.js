document.addEventListener( 'DOMContentLoaded', () => {
  // FIRST IMAGE

  function reloader () {

    const image1 = document.getElementById( 'image1' )

    function fadeIn () {
      let opacity = 0
      image1.style.display = 'block'

      const intervalId = setInterval( () => {
        if ( opacity < 1 ) {
          opacity += 0.05
          image1.style.opacity = opacity
        } else {
          clearInterval( intervalId )

          setTimeout( () => {
            fadeOut()
          }, 1500 )
        }
      }, 20 )
    }

    function fadeOut () {
      let opacity = 1

      const intervalId = setInterval( () => {
        if ( opacity > 0 ) {
          opacity -= 0.05
          image1.style.opacity = opacity
        } else {
          clearInterval( intervalId )


          // image1.style.display = 'none';
        }
      }, 20 )
    }

    setTimeout( () => {
      fadeIn()
    }, 1000 )

    // 2ND IMAGE

    const image2 = document.getElementById( 'image2' )

    function slideIn () {
      let position = -100

      const intervalId = setInterval( () => {
        if ( position < 0 ) {
          position += 5
          image2.style.left = `${position}%`
        } else {
          clearInterval( intervalId )

          setTimeout( () => {
            popAnimation()
          }, 2200 )

        }
      }, 20 )
    }

    function popAnimation () {
      let scale = 1

      const intervalId = setInterval( () => {
        if ( scale > 0 ) {
          scale -= 0.05
          image2.style.transform = `scale(${scale})`
        } else {
          clearInterval( intervalId )
        }
      }, 20 )
    }

    setTimeout( () => {
      slideIn()
    }, 1100 )

    // THIRD IMAGE

    const image3 = document.getElementById( 'image3' )

    function slideInFromRight () {
      let position = 100

      const intervalId = setInterval( () => {
        if ( position > 0 ) {
          position -= 2.8
          image3.style.left = `${position}%`
        } else {
          clearInterval( intervalId )

          setTimeout( () => {
            fadeOut2()
          }, 10000 )
        }
      }, 20 )
    }

    function fadeOut2 () {
      let opacity = 1

      const intervalId = setInterval( () => {
        if ( opacity > 0 ) {
          opacity -= 0.05
          image3.style.opacity = opacity
        } else {
          clearInterval( intervalId )
          // image3.style.display = 'none'
        }
      }, 20 )
    }

    setTimeout( () => {
      slideInFromRight()
    }, 3000 )

    // FOURTH IMAGE

    const image4 = document.getElementById( 'image4' )


    function fadeIn2 () {
      let opacity = 0
      image4.style.display = 'block'

      const intervalId = setInterval( () => {
        if ( opacity < 1 ) {
          opacity += 0.05
          image4.style.opacity = opacity
        } else {
          clearInterval( intervalId )

          setTimeout( () => {
            fadeOut3()
          }, 10000 )
        }
      }, 20 )
    }

    function fadeOut3 () {
      let opacity = 1

      const intervalId = setInterval( () => {
        if ( opacity > 0 ) {
          opacity -= 0.05
          image4.style.opacity = opacity
        } else {
          clearInterval( intervalId )


          // image1.style.display = 'none';
        }
      }, 20 )
    }

    setTimeout( () => {
      fadeIn2()
    }, 4500 )

    // IMAGE 5

    const image5 = document.getElementById( 'image5' )

    function fadeIn3 () {
      let opacity = 0
      image5.style.display = 'block'

      const intervalId = setInterval( () => {
        if ( opacity < 1 ) {
          opacity += 0.05
          image5.style.opacity = opacity
        } else {
          clearInterval( intervalId )}
        setTimeout( () => {
          fadeOut4()
        }, 10000 )
      }, 20 )
    }

    function fadeOut4 () {
      let opacity = 1

      const intervalId = setInterval( () => {
        if ( opacity > 0 ) {
          opacity -= 0.05
          image5.style.opacity = opacity
        } else {
          clearInterval( intervalId )


          // image1.style.display = 'none';
        }
      }, 20 )
    }

    setTimeout( () => {
      fadeIn3()
    }, 5000 )

    // IMAGE 6

    const image6 = document.getElementById( 'image6' )

    function slideIn2 () {
      let position = -100

      const intervalId = setInterval( () => {
        if ( position < 0 ) {
          position += 5
          image6.style.left = `${position}%`
        } else {
          clearInterval( intervalId )
          setTimeout( () => {
            fadeOut5()
          }, 10000 )
        }
      }, 20 )
    }

    function fadeOut5 () {
      let opacity = 1

      const intervalId = setInterval( () => {
        if ( opacity > 0 ) {
          opacity -= 0.05
          image6.style.opacity = opacity
        } else {
          clearInterval( intervalId )


          // image1.style.display = 'none';
        }
      }, 20 )
    }

    setTimeout( () => {
      slideIn2()
    }, 5200 )

    // IMAGE 7

    const image7 = document.getElementById( 'image7' )

    function fadeIn4 () {
      let opacity = 0
      image7.style.display = 'block'

      const intervalId = setInterval( () => {
        if ( opacity < 1 ) {
          opacity += 0.05
          image7.style.opacity = opacity
        } else {
          clearInterval( intervalId )
        }
      }, 20 )
    }

    setTimeout( () => {
      fadeIn4()
    }, 5400 )



  }
  reloader()


  const reloadButton = document.getElementById( 'reload-button' )
  const sections = document.getElementById( 'section' )

  function clearContent () {
    while ( sections.firstChild ) {
      sections.removeChild( sections.firstChild )
    }
  }

  function addContent () {
    sections.innerHTML = `
        <div class="first image">
            <img src="images/Fade in-out.png" alt="fade-in-out" id="image1" class="image1">
        </div>
        <div class="second image">
            <img src="images/headline1.png" alt="slide-pop-in" id="image2" class="image2">
        </div>
        <div class="second image">
            <img src="images/headline2.png" alt="slide-pop-in" id="image3" class="image3">
        </div>
        <div class="second image">
            <img src="images/subheadline.png" alt="slide-pop-in" id="image4" class="image4">
        </div>
        <div class="second image">
            <img src="images/learnmore.png" alt="slide-pop-in" id="image5" class="image5">
        </div>
        <div class="sixth image">
            <img src="images/logo.png" alt="slide-pop-in" id="image6" class="image6" width="450">
        </div>
        <button class="seventh image" id="reload-button">
            <img src="images/replay.png" alt="slide-pop-in" id="image7" class="image7">
        </button>`

    reloader()
    setupReloadButtonListener()
  }

  reloadButton.addEventListener( 'click', () => {
    clearContent()
    addContent()
  } )

  function setupReloadButtonListener () {
    const reloadButton = document.getElementById( 'reload-button' )
    reloadButton.addEventListener( 'click', () => {
      clearContent()
      addContent()
    } )
  }
} )





