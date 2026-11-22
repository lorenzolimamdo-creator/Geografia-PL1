
const botaoTema = document.createElement("button");

botaoTema.id = "botao-tema";
botaoTema.type = "button";
botaoTema.classList.add("botao-tema");

const temaSalvo = localStorage.getItem("tema");
const temaInicial = temaSalvo === "escuro" ? "escuro" : "claro";

document.documentElement.setAttribute("data-tema", temaInicial);

function atualizarBotaoTema() {
    const temaAtual = document.documentElement.getAttribute("data-tema");

    if (temaAtual === "escuro") {
        botaoTema.textContent = "Tema claro";
        botaoTema.setAttribute("aria-label", "Ativar tema claro");
        botaoTema.setAttribute("aria-pressed", "true");
    } else {
        botaoTema.textContent = "Tema escuro";
        botaoTema.setAttribute("aria-label", "Ativar tema escuro");
        botaoTema.setAttribute("aria-pressed", "false");
    }
}

atualizarBotaoTema();

botaoTema.addEventListener("click", () => {
    const temaAtual = document.documentElement.getAttribute("data-tema");

    const novoTema = temaAtual === "escuro" ? "claro" : "escuro";

    document.documentElement.setAttribute("data-tema", novoTema);

    localStorage.setItem("tema", novoTema);

    atualizarBotaoTema();
});

const menuLinks = document.getElementById("menu-links");

if (menuLinks) {
    menuLinks.appendChild(botaoTema);
}
