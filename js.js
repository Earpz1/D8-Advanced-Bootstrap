const toggleHotDeals = function () {
  const elements = document.querySelectorAll('.hot-icon')
  const elementsdotd = document.querySelector('.hot-icon-dotd')

  elementsdotd.classList.toggle('d-none')

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
