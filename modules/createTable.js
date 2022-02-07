import { tdEdit } from "../index.js";
import editTr from "./selectTr.js";


function createTable(table, dbPage) {
 // если есть таблица - удаляем
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    const toggleFirtsname = document.querySelector('.toggle_firstname');
    const toggleLastname = document.querySelector('.toggle_lastname');
    const toggleAbout = document.querySelector('.toggle_about');
    const toggleColor = document.querySelector('.toggle_color');

    dbPage.map((item) => {
        //создание tr и присвоение id
        const newTr = document.createElement("tr");
        newTr.id = item.id;

        //создание td и используем для firstname
        const tdFirstName = document.createElement("td");
        tdFirstName.innerHTML = item.name.firstName;
        tdFirstName.classList.add("firstname");
        if (toggleFirtsname.classList.contains('toggleButton'))
            tdFirstName.classList.add("display_hide");

        //создание td и используем для lastName
        const tdLastname = document.createElement("td");
        tdLastname.innerHTML = item.name.lastName;
        tdLastname.classList.add("lastname");
        if (toggleLastname.classList.contains('toggleButton'))
            tdLastname.classList.add("display_hide");

        //аналогично
        const tdAbout = document.createElement("td");
        tdAbout.innerHTML = `<div>${item.about} </div>`;
        tdAbout.classList.add("about");
        if (toggleAbout.classList.contains('toggleButton'))
            tdAbout.classList.add("display_hide");

        //создание color
        const tdColor = document.createElement("td");
        const tdDiv = document.createElement("div");
        tdColor.classList.add("color");
        if (toggleColor.classList.contains('toggleButton'))
            tdColor.classList.add("display_hide");


        tdDiv.style.background = item.eyeColor;
        tdDiv.style.width = '30px';
        tdDiv.style.height = '30px';
        tdDiv.style.margin = 'auto';

        tdColor.appendChild(tdDiv);

        //   
        //добавляем вcё в tr
        newTr.appendChild(tdFirstName);
        newTr.appendChild(tdLastname);
        newTr.appendChild(tdAbout);
        newTr.appendChild(tdColor);

        table.append(newTr);

    });

    //приклрепляем к созданоой таблице все tr onclick для выбора редактирования
    tdEdit.a = document.querySelectorAll("tr:not(:first-child)");
    tdEdit.a.forEach((item) => item.addEventListener('click', () => editTr(item)));

}

export default createTable;