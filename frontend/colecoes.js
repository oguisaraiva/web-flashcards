function linkToEdit(){
    window.location.assign('edicaoColecao.html');
}

function linkToList(){
    window.location.assign('visuCard.html');
}

function listColecoes(){
    var collections = JSON.parse(localStorage.getItem('collections') || '[]');

    for(let i = 0; i < collections.length; i++){
        var colecaoUnc = document.createElement('div');
        var nome = collections[i].nome;
        var img = collections[i].imagem;

        colecaoUnc.classList.add('content-card');
        colecaoUnc.innerHTML = `
        <div class="content-card-img">
            <img src="data:image/jpeg;base64,${img}">
        </div>
        <a onclick="linkToList()">
            <div class="content-card-title">
                <h2 class="content-card-text">${nome}</h2>
            </div>
        </a>
        <div class="content-card-icons">
            <input onclick="deleteColecao()" type="image" src="/icons/trash-bin.svg"/>
            <input onclick="clickEditColecao()" type="image" src="/icons/edit.svg"/>
        </div>
    `

    document.getElementById('containerList').appendChild(colecaoUnc);
    }
}

/* Função de listar coleções é chamada */
listColecoes();

function deleteColecao(){
    document.addEventListener('click', function (e) {
        var collections = JSON.parse(localStorage.getItem('collections') || '[]');
        var target = e.target;
        var parent = target.parentNode;
        var index = [].indexOf.call(parent.children, target);
    
        let text = "Você deseja excluir esta coleção?\nClique em Ok para confirmar. Ou cancele a ação.";

        if (confirm(text) == true) {
            collections.splice(index, 1);
            alert("A coleção foi excluída com sucesso!");
        } else {
            console.log("ação cancelada");
        }

        localStorage.setItem("collections", JSON.stringify(collections));
        document.location.reload(true);
    });
}

function clickEditColecao(){
    document.addEventListener('click', function (e) {
        var target = e.target;
        var parent = target.parentNode;
        var index = [].indexOf.call(parent.children, target);

        index = 0;

        window.location.assign('edicaoColecao.html');
    
        //localStorage.setItem("collections", JSON.stringify(collections));
        //document.location.reload(true);
    });
}