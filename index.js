document.addEventListener("DOMContentLoaded", function() {
    // Cadastro
    const formCadastro = document.querySelector('form[action="index.html"]'); 
    if (formCadastro) {
        formCadastro.addEventListener('submit', function(event) {
            const senha = document.getElementById('senha').value;
            const ValidaSenha = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;
            
            if (!senha.match(ValidaSenha) || senha === '') {
                alert("Formato inválido de senha");
                event.preventDefault();
                return;
            }

            const email = document.getElementById('email').value;
            const ValidaEmail = /^[\w!#$%&'*+/=?^_`{|}~-]+(\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;

            if (!email.match(ValidaEmail) || email === '') {
                alert("Formato inválido de email");
                event.preventDefault();
                return;
            }

            const nome = document.getElementById('nome').value;
            const ValidaNome = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;

            if (!nome.match(ValidaNome) || nome === '') {
                alert("Formato inválido de nome");
                event.preventDefault();
                return;
            }

            const dadosUsuario = {
                nome: nome,
                email: email,
                senha: senha
            };

            
            // Salvar os dados no localStorage (converter para string JSON)
            localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

        });
    }

    // Login
    const formLogin = document.getElementById('form_login');
    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            const aut_email = document.getElementById('email').value;
            const aut_senha = document.getElementById('senha').value;
            const dadosSalvos = JSON.parse(localStorage.getItem('dadosUsuario'));

            if (dadosSalvos && aut_email === dadosSalvos.email && aut_senha === dadosSalvos.senha) {
                alert('Login bem-sucedido!');
                // Redirecionar ou fazer outras ações após o login bem-sucedido
                window.location.href = 'index.html'; // Altere 'dashboard.html' para a URL desejada
            } else {
                alert("E-mail ou senha inválidos");
                event.preventDefault();
            }
        });
    }
});
