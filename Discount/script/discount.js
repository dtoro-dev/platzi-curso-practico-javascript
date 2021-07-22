// Convertir porcentaje a decimal
const porcentageToDecimal = (porcentage) => porcentage / 100
// Calcular valor de descuento
const priceOff = (price, discout) => price * porcentageToDecimal(discout)
// Click para calcular valor de descuento y valor a pagar
const btnPriceOff = () => {
  let price = document.querySelector('#price').value
  let discount = document.querySelector('#discount').value

  let priceToPay = priceOff(price, discount).toFixed(0)
  let priceDiscount = price - priceToPay

  document.querySelector('.priceDiscount').innerHTML = '$  ' + priceDiscount
  document.querySelector('.priceToPay').innerHTML = '$  ' + priceToPay
}