function converterKmParaAnosLuz(km) {
  const velocidadeDaLuzKmPorS = 299792.458;
  const segundosEmUmAno = 60 * 60 * 24 * 365.25;
  const anosLuz = km / (velocidadeDaLuzKmPorS * segundosEmUmAno);
  return anosLuz;
}

const kmInput = prompt("Digite a distância em quilômetros:");

const km = parseFloat(kmInput);

if (!isNaN(km)) {
  const anosLuz = converterKmParaAnosLuz(km);

  alert(
    `${km} quilômetros são aproximadamente ${anosLuz.toExponential(
      2
    )} anos-luz.`
  );
} else {
  alert("Por favor, insira um valor numérico válido.");
}
