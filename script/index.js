/*
		Designed by: liukui
		Original image: https://dribbble.com/shots/3029443-Radio-Gif
*/


let b = document.body;
let radio = document.querySelector("#radio");
let shadow= document.querySelector("#shadow");
let buttonCta = document.querySelector("#button-cta");
let cover = document.querySelector("#cover");
let circles = document.querySelector("#circles");

let a = document.querySelector("#audio");
let son = document.querySelector("#son");
let soff = document.querySelector("#soff");


/*******************/
let radioPlaying = () => {
    radio.classList.toggle('is-radio-active')
    shadow.classList.toggle('is-shadow-active')
    buttonCta.classList.toggle('is-button-active')
    cover.classList.toggle('is-cover-active')
    // circles.classList.toggle('is-circle-active')

    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }

    son.classList.toggle("s");
    soff.classList.toggle("s");
}

/*******************/
buttonCta.addEventListener("click", radioPlaying)
soff.addEventListener("click", radioPlaying)
son.addEventListener("click", radioPlaying)

// button 
// Grab all buttons
const buttons = document.querySelectorAll('.unsub-button')

buttons.forEach((button) => {
  button.state = 'ready'
  button.classList.add('ready')
  button.classList.add('happy')

  // Click listeners on every button
  button.addEventListener('click', () => {
    if (button.state === 'ready' ) {
      button.state = 'clicked'
      button.classList.add(button.state)
      button.classList.remove('ready')
      setTimeout(() => {
        button.state = 'show-instructions'
        button.classList.add(button.state)
      }, 2600)
    }
  })

  // Hover and click listeners on all the 'targets'
  const targetElements = button.querySelector('.target')
  if (targetElements) {
    targetElements.addEventListener('mouseenter', () => {
      if (button.state === 'show-instructions') {
        button.classList.add('worried')
        button.classList.remove('happy')
      }
    })
    targetElements.addEventListener('mouseleave', () => {
      if (button.state === 'show-instructions') {
        button.classList.add('happy')
        button.classList.remove('worried')
      }
    })
    targetElements.addEventListener('click', () => {
      if (button.state === 'show-instructions') {
        button.state = 'sad'
        button.classList.add('sad')
        button.classList.remove('happy', 'worried')
        // Reset button after displaying white-screen message
        setTimeout(() => {
          // Reset all the transitions
          button.classList.add('happy')
          button.classList.remove('sad', 'worried', 'clicked', 'show-instructions')
          setTimeout(() => {
            // Allow the button to be clicked now that the white-screen is gone
            button.state = 'ready'
            button.classList.add('ready')
          }, 2000)
        }, 2000)
      }
    })
  }
  
  // Set up button's text transition timings on page load
  const confirmTextElements = button.querySelectorAll('.unsub-button__confirm-text')
  confirmTextElements.forEach((buttonTextElement) => {
    let words = buttonTextElement.innerText.split(' '),
        wordHTML = ''
    words.forEach((word, index) => {
      if (word === 'chưa?') {
        let characters = word.split(''),
            letterHTML = ''
        characters.forEach((char, index2) => {
          letterHTML += `<span class="char" style="--char-delay:${(index2 * 100) + (index * 300 + 450)}ms;">${char}</span>`
        })
        wordHTML += `<span class="word word--bold" style="--word-delay:${index * 300 + 400}ms;">${letterHTML}</span>`
      } else {
        wordHTML += `<span class="word" style="--word-delay:${index * 300 + 400}ms;">${word}</span>`
      }
    })
    buttonTextElement.innerHTML = wordHTML
  })
})