import { dataBase, dbPage, page, table } from "../index.js";
import createTable from "./createTable.js";


export let activeSort;
let sort;
function initSort() {
    sort = document.querySelectorAll("th");
    sort.forEach((item) => item.addEventListener("click", (e) => eventSort(e.target)));
    activeSort = sort[0];
    eventSort(activeSort);
}
export function eventSort(e) {
    const { db, addClass } = sortRow(e, dataBase.a);
    console.log(sort);
    dataBase.a = db;
    dbPage.a = dataBase.a.slice((page.a * 10 - 10), page.a * 10);
    sort.forEach((item) => item.classList.remove("down", "top"));
    e.classList.add(addClass);
    activeSort = e;
    createTable(table, dbPage.a);
}

function sortRow(event, db) {
    let a1; //для сортировки вниз или вверх
    let a2; //для сортировки вниз или вверх
    let addClass;
    let searchButton;
    let searchButton2;

    //проверяет на класс вниз или вверх сортировать
    if (!event.classList.contains('sortZ')) {
        a1 = -1;
        a2 = 1;
        addClass = 'top';
    } else {
        a1 = 1; a2 = -1; addClass = 'down';
    }

    if (event.classList.contains('firstname')) {
        searchButton = 'name';
        searchButton2 = 'firstName';
    }

    if (event.classList.contains('lastname')) {
        searchButton = 'name';
        searchButton2 = 'lastName';
    }

    if (event.classList.contains('about')) {
        searchButton = 'about';
    }

    if (event.classList.contains('color')) {
        searchButton = 'eyeColor';
    }

    //сортировка по классу
    if (searchButton2) {
        db.sort(function (a, b) {
            const nameA = (a[searchButton][searchButton2]).toLowerCase();
            const nameB = (b[searchButton][searchButton2]).toLowerCase();
            if (nameA < nameB)
                return a1
            if (nameA > nameB)
                return a2
            return 0
        })
    }
    else {
        db.sort(function (a, b) {
            const nameA = (a[searchButton]).toLowerCase();
            const nameB = (b[searchButton]).toLowerCase();
            if (nameA < nameB)
                return a1
            if (nameA > nameB)
                return a2
            return 0

        })
    }

    event.classList.toggle('sortZ');
    return { db, addClass };
}

export default initSort;

