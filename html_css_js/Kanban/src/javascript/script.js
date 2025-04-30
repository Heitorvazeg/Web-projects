import config from './card.js';
const {criarCard, fecharCard, editarCard} = config;

const columns = document.querySelectorAll(".kanban-column");
const addcards = document.querySelectorAll(".add-card");

document.addEventListener("dragstart", e => {
    if (e.target.classList.contains("kanban-card")) {
        e.target.classList.add("dragging");
    };
});

document.addEventListener("dragend", e => {
    if (e.target.classList.contains("kanban-card")) {
        e.target.classList.remove("dragging");
    };
});

columns.forEach(column => {
    column.addEventListener("dragover", e => {
        e.preventDefault();
        const draggingcard = document.querySelector(".dragging");
        column.appendChild(draggingcard);
    });
});

addcards.forEach(button => {
    button.addEventListener("click", () => {
        const coluna_card = button.closest(".kanban-column");
        const card_novo = criarCard();
        coluna_card.appendChild(card_novo);
    });
});

document.addEventListener("click", e => {
    const btn = e.target.closest(".close-button");
    if (btn) {
        const card = btn.closest(".kanban-card");
        fecharCard(card);
    };
});

document.addEventListener("click", e => {
    const btn = e.target.closest(".edit-button");
    if (btn) {
        const card = btn.closest(".kanban-card");
        editarCard(card);
    };
});

