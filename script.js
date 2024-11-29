$(document).ready(function(){
    $('.lista-produtos').slick({
        slidesToShow: 3, // Mostra 3 produtos ao mesmo tempo
        slidesToScroll: 1,
        autoplay: true, // Ativa rotação automática
        autoplaySpeed: 1000, // Intervalo de 2 segundos
        arrows: true, // Setas de navegação
        dots: true, // Adiciona os indicadores
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640, // Mobile
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Ação para o botão "Adicionar ao Carrinho"
    $('.btn-carrinho').click(function() {
        alert('Produto adicionado ao carrinho!');
    });
});
