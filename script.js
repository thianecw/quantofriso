document.getElementById("calcular").addEventListener("click", () => {
	// Pega os valores dos inputs
	const larguraTecido = Number.parseFloat(
		document.getElementById("larguraTecido").value,
	);
	const localFriso = Number.parseFloat(
		document.getElementById("localFriso").value,
	);
	const qtdade = Number.parseInt(document.getElementById("qtdade").value);
	const larguraFriso = Number.parseFloat(
		document.getElementById("larguraFriso").value,
	);

	// Ver se o item pano inteiro está checado
	const tecidoInteiroCheckbox =
		document.querySelector(".custom-checkbox1").checked;

	// Pega o estado do checkbox
	const margemSegurancaCheckbox =
		document.querySelector(".custom-checkbox2").checked;

	// Verifica se todos os campos foram preenchidos
	if (
		Number.isNaN(larguraTecido) ||
		Number.isNaN(localFriso) ||
		Number.isNaN(qtdade) ||
		Number.isNaN(larguraFriso)
	) {
		document.getElementById("error-message").style.display = "block"; // Exibe a mensagem de erro
		return; // Sai da função se algum campo estiver vazio
	}

	// Esconde a mensagem de erro se todos os campos foram preenchidos
	document.getElementById("error-message").style.display = "none";

	// Calcula o primeiro resultado: Quantidade de pano / Quantidade de friso
	let primeiroResultado = larguraTecido / localFriso;

	// Se o checkbox "O pano não está inteiro" estiver marcado, arredonda para baixo
	if (tecidoInteiroCheckbox) {
		primeiroResultado = Math.floor(primeiroResultado);
	}

	// Calcula o resultado base
	let resultadoFinal =
		(qtdade / primeiroResultado) * larguraFriso + 3 * larguraFriso;

	// Se margem estiver marcada, adiciona
	if (margemSegurancaCheckbox) {
		resultadoFinal *= 1.2;
	}

	// Exibe o resultado
	const resultadoElement = document.getElementById("resultado");
	resultadoElement.textContent = `${resultadoFinal.toFixed(2)} cm`;

	// Torna o texto do resultado visível
	resultadoElement.style.display = "block";
});

document.getElementById("limpar").addEventListener("click", () => {
	// Limpa os campos de input
	document.getElementById("larguraTecido").value = "";
	document.getElementById("localFriso").value = "";
	document.getElementById("qtdade").value = "";
	document.getElementById("larguraFriso").value = "";
	document.querySelector(".custom-checkbox1").checked = false;
	document.querySelector(".custom-checkbox2").checked = false;

	// Limpa o texto do resultado
	document.getElementById("resultado").style.display = "none"; // Usa display: none
});
