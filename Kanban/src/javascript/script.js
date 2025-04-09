const cards = document.querySelectorAll(".kanban-card");
const columns = document.querySelectorAll(".kanban-column");

cards.forEach(card => {
    card.addEventListener("dragstart", () => {
        card.classList.add('dragging');
    });
});

cards.forEach(card => {
    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
    });
});

columns.forEach(column => {
    column.addEventListener("dragover", e => {
        e.preventDefault();
        const draggingcard = document.querySelector(".dragging");
        column.appendChild(draggingcard)
    });
});