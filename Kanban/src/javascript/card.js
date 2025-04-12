export function criarCard() {
    const card_novo = document.createElement('div');
    card_novo.className = 'kanban-card';
    card_novo.setAttribute('draggable', 'true');

    const top = document.createElement('div');
    top.className = 'top';

    const badge = document.createElement('div');
    badge.className = 'badge-high';
    const badge_span = document.createElement('span');
    const input = document.createElement('input');
    input.setAttribute('readonly', 'true');
    input.className = 'input-badge';
    badge_span.appendChild(input);
    badge.appendChild(badge_span);

    const close_button = document.createElement('button');
    close_button.className = 'close-button';
    close_button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    const edit_button = document.createElement('button');
    edit_button.className = 'edit-button';
    edit_button.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    top.appendChild(badge);
    top.appendChild(edit_button);
    top.appendChild(close_button);

    const card_title = document.createElement('textarea');
    card_title.setAttribute('readonly', 'true');
    card_title.className = 'card-title';


    const card_infos = document.createElement('div');
    card_infos.className = 'card-infos';

    const card_icons = document.createElement('div');
    card_icons.className = 'card-icons';

    const comentario = document.createElement('p');
    comentario.innerHTML = '<i class = "fa-regular fa-comment"></i> 1';

    const anexo = document.createElement('p');
    anexo.innerHTML = '<i class = "fa-solid fa-paperclip"></i> 1';

    const avatar = document.createElement('img');
    avatar.className = 'image';
    avatar.alt = 'Avatar';
    avatar.src = 'src/images/image de profil.jpg';

    card_icons.appendChild(comentario);
    card_icons.appendChild(anexo);
    card_icons.appendChild(avatar);

    card_infos.appendChild(card_icons);

    card_novo.appendChild(top);
    card_novo.appendChild(card_title);
    card_novo.appendChild(card_infos);

    return card_novo;
}

export function fecharCard(card) {
    card.remove();
}

export function editarCard(card) {
    const input = card.querySelector('.input-badge');
    const textarea = card.querySelector('.card-title');
    const editButton = card.querySelector('.edit-button');

    if (!input || !textarea || !editButton) return;

    const verificacao = input.readOnly;

    input.readOnly = !verificacao;
    textarea.readOnly = !verificacao;

    editButton.innerHTML = !verificacao 
        ? '<i class="fa-solid fa-pen-to-square"></i>'
        : '<i class="fa-solid fa-floppy-disk"></i>';
}


export default {fecharCard, criarCard, editarCard};