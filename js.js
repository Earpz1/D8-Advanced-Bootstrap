const toggleHotDeals = function () {
  const elements = document.querySelectorAll('.hot-icon')

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('d-none')
  }
}

const deleteCards = function () {
  const elements = document.querySelectorAll('.card')

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('d-none')
  }

  alert('All Cards have been deleted')
}
