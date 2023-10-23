document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos <a> no menu do cabeçalho
    const menuItems = document.querySelectorAll('.nav-item a');

    // Itera sobre os elementos do menu e adiciona um ouvinte de eventos a cada um
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (e) {
            e.preventDefault(); // Impede a ação padrão de redirecionamento

            const targetId = menuItem.getAttribute('data-target'); // Obtém o ID do alvo
            const targetElement = document.getElementById(targetId);

            // Oculta todas as seções de conteúdo
            document.querySelectorAll('section').forEach(function (section) {
                section.style.display = 'none';
            });

            // Exibe a seção de destino
            if (targetElement) {
                targetElement.style.display = 'block';
            }
        });
    });
});
