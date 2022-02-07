
import getData from "./modules/getDataBase.js";

import createTable from "./modules/createTable.js";
import toggleHide from "./modules/toggleHide.js";
import initPagination from "./modules/pagination.js";
import initSort from "./modules/sortRow.js";

export let dataBase = {};
dataBase.a = await getData('./database.json');
export const table = document.querySelector(".table");

//инициализация параметров
export let  page = {a:1};
export let dbPage ={ a: dataBase.a.slice((page.a * 10 - 10), page.a * 10)};
export let tdEdit = {} ;


//createTable(table, dbPage.a);
initPagination(); // инициализация пагинации
initSort (); // запуск инициализации: сортировки 
toggleHide(); // запуск инициализации: скрыть, показать ряд 




