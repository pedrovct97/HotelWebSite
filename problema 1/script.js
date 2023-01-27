let valor = 157.99
let q_Quartos = 300
let quartos = []
let numQuarto = 0
var data = new Date()
var anoHoje = data.getFullYear()
var quartoUtilizados = []
let res = document.getElementById('dadosHospede')
//let res2 = document.getElementById('erro')


for (let i = 1; i <= q_Quartos; i++) {
    quartos.push(i)
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 300) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    nome = document.querySelector('input#name').value
    ano = document.querySelector('input#anoN').value
    cpf = document.querySelector('input#cpf').value
    sex = document.querySelector('input#sex').value
    email = document.querySelector('input#email').value


    if (nome.length == 0 || ano.length == 0 || cpf.length == 0 || sex.length == 0 || email.length == 0) {
        window.alert('Existem informações que não foram preenchidas')
    } else {

        numQuarto = Number(Math.floor(Math.random() * 300));
        if (isNumero(numQuarto) && !inLista(numQuarto, quartoUtilizados) && (numQuarto <= 300)) {
            if ((2022 - ano) <= 18) {
                window.alert('Esse cliente é menor de idade. É necessário a presença de um responsável.')
                res.innerHTML = `O solicitante possui idade menor de 18 anos.`
            } else {
                res.innerHTML = `<br>O hospede possui ${anoHoje - ano} anos<br>`
                quartoUtilizados.push(Number(numQuarto))
                res.innerHTML += `O seu quarto é o: ${numQuarto}<br>`
                return quartoUtilizados
            }


        } else {
            window.alert(`O quarto ${numQuarto} ja está sendo utilizado`)
            res.innerHTML = `<strong style="color: red">O quarto ${numQuarto} está em uso.</strong>`
        }

    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    info = document.querySelector('div#msgemail')
    caixa = document.querySelector('input#email')

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        info.innerHTML = "E-mail válido";
    }
    else {
        info.innerHTML = "<font color='red'>E-mail inválido </font>";
    }
}