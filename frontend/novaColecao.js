var base64String;

function uploadImage() {
    var file = document.querySelector(
		'input[type=file]')['files'][0];
	var reader = new FileReader();
	reader.onload = function () {
		base64String = reader.result.replace("data:", "")
			.replace(/^.+,/, "");
		imageBase64Stringsep = base64String;
	}
	reader.readAsDataURL(file);
    console.log(base64String);
}

function getImage(){
    imgData = base64String;
    return imgData;
}

function saveCollection() {
    var nome = document.getElementById('nome').value;
    var desc = document.getElementById('descricao').value;
    var card = [];
    var img = getImage();

    var collections = JSON.parse(localStorage.getItem('collections') || '[]');

    console.log(collections);
    console.log(collections[0])

    collections.push({
        nome: nome,
        descricao: desc,
        imagem: img,
        cartoes: card
    });

    localStorage.setItem("collections", JSON.stringify(collections));

    alert("Coleção criada com sucesso!");

    setTimeout(() =>{
        window.location.replace("colecoes.html");
    });
}