$(document).ready(function(){
	$("#myInput").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#myList a").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
			$("#myList input").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

function linkToCreateCard(){
	setTimeout(() =>{
		window.location.assign("novoCartao.html");
	});
}

function linkToReturn(){
	setTimeout(() =>{
		window.location.assign("visuCard.html");
	});
}

function linkToPlay(){
	setTimeout(() =>{
		window.location.assign("jogar.html");
	});
}

function modalDelete(){
	let text = "Você deseja excluir este cartão?\nClique em Ok para confirmar. Ou cancele a ação.";
	if (confirm(text) == true) {
		alert("O cartão foi excluído com sucesso!");
	} else {
		console.log("ação cancelada");
	}
}

function createCard(){
	var primeiroTermo = document.getElementById("firstWord").value;
	var segundoTermo = document.getElementById("secondWord").value;

	alert(`Card cadastrado com sucesso.\n
			frente: ${primeiroTermo}
			verso: ${segundoTermo}`);

	linkToReturn();
}   