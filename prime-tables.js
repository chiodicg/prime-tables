document.addEventListener('DOMContentLoaded', () => {
  const tableForm = document.querySelector("#generate-table")
  tableForm.addEventListener("submit", generateTable)
  let inputNumber = null
  let primeArray = []
  let multipliedPrimes = []
  const table = document.getElementById("table")
  let cell = null
  let row = null

    //Generating the prime multiplication table
  function generateTable(event) {
    event.preventDefault()
    inputNumber = parseInt(document.querySelector('#input-number').value)
    generatePrimeArray(inputNumber)
    multiplyPrime(primeArray)
    clearTable()
    displayTable(multipliedPrimes)
  }

  //Creating the array of N primes
  function generatePrimeArray(n) {
    let i = 0
    primeArray = []
    while (primeArray.length < n) {
      if (isPrime(i)) {
        primeArray.push(i)
      } i++
    }
  }

  //To check if the number is a prime number
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

  //Multiplication of the N primes
  function multiplyPrime() {
    let firstRow = [null].concat(primeArray)
    multipliedPrimes = [firstRow]
    //For each prime number in the primeArray it will create a new row with this prime
    primeArray.forEach(prime => {
      let nextRow = [prime]
      primeArray.forEach(multiplier => { //Multiply this prime for each item of the primeArray
        nextRow.push(prime * multiplier)
      })
      multipliedPrimes.push(nextRow)
    })
    console.log(multipliedPrimes)
  }

  //Display the multiplication table
  function displayTable(multipliedPrimes) {
    for (let index = 0; index < multipliedPrimes.length; index++) {
      let element = multipliedPrimes[index]
      row = document.createElement("tr");
      for (let index = 0; index < element.length; index++) {
        cell = document.createElement("td");
        cell.textContent = element[index]
        row.appendChild(cell)
      }
      table.appendChild(row)
      table.setAttribute("width", "50%")
    }
  }

  //Check if there is another table displayed and clears it
  function clearTable() {
    if (table.hasChildNodes()) {
      table.innerHTML = ''
    }
  }
})
