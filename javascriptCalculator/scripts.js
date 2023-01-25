const previousValueText = document.querySelector('.previous-value');
const currentValueText = document.querySelector('.current-value');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const allClearBtn = document.querySelector('.all-clear');


class JavaScriptCalculator {
  constructor(previousValueText, currenValueText) {
    this.previousValueText = previousValueText
    this.currentValueText = currentValueText
    this.sign = ''
    this.clear()
  }
  
  clear() {
    this.currentValue = ''
    this.previousValue = ''
    this.operation = undefined
    this.sign = ''
  }
  
  appendNumber(number) {
    if(number === '.' && this.currentValue.includes('.')) return
    else if(number === '0' && this.currentValue.includes('0')){
      return
    }
    this.currentValue = this.currentValue.toString() + number.toString()
  }
  
  selectOperation(operation){
    if(this.currentValue === '')
    {
      this.sign += operation
      if(this.sign.length > 1)
      {
        this.operation = operation
      }
      return
    }
    if(this.previousValue !== '') {
      this.compute();
    }
    this.operation = operation
    this.previousValue = this.currentValue
    this.currentValue = ''
  }
  
  compute(){
    let computator
    const prev = parseFloat(this.previousValue)
    var current = parseFloat(this.currentValue)
    if(this.sign.length === 1 && this.sign === '-')
    {
      current *= -1
      this.sign = ''
    }
    if (isNaN(prev) || isNaN(current)) return
    switch(this.operation){
      case '+':
        computator = prev + current
        break;
      case '-':
        computator = prev - current
        break;
      case '/':
        computator = prev / current
        break;
      case '*':
        computator = prev * current
        break;
      default:
        return 
    }
    this.currentValue = computator
    this.operation = undefined
    this.previousValue = ''
  }
  
  updateDisplay(){
    this.currentValueText.innerText = this.currentValue
    if(this.operation != null){
      this.previousValueText.innerText = 
        `${this.previousValue} ${this.operation}`
    } else {
      this.previousValueText.innerText = ''
    }
  }
}


const calculator = new JavaScriptCalculator(previousValueText, currentValueText)

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.selectOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsBtn.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearBtn.addEventListener('click', button => {
  calculator.clear();
  currentValueText.innerHTML = 0
  previousValueText.innerHTML = ''
})