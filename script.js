function calcular() {
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

	const tecidoInteiroCheckbox =
		document.querySelector(".custom-checkbox1").checked;

	const margemDesperdicio = Number.parseFloat(
		document.getElementById("margemDesperdicio").value,
	);

	if (
		Number.isNaN(larguraTecido) ||
		Number.isNaN(localFriso) ||
		Number.isNaN(qtdade) ||
		Number.isNaN(larguraFriso)
	) {
		document.getElementById("error-message").style.display = "block";
		return;
	}

	document.getElementById("error-message").style.display = "none";

	let primeiroResultado = larguraTecido / localFriso;

	if (tecidoInteiroCheckbox) {
		primeiroResultado = Math.floor(primeiroResultado);
	}

	let resultadoFinal =
		(qtdade / primeiroResultado) * larguraFriso + 3 * larguraFriso;

	resultadoFinal *= 1 + margemDesperdicio;

	const resultadoElement = document.getElementById("resultado");
	resultadoElement.textContent = `${resultadoFinal.toFixed(2)} cm`;
	resultadoElement.style.display = "block";
}

for (const option of document.querySelectorAll(".margem-option")) {
	option.addEventListener("click", () => {
		const isActive = option.classList.contains("active");

		for (const o of document.querySelectorAll(".margem-option")) {
			o.classList.remove("active");
		}

		if (!isActive) {
			option.classList.add("active");
			document.getElementById("margemDesperdicio").value = option.dataset.value;
		} else {
			document.getElementById("margemDesperdicio").value = "0";
		}

		// Recalcula automaticamente se já houver resultado na tela
		const resultadoVisivel =
			document.getElementById("resultado").style.display === "block";
		if (resultadoVisivel) {
			calcular();
		}
	});
}

document.getElementById("calcular").addEventListener("click", calcular);

document.getElementById("limpar").addEventListener("click", () => {
	document.getElementById("larguraTecido").value = "";
	document.getElementById("localFriso").value = "";
	document.getElementById("qtdade").value = "";
	document.getElementById("larguraFriso").value = "";
	document.querySelector(".custom-checkbox1").checked = false;

	for (const o of document.querySelectorAll(".margem-option")) {
		o.classList.remove("active");
	}
	document.getElementById("margemDesperdicio").value = "0";

	document.getElementById("resultado").style.display = "none";
});
