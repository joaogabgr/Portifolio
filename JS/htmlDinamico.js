if (document.title == "Projetos") {
    const cardprojeto = document.querySelector("#projetos");
    const bannerprojeto = document.querySelector("#banners");
    const projetos = new Array();

    projetos.push(["estudio", "../Imagens/Projetos/Estudiogrossi.png", "Estudio Grossi", "https://github.com/joaogabgr/StudioSG", "https://joaogabgr.github.io/StudioSG/", "Projeto criado para fins de divulgação da marca <strong>Estudio Grossi</strong>, sem objetivo de lucros financeiros"]);


    for (let i = 0; i < projetos.length; i++) {
        // CRIAR CARD ----------------------------------------------------------------------
        const cardabbr = document.createElement('abbr');
        cardabbr.setAttribute("title", "Clique para abrir mais informações do projeto");

        const carddiv = document.createElement("div");
        carddiv.setAttribute("id", projetos[i][0]);
        carddiv.setAttribute("class", "projeto-card");
        carddiv.setAttribute("onclick", "mostrarbanner(this.id)")

        const cardimg = document.createElement("img");
        cardimg.setAttribute("src", projetos[i][1]);

        const cardnome = document.createElement('h2')
        cardnome.innerText = projetos[i][2];

        cardabbr.appendChild(cardimg);
        cardabbr.appendChild(cardnome)
        carddiv.appendChild(cardabbr);
        cardprojeto.appendChild(carddiv);

        // CRIAR BANNER ---------------------------------------------------------------------

        const bannerdiv = document.createElement("div");
        bannerdiv.setAttribute("id", projetos[i][0]);
        bannerdiv.setAttribute("class", "projeto-banner");

        const closediv = document.createElement("div");
        closediv.setAttribute("onclick", "fecharbanner(this.id)");
        closediv.setAttribute("id", projetos[i][0]);
        closediv.setAttribute("class", "buttonclose");

        const closeimg = document.createElement("img");
        closeimg.setAttribute("class", "banner-close");
        closeimg.setAttribute("src", "../Imagens/icones/cancel.png");
        closeimg.setAttribute("alt", "Imagem do projeto");

        const bannerimgdiv = document.createElement("div");
        bannerimgdiv.setAttribute("class", "banner-imagem-template");

        const bannerimg = document.createElement("img");
        bannerimg.setAttribute("src", projetos[i][1]);
        bannerimg.setAttribute("class", "banner-imagem");

        const bannertextdiv = document.createElement("div");
        bannertextdiv.setAttribute("class", "banner-text");

        const abbrgit = document.createElement("abbr");
        abbrgit.setAttribute("title", "Clique para abrir o projeto no GitHub");

        const linkgit = document.createElement("a");
        linkgit.setAttribute("href", projetos[i][3]);
        linkgit.setAttribute("target", "_blank");
        linkgit.innerText = "GitHub";

        const abbrnet = document.createElement("abbr");
        abbrnet.setAttribute("title", "Clique para abrir o projeto na internet");

        const linkinternet = document.createElement("a");
        linkinternet.setAttribute("href", projetos[i][4]);
        linkinternet.setAttribute("target", "_blank");
        linkinternet.innerText = "Internet";

        const bannertext = document.createElement("p");
        bannertext.innerHTML = projetos[i][5];

        const bannernome = document.createElement('h2')
        bannernome.innerText = projetos[i][2];



        closediv.appendChild(closeimg);
        bannerdiv.appendChild(closediv);
        bannerimgdiv.appendChild(bannerimg);
        bannerdiv.appendChild(bannerimgdiv);

        bannertextdiv.appendChild(bannernome);

        abbrgit.appendChild(linkgit);
        bannertextdiv.appendChild(abbrgit);

        abbrnet.appendChild(linkinternet);
        bannertextdiv.appendChild(abbrnet);

        bannertextdiv.appendChild(bannertext)

        bannerdiv.appendChild(bannertextdiv);
        bannerprojeto.appendChild(bannerdiv);
    }
} else if(document.title == "Formações") {
    const formacoes = [["INICIANTE EM PROGRAMAÇÃO", "https://cursos.alura.com.br/user/joaogabgr/degree-programacao-123948/certificate"]];
    const cursos = [["ARQUITETURA DE COMPUTADORES", "https://cursos.alura.com.br/user/joaogabgr/course/arquitetura-computadores-funcionamento-programa/certificate"],["GIT E GITHUB","https://cursos.alura.com.br/user/joaogabgr/course/git-github-controle-de-versao/certificate"],["HTML5 E CSS3 PARTE 1","https://cursos.alura.com.br/user/joaogabgr/course/html5-css3-primeiros-passos/certificate"],["HTML5 E CSS3 PARTE 2","https://cursos.alura.com.br/user/joaogabgr/course/html5-css3-posicionamento-listas-navegacao/certificate"],["HTML5 E CSS3 PARTE 3","https://cursos.alura.com.br/user/joaogabgr/course/html5-css3-formularios-tabelas/certificate"],["HTML5 E CSS3 PARTE 4","https://cursos.alura.com.br/user/joaogabgr/course/html5-css3-avancando-css/certificate"],["JAVASCRIPT PARA WEB: CRIE PÁGINAS DINÂMICAS", "https://cursos.alura.com.br/user/joaogabgr/course/javascript-web-paginas-dinamicas/certificate"],["JAVASCRIPT: EXPLORANDO A LINGUAGEM","https://cursos.alura.com.br/user/joaogabgr/course/javascript-introducao/certificate"]];

    const spanFormacoes = document.querySelector(".formacao");

    for(let i = 0; i < formacoes.length;i++) {
        const pform = document.createElement("p");
        pform.innerText = formacoes[i][0];

        const abbrform = document.createElement("abbr");
        abbrform.setAttribute("title", "Clique para abrir o certificado");

        const linkform = document.createElement("a");
        linkform.setAttribute("href", formacoes[i][1]);
        linkform.setAttribute("target", "_blank");

        const iform = document.createElement("i");
        iform.setAttribute("class", "fa-solid fa-file-circle-check fa-xl");

        linkform.appendChild(iform)
        abbrform.appendChild(linkform)
        pform.appendChild(abbrform)
        spanFormacoes.appendChild(pform);
    }

    const spanCursos = document.querySelector(".cursos");

    for(let i = 0; i < cursos.length;i++) {
        const pform = document.createElement("p");
        pform.innerText = cursos[i][0];

        const abbrform = document.createElement("abbr");
        abbrform.setAttribute("title", "Clique para abrir o certificado");

        const linkform = document.createElement("a");
        linkform.setAttribute("href", cursos[i][1]);
        linkform.setAttribute("target", "_blank");

        const iform = document.createElement("i");
        iform.setAttribute("class", "fa-solid fa-file-circle-check fa-xl");

        linkform.appendChild(iform)
        abbrform.appendChild(linkform)
        pform.appendChild(abbrform)
        spanCursos.appendChild(pform);
    }
}