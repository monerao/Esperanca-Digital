// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', () => {
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            alert('Mensagem enviada com sucesso! Em breve retornaremos o contato.');
            formContato.reset();
        });
    }

    // Validação de login
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailLogin').value.trim();
            const senha = document.getElementById('senhaLogin').value.trim();

            if (email === '' || senha === '') {
                alert('Preencha e-mail e senha.');
                return;
            }

            alert('Login realizado com sucesso! (demonstração)');
        });
    }

    // Validação de cadastro
    const formCadastro = document.getElementById('formCadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nomeCad').value.trim();
            const email = document.getElementById('emailCad').value.trim();
            const senha = document.getElementById('senhaCad').value;
            const confirm = document.getElementById('senhaConf').value;

            if (nome === '' || email === '' || senha === '' || confirm === '') {
                alert('Preencha todos os campos.');
                return;
            }

            if (senha !== confirm) {
                alert('As senhas não coincidem.');
                return;
            }

            if (senha.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }

            alert('Cadastro realizado com sucesso! Bem-vindo à Esperança Digital.');
            formCadastro.reset();
        });
    }
});