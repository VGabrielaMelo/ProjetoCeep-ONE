export const BotaoDeletar = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add('check-button');
    botaoDeleta.innerText = 'Deletar';

    botaoDeleta.addEventListener('click', DeletarTarefa);

    return botaoDeleta;
};

const DeletarTarefa = (evento) => {
    const botaoDeleta = evento.target;

    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();

    return botaoDeleta;
};
