const $PESO = Number(document.querySelector('#idPeso').value);
const $ALTURA = Number(document.querySelector('#idAltura').value);

const $BTN = document
  .querySelector('#btn')
  .addEventListener('click', (event) => {
    if ($PESO == '' || $ALTURA == '') {
      alert('Informe os dados');
      return;
    }
    const container = document.querySelector('#resultado');
    container.classList = 'ress';
    container.textContent = eventbtn();
    event.preventDefault();
  });

/**função para calcular imc */
const calcularImc = (peso, altura, imc) => {
  imc = peso / (altura * altura);
  return imc;
};

const eventbtn = () => {
  const imc = calcularImc($PESO, $ALTURA).toFixed(2);

  let res;

  if (imc <= 18.5) {
    res = `${imc} - Abaixo do peso`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    res = `${imc} - Peso normal`;
  } else if (imc >= 25 && imc <= 29.9) {
    res = `${imc} - Sobrepeso`;
  } else if (imc >= 30 && imc <= 34.9) {
    res = `${imc} - Obesidade grau 1`;
  } else if (imc >= 35 && imc <= 39.9) {
    res = `${imc} - Obesidade grau 2`;
  } else {
    res = `${imc} - Obesidade grau 3`;
  }

  return res;
};
