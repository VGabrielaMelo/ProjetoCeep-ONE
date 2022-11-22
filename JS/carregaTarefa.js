import { criarData } from "./criarData.js";
import { OrdenaData, RemoveDatasRepetidas } from "./data.js";

export const carregaTarefa = () =>{
    
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas') || []);

    lista.innerHTML = '';

    const DatasUnicas = RemoveDatasRepetidas(tarefasCadastradas);

    OrdenaData(DatasUnicas);

    DatasUnicas.forEach((dia) => {
        lista.appendChild(criarData(dia));
    });

};