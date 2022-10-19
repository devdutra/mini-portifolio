/*COMENTÁRIO*/
const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        SelecionarAba(aba)
        MostarAbas(aba)
    });
});

function SelecionarAba(aba){

const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");
        aba.classList.add("selecionado");

        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
}
function MostarAbas(aba){

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASermostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASermostrada.classList.add("selecionado")
}