if (document.title == "Projetos") {
    const cardprojeto = document.querySelector("#projetos");
    const bannerprojeto = document.querySelector("#banners");
    const projetos = new Array();

    // ID - SRC - NOME - GITHUB - INTERNET - DESCRIÇÂO

    projetos.push(["estudio", "../Imagens/Projetos/Estudiogrossi.png", "Estudio Grossi", "https://github.com/joaogabgr/StudioSG", "https://joaogabgr.github.io/StudioSG/", "Projeto criado para fins de divulgação da marca <strong>Estudio Grossi</strong>, sem objetivo de lucros financeiros"]);


    for (let i = 0; i < projetos.length; i++) {
        // CRIAR CARD ----------------------------------------------------------------------

        const carddiv = document.createElement("div");
        carddiv.setAttribute("id", projetos[i][0]);
        carddiv.setAttribute("class", "projeto-card");
        carddiv.setAttribute("onclick", "mostrarbanner(this.id)")

        carddiv.innerHTML = `
        <abbr title="Clique para abrir mais informações do projeto">
            <img src="${projetos[i][1]}" alt="Logo do projeto">
            <h2>${projetos[i][2]}</h2>
        </abbr>`

        cardprojeto.appendChild(carddiv);

        // CRIAR BANNER ---------------------------------------------------------------------

        const bannerdiv = document.createElement("div");
        bannerdiv.setAttribute("id", projetos[i][0]);
        bannerdiv.setAttribute("class", "projeto-banner");
        bannerdiv.innerHTML = `
        <div onclick="fecharbanner(this.id)" id="${projetos[i][0]}" class="buttonclose">
            <img class="banner-close" src="../Imagens/icones/cancel.png" alt="Botão de fechar">
        </div>
        <div class="banner-imagem-template">
            <img src="${projetos[i][1]}" alt="Logo do projeto" class="banner-imagem">
        </div>
        <div class="banner-text">
            <h2>${projetos[i][2]}</h2>
            <abbr title="Clique para abrir o projeto no GitHub">
                <a href="${projetos[i][3]}" target="_blank">GitHub</a>
            </abbr>
            <abbr title="Clique para abrir o projeto na internet">
                <a href="${projetos[i][4]}" target="_blank">Internet</a>
            </abbr>
            <p>${projetos[i][5]}</p>
        </div>`


        bannerprojeto.appendChild(bannerdiv);
    }
} else if(document.title == "Formações") {
    const formacoes = [["INICIANTE EM PROGRAMAÇÃO", "https://cursos.alura.com.br/degree/certificate/82f520f3-6ac1-4d7d-b6ae-ffa2134fa327"]];

    const cursos = [["ARQUITETURA DE COMPUTADORES", "https://cursos.alura.com.br/certificate/ba989ba0-d7e3-4f28-98f8-0f08e499eb09"],

    ["GIT E GITHUB","https://cursos.alura.com.br/certificate/820cb12f-e100-4696-aef6-788599012aa0"],

    ["HTML5 E CSS3 PARTE 1","https://cursos.alura.com.br/certificate/d558cc75-5535-428f-98ad-53529533ae1b"],

    ["HTML5 E CSS3 PARTE 2","https://cursos.alura.com.br/certificate/210dc779-01fb-421a-9c5e-f14a02b2c766"],

    ["HTML5 E CSS3 PARTE 3","https://cursos.alura.com.br/certificate/377de2b8-2c4a-418b-b558-5da6bd4ee455"],

    ["HTML5 E CSS3 PARTE 4","https://cursos.alura.com.br/certificate/da8796ee-96da-40d8-ac2a-d4ad782a6270"],

    ["JAVASCRIPT PARA WEB: CRIE PÁGINAS DINÂMICAS", "https://cursos.alura.com.br/certificate/ba05b195-949d-4262-9f07-6a92f428640b"],

    ["JAVASCRIPT: EXPLORANDO A LINGUAGEM","https://cursos.alura.com.br/certificate/e06e2af6-6eca-4ece-b3bd-ec1e86cb345c"],

    ["JAVASCRIPT: ORIENTAÇÃO A OBJETOS","https://cursos.alura.com.br/certificate/2807ed85-7061-4a40-874a-9963e85dfcf8"],

    ["LINUX I: CONHECENDO O TERMINAL","https://cursos.alura.com.br/certificate/79c328c0-22bd-4cda-9512-ecb686af987e"]];

    const spanFormacoes = document.querySelector(".formacao");

    for(let i = 0; i < formacoes.length;i++) {
        const pform = document.createElement("p");
        pform.innerHTML = `${formacoes[i][0]}<abbr title="Clique para abrir o certificado"><a href="${formacoes[i][1]}" target="_blank"><i class="fa-solid fa-file-circle-check fa-xl"></i></a></abbr>`;

        spanFormacoes.appendChild(pform);
    }

    const spanCursos = document.querySelector(".cursos");

    for(let i = 0; i < cursos.length;i++) {
        const pform = document.createElement("p");
        pform.innerHTML = `${cursos[i][0]}<abbr title="Clique para abrir o certificado"><a href="${cursos[i][1]}" target="_blank"><i class="fa-solid fa-file-circle-check fa-xl"></i></a></abbr>`;

        spanCursos.appendChild(pform);
    }
}