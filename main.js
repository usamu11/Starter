/*
**3º exercício**
A partir do resultado do exemplo anterior adicione um indicador de 
carregamento em tela no lugar da lista apenas enquanto a requisição 
estiver acontecendo:
<li>Carregando...</li>
*/

var containerElement = document.querySelector('#app');
var listElement = document.createElement('ul');
var inputElement = document.querySelector('#app input');

containerElement.appendChild(listElement);

function renderRepos(repos) {
    listElement.innerHTML = '';

    for (repo of repos) {
        var repoText = document.createTextNode(repo.name);
        var repoElement = document.createElement('li');
        

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);

        //console.log(repo.data);    
    }
}

function renderLoading() {
    var loadingText = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(loadingText);
    listElement.appendChild(loadingElement);
}

function renderError() {
    var errorText = document.createTextNode('404 Error');
    var errorElement = document.createElement('li');

    errorElement.appendChild(errorText);
    listElement.appendChild(errorElement);
}


function addRepos() {
    var repoText = inputElement.value;
    renderLoading();
    axios.get('https://api.github.com/users/' + repoText + '/repos')
    .then(function(response) {
        renderRepos(response.data);
    })
    .catch(function() {
        listElement.innerHTML = '';
        renderError();
    })
    inputElement.value = '';

}

