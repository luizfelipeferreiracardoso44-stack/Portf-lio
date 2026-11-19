
const botoes = document.querySelectorAll('.aba');
const conteudos = document.querySelectorAll('.conteudo');

botoes.forEach(function(botao) {

    botao.addEventListener('click', function() {

        const abaSelecionada = botao.dataset.aba;

        botoes.forEach(function(item) {
            item.classList.remove('ativa');
        });

        conteudos.forEach(function(item) {
            item.classList.remove('ativo');
        });

        botao.classList.add('ativa');

        document.getElementById(abaSelecionada)
            .classList.add('ativo');

    });

});

const botoesDetalhes = document.querySelectorAll('.btn-detalhes');

botoesDetalhes.forEach(function(botao) {

    botao.addEventListener('click', function() {

        const detalhes = botao.nextElementSibling;

        detalhes.classList.toggle('aberto');

        if (detalhes.classList.contains('aberto')) {

            botao.innerHTML = 'Ocultar atividades <span>-</span>';

        } else {

            botao.innerHTML = 'Ver atividades <span>+</span>';

        }

    });

});
