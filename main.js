const form = document.getElementById('form-atividade');
const noContato = [];
const numContato = [];


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaContato();
    atualizaContato();
});

//seloco bicho, js é muito paia
//q coisa, minha função deu errado por conta d HTML e n pelo JS akaka

function adicionaContato() {
    const imputNomeContato = document.getElementById('nome-contato');
    const imputNumeroContato = document.getElementById('numero-contato');

    if (noContato.includes(imputNomeContato.value)) {
        alert(`O contato ${imputNumeroContato.value} ja foi adicionado`);
    } else{

    noContato.push(imputNomeContato);
    numContato.push(parseFloat(imputNumeroContato));

    let linha = '<tr>';
        linha += `<td>${imputNomeContato.value}</td>`;
        linha += `<td>${imputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    imputNomeContato.value = '';
    imputNumeroContato.value = '';
}

function atualizaContato() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}