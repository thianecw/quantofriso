document.getElementById("calcular").addEventListener("click", () => {
	// Pega os valores dos inputs
	const tecido = Number.parseFloat(document.getElementById("tecido").value);
	const friso = Number.parseFloat(document.getElementById("friso").value);
	const qtdade = Number.parseInt(document.getElementById("qtdade").value);
	const largura = Number.parseFloat(document.getElementById("largura").value);

	// Ver se o item pano inteiro está checado
	const tecidoInteiroCheckbox =
		document.querySelector(".custom-checkbox1").checked;

	// Pega o estado do checkbox
	const margemSegurancaCheckbox =
		document.querySelector(".custom-checkbox2").checked;

	// Verifica se todos os campos foram preenchidos
	if (
		Number.isNaN(tecido) ||
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
	let primeiroResultado = tecido / friso;

	// Se o checkbox "O pano não está inteiro" estiver marcado, arredonda para baixo
	if (tecidoInteiroCheckbox) {
		primeiroResultado = Math.floor(primeiroResultado);
	}

	// Calcula o resultado final: (Quantidade de peças / primeiroResultado) * largura
	let resultadoFinal = (qtdade / primeiroResultado) * largura;

	// Se o checkbox margem de segurança estiver marcado, adiciona 10cm ao resultado
	if (margemSegurancaCheckbox) {
		resultadoFinal += 10;
	}

	// Exibe o resultado
	const resultadoElement = document.getElementById("resultado");
	resultadoElement.textContent = `${resultadoFinal.toFixed(2)} cm`;

	// Torna o texto do resultado visível
	resultadoElement.style.display = "block"; // Muda de "none" para "block"
});

document.getElementById("limpar").addEventListener("click", () => {
	// Limpa os campos de input
	document.getElementById("tecido").value = "";
	document.getElementById("friso").value = "";
	document.getElementById("qtdade").value = "";
	document.getElementById("largura").value = "";
	document.querySelector(".custom-checkbox1").checked = false;
	document.querySelector(".custom-checkbox2").checked = false;

	// Limpa o texto do resultado
	document.getElementById("resultado").style.display = "none"; // Usa display: none
});
