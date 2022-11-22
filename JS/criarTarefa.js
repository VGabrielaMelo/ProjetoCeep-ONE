import { BotaoConcluir } from './botaoConcluir.js';
import { BotaoDeletar } from "./botaoDeletar.js";
import { carregaTarefa } from "./carregaTarefa.js";
 
export const novoItem = (evento) => {
    evento.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-calendario]');
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor, 
        dataFormatada,
        concluida
    };

    const tarefasAtualizadas = [... tarefas, dados]

    const concluida = false;

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));

    input.value = " ";

    carregaTarefa();
};

export const Tarefa = ({valor, dataFormatada, concluida}, id)=> {

    const tarefa = document.createElement('li'); // cria elementos de HTML
    tarefa.classList.add('task') // para add uma classe
    const conteudo = `<p class="content">${dataFormatada} * ${valor} </p>`;

    if(concluida) {
        tarefa.classList.add('done');
    };

    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoConcluir(carregaTarefa, id))
    tarefa.appendChild(BotaoDeletar())

    return tarefa;
};
// ()=> função anonima
// .preventDefault() -> prevenir o comportamento padrão do form (recarregar a página)
// para disparar um evento precisa do evento, elemento de recebe o evento e o que vai acontecer após o disparo
