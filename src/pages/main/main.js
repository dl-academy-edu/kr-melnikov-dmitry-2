var popup = document.querySelector(".modal_js"),
    buttonOpen = document.querySelector(".button-open_js"),
    buttonClose = document.querySelector(".button-close_js"),
    input = document.querySelector(".input_js");

buttonOpen.addEventListener("click", function() {
    popup.classList.add("modal-bg_open");
    input.focus();
});

buttonClose.addEventListener("click", function() {
    popup.classList.remove("modal-bg_open");
    buttonOpen.focus();
});

buttonClose.addEventListener("keydown", function(t) {
    if(t.code === "Tab" && buttonClose.focus && popup.classList.contains("modal-bg_open")) {
        input.focus();
        }
});

window.addEventListener("keydown", function(e) {
    if(e.code === "Escape" && popup.classList.contains("modal-bg_open")) {
        popup.classList.remove("modal-bg_open");
    }
});
