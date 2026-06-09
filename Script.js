/* ==========================================================================
   SCRIPT DE INTERAÇÃO E CONVERSÃO - LANDING PAGE ODONTOLOGIA
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO NA NAVBAR AO ROLAR A TELA (STICKY HEADER)
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", () => {
        // Se o usuário rolar mais de 50px para baixo, adiciona uma classe de destaque
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
            header.style.padding = "10px 0";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.98)"; // Fica levemente transparente
        } else {
            // Volta ao estado original quando estiver no topo
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
            header.style.padding = "15px 0";
            header.style.backgroundColor = "#ffffff";
        }
    });

    // 2. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
    // Seleciona os elementos que vão aparecer com efeito (Cards de serviços e depoimentos)
    const animados = document.querySelectorAll(".service-card, .testimonial-card, .about-image, .about-content");
    
    const checarScroll = () => {
        // Define o ponto da tela (80% da altura do navegador) para ativar a animação
        const gatilhoAtivacao = (window.innerHeight / 5) * 4;
        
        animados.forEach(elemento => {
            // Pega a distância do elemento até o topo da tela
            const elementoTopo = elemento.getBoundingClientRect().top;
            
            // Configuração inicial via JS caso você não queira encher o CSS de classes
            elemento.style.opacity = elemento.style.opacity || "0";
            elemento.style.transform = elemento.style.transform || "translateY(30px)";
            elemento.style.transition = "all 0.6s ease-out";

            // Se o elemento passou do ponto de gatilho, ele aparece subindo suavemente
            if (elementoTopo < gatilhoAtivacao) {
                elemento.style.opacity = "1";
                elemento.style.transform = "translateY(0)";
            }
        });
    };

    // Executa uma vez ao carregar a página e depois toda vez que rolar a tela
    checarScroll();
    window.addEventListener("scroll", checarScroll);


    // 3. RASTREADOR DE CLIQUES NO WHATSAPP (BÔNUS PARA O MARKETING DO MATHEUS)
    // Isso aqui ajuda o Matheus a saber se os botões estão funcionando bem
    const botoesWhats = document.querySelectorAll('a[href*="wa.me"]');
    
    botoesWhats.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            console.log(`🚀 Lead clicou no botão do WhatsApp número: ${index + 1}`);
            // No futuro, o Matheus pode colocar o Pixel do Facebook ou Google Analytics bem aqui!
        });
    });

});