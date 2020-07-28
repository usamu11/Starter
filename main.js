/* 
**2º exercício**
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. 
Após digitar o nome do  suário e clicar no botão buscar a aplicação deve buscar 
pela API do Github (conforme URL abaixo) os dados  e repositórios do usuário e 
mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
</ul>
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

function addRepos() {
    var repoText = inputElement.value;
    
    axios.get('https://api.github.com/users/' + repoText + '/repos')
    .then(function(response) {
        renderRepos(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
    inputElement.value = '';

}

