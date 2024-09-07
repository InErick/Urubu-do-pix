// Armazenar um valor simples
localStorage.setItem('nome', 'João');

// Armazenar um objeto (precisa converter para JSON)
const usuario = {
    nome: 'Maria',
    idade: 30
};
localStorage.setItem('usuario', JSON.stringify(usuario));


// Buscar um valor simples
const nome = localStorage.getItem('nome');
console.log(nome); // Saída: João

// Buscar um objeto (precisa converter de JSON para objeto)
const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioSalvo.nome); // Saída: Maria

// Remover um item específico
localStorage.removeItem('nome');

// Limpar todos os itens do localStorage
localStorage.clear();

if (localStorage.getItem('nome') !== null) {
    console.log('O nome está salvo no localStorage');
}










/*
<h1>Formulário para Gravar Dados no LocalStorage</h1>
    
    <form id="meuFormulario">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br><br>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email"><br><br>

        <button type="submit">Salvar Dados</button>
    </form>

    <button onclick="mostrarDados()">Mostrar Dados Salvos</button>

    <p id="resultado"></p>
    
    */



    // Capturar o evento de envio do formulário
    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que o formulário seja enviado

        // Obter os valores do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Criar um objeto com os dados
        const dadosUsuario = {
            nome: nome,
            email: email
        };

        // Salvar os dados no localStorage (converter para string JSON)
        localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

        alert('Dados salvos no localStorage!');
    });

    // Função para mostrar os dados salvos
    function mostrarDados() {
        // Buscar os dados no localStorage
        const dadosSalvos = JSON.parse(localStorage.getItem('dadosUsuario'));

        if (dadosSalvos) {
            // Exibir os dados no parágrafo
            document.getElementById('resultado').innerText = `Nome: ${dadosSalvos.nome}, E-mail: ${dadosSalvos.email}`;
        } else {
            document.getElementById('resultado').innerText = 'Nenhum dado encontrado!';
        }
    }