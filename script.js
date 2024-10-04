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

// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav a');

// Adiciona o evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Evita o comportamento padrão do link
        e.preventDefault();

        // Pega o ID da seção para onde o link aponta
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Rola suavemente para a posição da seção
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Ajusta a posição do elemento no topo
            });
        }
    });
});