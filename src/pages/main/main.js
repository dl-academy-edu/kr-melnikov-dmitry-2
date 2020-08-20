var popup = document.querySelector(".modal_js"),
    buttonOpen = document.querySelector(".button-open_js"),
    buttonClose = document.querySelector(".button-close_js"),
    input = document.querySelector(".input_js"),
    html = document.querySelector("html");

buttonOpen.addEventListener("click", function() {
    html.classList.add("modal_open");
    input.focus();
});

buttonClose.addEventListener("click", function() {
    html.classList.remove("modal_open");
    buttonOpen.focus();
});

buttonClose.addEventListener("keydown", function(t) {
    if(t.code === "Tab" && buttonClose.focus && html.classList.contains("modal_open")) {
        input.focus();
        }
});

window.addEventListener("keydown", function(e) {
    if(e.code === "Escape" && html.classList.contains("modal_open")) {
        html.classList.remove("modal_open");
    }
});

// var buttonOpenMenu = document.getElementById("js-button-open-menu"),
//     buttonCloseMenu = document.getElementById("js-button-close-menu");

// buttonOpenMenu.addEventListener("click", function () {
//     html.classList.add("open-mobile-menu");
// });

// buttonCloseMenu.addEventListener("click", function () {
//     html.classList.remove("open-mobile-menu");
// });
