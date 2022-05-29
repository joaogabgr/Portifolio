//  MOSTRAR BANNER DO PROJETO
function mostrarbanner(id) {
    let element = document.querySelectorAll(`#${id}`)[1];
    element.style.display = "flex";
}

function fecharbanner(id) {
    let element = document.querySelectorAll(`#${id}`)[1];
    element.style.display = "none";
}

// ----------------------------------------------------------------


// MUDAR PARA DARK MODE E LIGHT MDOE
const btn = document.querySelector('#btn')
const logos = document.querySelectorAll('.logopng')
const btnclose = document.getElementsByClassName('banner-close')

let btnOpcao;

btn.addEventListener("change", (e) => {
    if (btn.checked) {
        mudarcordark()
        btnOpcao = true;
    } else {
        mudarcorlight()
        btnOpcao = false;
    }
    localStorage.info = btnOpcao
})

window.onload = () => {
    if (localStorage.info == 'true') {
        mudarcordark()
        btn.checked = true
    } else if (localStorage.info == 'false') {
    }
}

function mudarcordark() {
    document.body.classList.add("dark");
    if (document.title == 'Portifolio') {
        logos[0].setAttribute('src', 'Imagens/icones-dark/githubdark.png');
        logos[1].setAttribute('src', 'Imagens/icones-dark/linkedindark.png');
        logos[2].setAttribute('src', 'Imagens/icones-dark/instagramdark.png');
        logos[3].setAttribute('src', 'Imagens/icones-dark/whatsappdark.png');
    } else if(document.title == 'Projetos') {
        for(let i = 0; i < btnclose.length; i++) {
            btnclose[i].setAttribute('src', '../Imagens/icones-dark/canceldark.png')
        }
    }
}

function mudarcorlight() {
    document.body.classList.remove("dark");
    if (document.title == 'Portifolio') {
        logos[0].setAttribute('src', 'Imagens/icones/github.png');
        logos[1].setAttribute('src', 'Imagens/icones/linkedin.png');
        logos[2].setAttribute('src', 'Imagens/icones/instagram.png');
        logos[3].setAttribute('src', 'Imagens/icones/whatsapp.png');
    } else if(document.title == 'Projetos') {
        for(let i = 0; i < btnclose.length; i++) {
            btnclose[i].setAttribute('src', '../Imagens/icones/cancel.png')
        }
    }
}
// ----------------------------------------------------------------