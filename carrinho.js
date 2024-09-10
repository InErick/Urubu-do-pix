document.addEventListener('DOMContentLoaded', () => {
    const carrinhoConteudo = document.getElementById('carrinho-conteudo');
    const carrinho = {};
    let valorFrete = 0; /

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
        alert('Compra finalizada');
    });
});
function imageOn(img) {
    img.src = "onMouse.png";
}

function imageOff(img) {
    img.src = "urubu-pix-logo.png";
}
