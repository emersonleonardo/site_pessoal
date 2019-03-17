/* ### Exibir lista de projetos ### */

document.addEventListener("DOMContentLoaded", function(event) { 
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET', 'portfolio.json');
    requisicao.onload = function(){
        var dadosProjetos = JSON.parse(requisicao.responseText);
        exibirProjetos(dadosProjetos);
    };
    requisicao.send();
});
function exibirProjetos(data){
    var conteudoHTML = "";

    for (i = 1; i <= Object.keys(data.projetos).length; i++){
        conteudoHTML += `
        <section id="`+data.projetos[i].id+`" class="elemento_portfolio">
            <div class="thumb" style="background-image: url(`+data.projetos[i].imagem+`);"></div>
            <div class="info">
                <div class="titulo_site">
                    <h1>
                        <a href="`+data.projetos[i].site+`" target="_blank">`+data.projetos[i].projeto+`</a>
                    </h1>
                </div>
                <div class="tecnologias_site"></div>
            </div>
        </section>`;
    }
    document.getElementById("bloco_portfolio").insertAdjacentHTML('beforeend', conteudoHTML);
}