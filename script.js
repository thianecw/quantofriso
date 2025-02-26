document.getElementById("calcular").addEventListener("click", () => {
	// Pega os valores dos inputs
	const pano = Number.parseFloat(document.getElementById("pano").value);
	const friso = Number.parseFloat(document.getElementById("friso").value);
	const qtdade = Number.parseInt(document.getElementById("qtdade").value);
	const largura = Number.parseFloat(document.getElementById("largura").value);

	// Pega o estado do checkbox
	const emendarPano = document.querySelector(".custom-checkbox").checked;

	// Verifica se todos os campos foram preenchidos
	if (
		Number.isNaN(pano) ||
		Number.isNaN(friso) ||
		Number.isNaN(qtdade) ||
		Number.isNaN(largura)
	) {
		document.getElementById("error-message").style.display = "block"; // Exibe a mensagem de erro
		return; // Sai da função se algum campo estiver vazio
	}

	// Esconde a mensagem de erro se todos os campos foram preenchidos
	document.getElementById("error-message").style.display = "none";

	// Calcula o primeiro resultado: Quantidade de pano / Quantidade de friso
	const primeiroResultado = pano / friso;

	// Calcula o resultado final: (Quantidade de peças / primeiroResultado) * largura
	let resultadoFinal = (qtdade / primeiroResultado) * largura;

	// Se o checkbox estiver marcado, adiciona 10cm ao resultado
	if (emendarPano) {
		resultadoFinal += 10;
	}

	// Exibe o resultado e torna a frase visível
	const resultadoElement = document.getElementById("resultado");
	resultadoElement.textContent = `${resultadoFinal.toFixed(2)} cm`;

	// Torna a frase visível
	document.querySelector(".resultado").style.visibility = "visible";
	clearInput();
});

function clearInput() {
	// Limpa todos os campos de input
	document.getElementById("pano").value = "";
	document.getElementById("friso").value = "";
	document.getElementById("qtdade").value = "";
	document.getElementById("largura").value = "";
	// Limpa o estado do checkbox
	document.querySelector(".custom-checkbox").checked = false;
}
