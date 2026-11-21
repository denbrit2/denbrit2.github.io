const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((content) =>
                content.classList.remove("active"),
            );

            button.classList.add("active");

            const targetId = button.dataset.tab;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
}

const allBtns = document.querySelectorAll(".btn"),
    slider = document.querySelector(".slider");
let step = 0;

allBtns[1].addEventListener("click", () => {
    step += 800;
    if (step > 1600) {
        step = 0;
        slider.style.left = -step + "px";
    } else {
        slider.style.left = -step + "px";
    }
});
allBtns[0].addEventListener("click", () => {
    step -= 800;
    if (step < 0) {
        step = 1600;
        slider.style.left = -step + "px";
    } else {
        slider.style.left = -step + "px";
    }
});
