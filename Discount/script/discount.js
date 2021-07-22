const priceOff = (price, discout) => {
  let decimal = discout / 100
  console.log(decimal)
  let valueOff = price * decimal
  console.log(valueOff)
  return valueOff
}

const porcentageToDecimal = (porcentage) => {
  return porcentage / 100
}

const btnPriceOff = () => {
  let price = document.querySelector('#price').value
  let discount = document.querySelector('#discount').value

  let priceToPay = priceOff(price, discount).toFixed(0)
  let priceDiscount = price - priceToPay

  document.querySelector('.priceDiscount').innerHTML = '$  ' + priceDiscount
  document.querySelector('.priceToPay').innerHTML = '$  ' + priceToPay
}