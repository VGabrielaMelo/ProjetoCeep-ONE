export const BotaoConcluir = () => { 
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir';

    botaoConclui.addEventListener('click', () => ConcluirTarefa(atualiza, id));

    return botaoConclui;
};

const ConcluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

    localStorage.getItem('tarefas', JSON.stringify(tarefasCadastradas));

    atualiza();
};
