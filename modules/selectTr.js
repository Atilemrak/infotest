import { activeSort, eventSort } from "./sortRow.js";
import { dataBase, tdEdit } from "../index.js";


let deleted;
let modal;
let editId;

//выбранная строка для редактирования 
function editTr(item) {

    if (deleted) document.body.removeChild(modal);

    tdEdit.a.forEach((item) => item.classList.remove('selectTr'));
    item.classList.add('selectTr');
    editId = item.id;

    const firstname = item.querySelector('.firstname');
    const lastname = item.querySelector('.lastname');
    const about = item.querySelector('.about').querySelector('div');
    const color = item.querySelector('.color').querySelector('div');

    modal = document.createElement('form');
    const rect = item.getBoundingClientRect();

    if ((document.documentElement.scrollHeight - rect.top - window.pageYOffset) > (312 + 0)) modal.style.top = ` ${rect.top + window.pageYOffset}px`;
    else modal.style.top = ` ${document.documentElement.scrollHeight - 312 - 18}px`;


    modal.style.left = ` ${rect.right + 10}px`;
    modal.classList.add('modal');
    modal.innerHTML = `
    <p>Имя:  <input type='text' name='firstName' value='${firstname.innerHTML}' ></input></p>
    <p>Фамилия:  <input type='text' name='lastName' value='${lastname.innerHTML}' ></input></p>
    <p>Описание:  <textarea type='text' name='about'>${about.innerHTML}</textarea></p>
    <p>Цвет глаз:  <input type='text' name='color' value='${color.style.background}' ></input></p>
    <input type='submit' class='footer_modal' value='Отмена' ></input>
    <input type='submit' class='footer_modal' value='Изменить' ></input>
    `;
    document.body.append(modal);

    const closedModal = modal.querySelector('.footer_modal:nth-of-type(1)');
    const editedModal = modal.querySelector('.footer_modal:nth-of-type(2)');

    closedModal.addEventListener('click', (e) => closeModal(e));
    editedModal.addEventListener('click', (e) => editModal(e));
    deleted = true;
}

//закрываем модальное окно
function closeModal(e) {
    e.preventDefault();
    tdEdit.a.forEach((item) => item.classList.remove('selectTr'));
    document.body.removeChild(modal);
    deleted = false;
}

//если  редактированние, то записываем в dataBase новые значения, а старые удаляем
function editModal(e) {
    closeModal(e); //чтобы не дублировать код, проще вызвать функцию закрытия модального окна
    const addItem = {
        id: editId,
        name: {
            firstName: modal.elements.firstName.value,
            lastName: modal.elements.lastName.value
        },
        about: modal.elements.about.value,
        eyeColor: modal.elements.color.value
    };

    const t = dataBase.a.filter(item => item.id !== editId);
    dataBase.a = t;
    dataBase.a.unshift(addItem);

    eventSort(activeSort);
    eventSort(activeSort);
}

export default editTr;
