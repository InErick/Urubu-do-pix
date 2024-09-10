document.addEventListener('DOMContentLoaded', () => {
    const carrinhoConteudo = document.getElementById('carrinho-conteudo');
    const carrinho = {};
    let valorFrete = 0;

    function atualizarCarrinho() {
        carrinhoConteudo.innerHTML = '';

        let valorTotal = 0;

        for (const [produto, dados] of Object.entries(carrinho)) {
            const item = document.createElement('div');
            item.className = 'carrinho-item';
            item.innerHTML = `
                <div>${produto}</div>
                <div>${dados.quantidade}</div>
                <div>R$ ${dados.preco.toFixed(2)}</div>
            `;
            carrinhoConteudo.appendChild(item);

            valorTotal += dados.preco * dados.quantidade;
        }

        if (valorFrete > 0) {
            const itemFrete = document.createElement('div');
            itemFrete.className = 'carrinho-item';
            itemFrete.innerHTML = `
                <div>Frete</div>
                <div></div>
                <div>R$ ${valorFrete.toFixed(2)}</div>
            `;
            carrinhoConteudo.appendChild(itemFrete);

            valorTotal += valorFrete;
        }

        const totalItem = document.createElement('div');
        totalItem.className = 'carrinho-total';
        totalItem.innerHTML = `
            <div></div>
            <div>Total:</div>
            <div>R$ ${valorTotal.toFixed(2)}</div>
        `;
        carrinhoConteudo.appendChild(totalItem);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const planoItem = button.parentElement;
            const nomePlano = planoItem.getAttribute('data-plano');
            const precoPlano = parseFloat(planoItem.getAttribute('data-preco'));

            if (!carrinho[nomePlano]) {
                carrinho[nomePlano] = {
                    quantidade: 0,
                    preco: precoPlano
                };
            }

            carrinho[nomePlano].quantidade += 1;
            atualizarCarrinho();
        });
    });

    document.querySelector('.cep-container button').addEventListener('click', () => {
        alert('CEP válido');
        valorFrete = 100; 
        atualizarCarrinho();
    });

    document.getElementById('confirmar-pagamento').addEventListener('click', () => {
        const bandeira = document.getElementById('bandeira-cartao').value;
        const numeroCartao = document.getElementById('numero-cartao').value;
        const nomeCartao = document.getElementById('nome-cartao').value;
        const dataValidade = document.getElementById('data-validade').value;
        const cvv = document.getElementById('cvv').value;

        document.getElementById('numero-cartao').addEventListener('input', function() {
            this.value = this.value.replace(/\s+/g, ''); // Remove todos os espaços
        });
        
    
        // Validação do nome do titular
        const nomeRegex = /^[A-Z\s]{1,19}$/;
        const nomeValido = nomeRegex.test(nomeCartao.toUpperCase());
        if (!nomeValido) {
            alert('O nome do titular deve conter apenas letras e no máximo 19 caracteres.');
            return;
        }
    
        // Validação do número do cartão baseado na bandeira
        let cartaoRegex;
        if (bandeira === 'visa') {
            cartaoRegex = /^4[0-9]{15}$/;
        } else if (bandeira === 'mastercard') {
            cartaoRegex = /^5[1-5]{1}[0-9]{14}$/;
        } else if (bandeira === 'amex') {
            cartaoRegex = /^3[47][0-9]{13}$/;
        } else {
            alert('Por favor, selecione uma bandeira do cartão.');
            return;
        }
    
        if (!cartaoRegex.test(numeroCartao)) {
            alert('Número do cartão inválido para a bandeira selecionada.');
            return;
        }
    
        // Validação da data de validade (formato MM/AA)
        const dataValidadeRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
        if (!dataValidadeRegex.test(dataValidade)) {
            alert('Data de validade inválida. Utilize o formato MM/AA.');
            return;
        }
    
        // Validação do CVV
        const cvvRegex = /^[0-9]{3}$/;
        if (!cvvRegex.test(cvv)) {
            alert('CVV inválido. Deve conter exatamente 3 dígitos.');
            return;
        }
    
        // Se todas as validações passarem
        alert('Compra finalizada com sucesso!');
    });
});
function imageOn(img) {
    img.src = "onMouse.png";
}

function imageOff(img) {
    img.src = "urubu-pix-logo.png";
}



