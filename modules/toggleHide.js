
//находим нужную кнопку и вешаем событие при клике
function toggleHide() {

    const toggleAll = document.querySelector('.toggle_all');
    const toggleFirtsname = document.querySelector('.toggle_firstname');
    const toggleLastname = document.querySelector('.toggle_lastname');
    const toggleAbout = document.querySelector('.toggle_about');
    const toggleColor = document.querySelector('.toggle_color');

    toggleAll.addEventListener("click", () => OnToogle("table", toggleAll));
    toggleFirtsname.addEventListener("click", () => OnToogle("firstname", toggleFirtsname));
    toggleLastname.addEventListener("click", () => OnToogle("lastname", toggleLastname));
    toggleAbout.addEventListener("click", () => OnToogle("about", toggleAbout));
    toggleColor.addEventListener("click", () => OnToogle("color", toggleColor));

}

//прячем или нет нужный нам ряд
function OnToogle(element_class, button) {
    button.classList.toggle("toggleButton");
    const toggle = document.querySelectorAll(`.${element_class}`);
    toggle.forEach((item) => item.classList.toggle("display_hide"));
}

export default toggleHide;