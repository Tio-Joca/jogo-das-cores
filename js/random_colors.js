const cores = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "white",
  "yellow",
  "cyan",
  "forestgreen",
  "lightblue",
  "mediumspringgreen",
  "olivedrab",
  "sandybrown",
  "turquoise",
];

const coresEmbaralhadas = cores.sort(() => 0.5 - Math.random());
const coresSelecionadas = coresEmbaralhadas.slice(0, 10);

let corEscolhida =
  coresSelecionadas[Math.floor(Math.random() * coresSelecionadas.length)];

document.getElementById("lista-cores").textContent =
  coresSelecionadas.join(", ");

function jogoDasCores() {
  let entrada = document.getElementById("entrada").value.toLowerCase();
  let saida = document.getElementById("saida");

  if (!coresSelecionadas.includes(entrada)) {
    saida.textContent = "Essa cor não está na lista.";
    return;
  }

  if (entrada === corEscolhida) {
    saida.textContent = "Parabéns! Você acertou!";
    document.body.style.backgroundColor = corEscolhida;
  } else if (entrada < corEscolhida) {
    saida.textContent = "Dica: Sua cor é alfabeticamente menor que a minha.";
  } else {
    saida.textContent = "Dica: Sua cor é alfabeticamente maior que a minha.";
  }
}
