
const toggleButton = document.getElementById('toggle')

toggleButton.addEventListener('click', () => {
  
  const primaryText = document.querySelectorAll('.primary-text')
  const secondaryText = document.querySelectorAll('.secondary-text')
  const cards = document.querySelectorAll('.card')
  const body = document.getElementById('body')

  toggleButton.classList.toggle('t-white')

  body.classList.toggle('dark')
  body.classList.toggle('white')

  primaryText.forEach( el => {
    el.classList.toggle('dark-text')
    el.classList.toggle('white-text')
  })

  secondaryText.forEach( el => {
    el.classList.toggle('dark-text')
    el.classList.toggle('white-text')
  })

  cards.forEach( el => {
    el.classList.toggle('d-card')
    el.classList.toggle('w-card')
  })
})