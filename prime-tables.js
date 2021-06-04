document.addEventListener('DOMContentLoaded', () => {
const tableForm = document.querySelector("#generate-table")
tableForm.addEventListener("submit", generateTable)

  function generateTable(event) {
    event.preventDefault()
    let inputNumber = parseInt(document.querySelector('#input-number').value)
    console.log(inputNumber)
    console.log(Number.isInteger(inputNumber))
  }
})
