// Script para o Projeto Agrinho 2026 - Horta Inteligente Autônoma

document.addEventListener("DOMContentLoaded", () => {
    console.log("Agrinho 2026: Sistema carregado com sucesso!");

    // 1. Efeito de Smooth Scroll para os links de navegação interna
    const linksNavegacao = document.querySelectorAll("nav a[href^='#']");

    linksNavegacao.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const idAlvo = this.getAttribute("href").substring(1);
            const elementoAlvo = document.getElementById(idAlvo);

            if (elementoAlvo) {
                window.scrollTo({
                    top: elementoAlvo.offsetTop - 80, // Subtrai 80px para compensar o header fixo
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Simulação de Monitoramento (Interação com o botão CTA do banner)
    const botaoCta = document.querySelector(".btn-cta");
    
    if (botaoCta) {
        botaoCta.addEventListener("click", (event) => {
            // Opcional: Descomente o alert abaixo se quiser um aviso ao clicar no botão
            // alert("Prepare-se para ver os dados da nossa Horta Inteligente!");
        });
    }

    // 3. Simulação de leitura de sensores (Para uso futuro ou apresentação dinâmica)
    const dadosSimulados = {
        umidadeSolo: 65, // Porcentagem de umidade
        statusIrrigacao: "Desligada (Solo Úmido)",
        geracaoEnergiaSolar: "Ativa (Carregando Bateria)"
    };

    // Função no console para demonstrar como o app monitora a horta
    console.log("--- Status Atual da Horta Inteligente ---");
    console.log(`Umidade do Solo: ${dadosSimulados.umidadeSolo}%`);
    console.log(`Irrigação: ${dadosSimulados.statusIrrigacao}`);
    console.log(`Painel Solar: ${dadosSimulados.geracaoEnergiaSolar}`);

    // 4. Adicionar um efeito visual simples nos cards ao passar o mouse
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = "#ff9800"; // Muda a borda superior para laranja ao focar
        });

        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "#4caf50"; // Volta para a cor verde original
        });
    });
});