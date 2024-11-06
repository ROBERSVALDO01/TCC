// Adiciona o evento de envio do formulário
document.getElementById('medicaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const glicemia = parseFloat(document.getElementById('glicemia').value);
    const jejum = document.getElementById('jejum').value;

    let resultadoTexto = '';

    // Definindo os limites de glicemia
    let limiteInferior, limiteSuperior;
    if (jejum === 'sim') {
        limiteInferior = 70; // Glicemia em jejum
        limiteSuperior = 100; // Glicemia em jejum
    } else {
        limiteInferior = 100; // Glicemia pós-refeição
        limiteSuperior = 140; // Glicemia pós-refeição
    }

    // Verificando os níveis de glicemia
    if (glicemia < limiteInferior) {
        resultadoTexto = `Seu nível de glicemia está baixo (${glicemia} mg/dL). Considere ingerir algo para aumentar os níveis.`;
    } else if (glicemia > limiteSuperior) {
        resultadoTexto = `Seu nível de glicemia está alto (${glicemia} mg/dL). Consulte um profissional de saúde.`;
    } else {
        resultadoTexto = `Seu nível de glicemia está normal (${glicemia} mg/dL).`;
    }

    // Exibindo o resultado na página
    document.getElementById('resultado').innerText = resultadoTexto;
});

// Código para alternar tema
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const contentBoxes = document.querySelectorAll('.content-box');
    const footer = document.querySelector('footer');

    // Verifica o tema armazenado no Local Storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        header.classList.add(currentTheme);
        contentBoxes.forEach(box => box.classList.add(currentTheme));
        footer.classList.add(currentTheme);
        // Atualiza o ícone do botão de tema
        themeToggle.innerText = currentTheme === 'dark' ? '🌞' : '🌚';
    }

    themeToggle.addEventListener('click', () => {
        // Alterna entre os temas claro e escuro
        body.classList.toggle('dark');
        body.classList.toggle('light');
        header.classList.toggle('dark');
        header.classList.toggle('light');
        contentBoxes.forEach(box => {
            box.classList.toggle('dark');
            box.classList.toggle('light');
        });
        footer.classList.toggle('dark');
        footer.classList.toggle('light');

        // Armazena a escolha do tema no Local Storage
        const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        
        // Altera o ícone do botão
        themeToggle.innerText = newTheme === 'dark' ? '🌞' : '🌚';
    });
});
