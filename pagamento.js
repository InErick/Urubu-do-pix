document.addEventListener('DOMContentLoaded', function () {
    const metodoPagamento = document.querySelectorAll('input[name="pagamento"]');
    const formCartao = document.querySelector('.form-cartao');
    const formPix = document.querySelector('.form-pix');
    const formBoleto = document.querySelector('.form-boleto');

    metodoPagamento.forEach(function (metodo) {
        metodo.addEventListener('change', function () {
            formCartao.classList.remove('active');
            formPix.classList.remove('active');
            formBoleto.classList.remove('active');

            if (metodo.value === 'cartao') {
                formCartao.classList.add('active');
            } else if (metodo.value === 'pix') {
                formPix.classList.add('active');
            } else if (metodo.value === 'boleto') {
                formBoleto.classList.add('active');
            }
        });
    });
});
