import { dataBase, dbPage, page, table } from "../index.js";
import createTable from "./createTable.js";



function initPagination() {
    const pagination = document.querySelector(".main_pagination");
    const pagination_length = Math.ceil(dataBase.a.length / 10);
    let paginationAll = [];
    for (let i = 1; i < pagination_length + 1; i++) {
        const newDiv = document.createElement("span");
        newDiv.innerHTML = i;
        newDiv.classList.add("pagination");
        newDiv.addEventListener("click", () => onClickPagination(newDiv, newDiv.innerHTML));
        paginationAll.push(newDiv);
        pagination.append(newDiv);

        if (i == 1 && paginationAll.length < 2) newDiv.classList.add("active");
    }


    //определяем нужную нам страницу
    function onClickPagination(item, id) {
        page.a = id;
        dbPage.a = dataBase.a.slice((page.a * 10 - 10), page.a * 10);
        paginationAll.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        createTable(table, dbPage.a);

    }

}

export default initPagination;