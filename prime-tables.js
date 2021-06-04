document.addEventListener('DOMContentLoaded', () => {
  const tableForm = document.querySelector("#generate-table")
  tableForm.addEventListener("submit", generateTable)
  let primeArray = []

  function isPrime(n) {
    if (n <= 1) {
      return false
    } else if (n > 2) {
      for(let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false
        } else {
          return true
        }
      }
    } else {
      return true
    }
  }

  function generatePrimeArray(n) {
    let i = 0
    let primeArray = []
    while (primeArray.length < n) {
      if (isPrime(i)) {
        primeArray.push(i)
      } i++
    }
    console.log(primeArray)
  }

  function generateTable(event) {
    event.preventDefault()
    let inputNumber = parseInt(document.querySelector('#input-number').value)
    generatePrimeArray(inputNumber)
  }
})
