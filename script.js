function definirTurno(turno, dia) {
    const dayElement = document.getElementById(`day-${dia}`);
    if (dayElement) {
        //dayElement.innerText = `${dia}`;
        var modelo = `<div class="num_redondo">${dia}</div>`;
        dayElement.innerText += '\n'
        dayElement.innerText += `${turno}`
        dayElement.innerText += '\n'
        dayElement.innerHTML = modelo + dayElement.innerText
    }
}

function marcarDiasPassados() {
    const hoje = new Date();
    //console.log(hoje)
    const diaAtual = hoje.getDate();
    //console.log(diaAtual)

    for (let i = 1; i < diaAtual; i++) {
        const dayElement = document.getElementById(`day-${i}`);
        if (dayElement) {
            dayElement.classList.add('past');
            dayElement.innerHTML += '<br>'
            dayElement.innerHTML += `✔️`
        }
    }

    for (let j = diaAtual + 1; j < 31; j++) {
        const dayElement = document.getElementById(`day-${j}`);
        //dayElement.classList.add('past');
        dayElement.innerHTML += '<br>'
        dayElement.innerHTML += `⌛`
    }

    const dayElement = document.getElementById(`day-${diaAtual}`);
    dayElement.classList.add('hoje');
    dayElement.innerHTML += '<br>'
    dayElement.innerHTML += `👨‍💼📊📈📁`
}


// Atualizar o horário em caso de troca de turno
function atualizar() {
    /*
    funcionario['Lucas'][10 - 1] = 'T. 10h_Lucas'
    funcionario['Lucas'][11 - 1] = 'T. 18h_Lucas'
    funcionario['Lucas'][12 - 1] = 'T. 18h_Lucas'
    funcionario['Leonardo'][15 - 1] = 'T. 15h_Leonardo'
    funcionario['Leonardo'][16 - 1] = 'T. 18h_Leonardo'
    */
}


function Definir_turno(vetor) {
    var dia = 1
    vetor.forEach(el => {
        definirTurno(el, dia)
        dia += 1
    });
}

function selecionar_funcionario() {
    var colaborador = document.getElementById("funcionarios").value

    limpar()
    atualizar()
    //console.log(`${funcionario}.${colaborador}`)
    Definir_turno(funcionario[colaborador])
    marcarDiasPassados();
}

function limpar() {
    for (let i = 1; i < 32; i++) {
        const dayElement = document.getElementById(`day-${i}`);
        if (dayElement) {
            dayElement.innerHTML = ' '
        }
    }
}

function atualizar_campo_funcionario(){
    var vectorNames = Object.keys(funcionario)
    var colaborador = document.getElementById("funcionarios").value    
    vectorNames.forEach(element => {
        if (element!="limpar"){
            colaborador += `<option value="${element}">${element}</option>`
            console.log(element)
        }        
    });

}


fetch('funcionario.JSON')
    .then(response => response.json()) // ou response.text() se o arquivo não for um JSON válido
    .then(data => {
        funcionario = data;
        funcionario = funcionario[0];
        console.log(data);
    })
    .catch(error => {
        // Trate quaisquer erros que possam ocorrer durante o processo
        console.error('Ocorreu um erro:', error);
    });


// ... adicione mais chamadas à função definirTurno para os demais dias    
//marcarDiasPassados();

