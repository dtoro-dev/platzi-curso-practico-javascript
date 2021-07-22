// Cuadrado
const perimetroCuadrado = (lado) => lado * 4
const areaCuadrado = (lado) => lado ** 2

// Triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
const areaTriangulo = (base, altura) => (base * altura) / 2

// Triangulo Isosceles
const alturaTrianguloIsosceles = (lado, base) => Math.sqrt( (lado**2) - (base / 2)**2  ).toFixed(2)

// Circulo
const perimetroCirculo = (radio) => (radio * 2) * Math.PI
const areaCirculo = (radio) => (radio ** 2) * Math.PI

const getTypeFigure = () => {
  
  let allFigure = [
    'cuadrado',
    'triangulo',
    'circulo'
  ]

  let typeFigure = document.querySelector('.select__figure')

  typeFigure.addEventListener('change', (e) => {

    let option = e.target.value

    allFigure.forEach(element => {

      let figure = document.querySelector(`.section__${element}`)

      if (element === option) {
        figure.classList.remove('hide')
      }else{
        figure.classList.remove('hide')
        figure.classList.add('hide')
      }

    });
  })
}

const btnCuadrado = () => {
  let lado = document.querySelector('#lado').value
  lado = parseFloat(lado)
  if (lado === '') {
    alert('Ingrese valores de los lados del cuadrado')
    return false
  }

  let perimetro = perimetroCuadrado(lado)
  let area = areaCuadrado(lado)
  document.querySelector('.perimetro__cuadrado').innerHTML = perimetro.toFixed(2) + ' cm'
  document.querySelector('.area__cuadrado').innerHTML = area.toFixed(2) + ' cm²'
}

const btnTriangulo = () => {
  let lado1 = document.querySelector('#lado1').value
  let lado2 = document.querySelector('#lado2').value
  let base = document.querySelector('#base').value
  let altura = document.querySelector('#altura').value

  if (lado1 === '') {
    alert('Ingrese valores de lado 1 del triangulo')
    return false
  }

  if (lado2 === '') {
    alert('Ingrese valores de lado 2 del triangulo')
    return false
  }

  if (base === '') {
    alert('Ingrese valores de base del triangulo')
    return false
  }

  if (altura === '') {
    alert('Ingrese valores de altura del triangulo')
    return false
  }

  lado1 = parseFloat(lado1)
  lado2 = parseFloat(lado2)
  base = parseFloat(base)
  altura = parseFloat(altura)

  let perimetro = perimetroTriangulo(lado1, lado2, base)
  let area = areaTriangulo(base, altura)

  document.querySelector('.perimetro__triangulo').innerHTML = perimetro.toFixed(2) + ' cm'
  document.querySelector('.area__triangulo').innerHTML = area.toFixed(2) + ' cm²'
}

const btnCirculo = () => {
  let radio = document.querySelector('#radio').value

  if (radio === '') {
    alert('Ingrese el valor del radio de la circunferencia')
    return false
  }
  radio = parseFloat(radio)
  let perimetro = perimetroCirculo(radio)
  let area = areaCirculo(radio)

  document.querySelector('.perimetro__circulo').innerHTML = perimetro.toFixed(2) + ' cm'
  document.querySelector('.area__circulo').innerHTML = area.toFixed(2) + ' cm²'
}

const init = () => {
  getTypeFigure()
}

init()