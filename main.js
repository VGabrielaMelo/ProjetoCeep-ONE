import { novoItem } from "./JS/criarTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', novoItem);

