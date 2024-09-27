// Seleciona todas as imagens da equipe
const equipeItems = document.querySelectorAll('.equipe-item');
const infoBarbeiro = document.getElementById('info-barbeiro');

// Adiciona o evento de mouseover para cada item
equipeItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Pega o atributo data-info da imagem
        const info = this.querySelector('.equipe-img').getAttribute('data-info');

        // Exibe as informações no div de informações
        infoBarbeiro.textContent = info;
        infoBarbeiro.classList.add('show');
    });

    item.addEventListener('mouseleave', function() {
        // Esconde as informações quando o mouse sai
        infoBarbeiro.classList.remove('show');
    });
});