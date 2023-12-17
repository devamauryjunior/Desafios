"use strict";
const heartsNormal = document.querySelectorAll('.card_img');

heartsNormal.forEach((btn) => {
    btn.style.cursor = "pointer";
    btn.addEventListener('click', function() {
        if (btn.classList.contains('card_img')) {
            btn.setAttribute("src", "assets/img/vector.png");
            btn.setAttribute("class", "heartActivate");
        } else {
            btn.setAttribute("src", "assets/img/icon_heart.png");
            btn.setAttribute("class", "card_img");
        }
    });
});