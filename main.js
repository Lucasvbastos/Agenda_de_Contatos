const form = document.getElementById('form-contato');
const imgcheck = '<img src="./images/check.png" alt="Imagem de check" />';
const contatos = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
    atualizaMediaFinal();
    sumir();
})

function adicionaContato(){
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if(notas.includes(inputNumero.value)) {
        alert(`O número ${inputNumero.value} já foi inserido.`);
    } else {
        notas.push(inputNome.value);
        notas.push(inputNumero.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `<td>${imgcheck}</td>`;
        linha += '</td>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela =document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}