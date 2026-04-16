const clock = document.createElement("div");
clock.style.position = "absolute";
clock.style.padding = "12px 24px";
clock.style.fontSize = "24px";
clock.style.color = "white";
clock.style.borderRadius = "16px";
clock.style.backdropFilter = "blur(20px)";
clock.style.background = "rgba(255, 255, 255, 0.12)";
clock.style.zIndex = "9999";
clock.style.textShadow = "0 0 8px rgba(255,255,255,0.4)";
document.body.appendChild(clock);

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    clock.textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 1000);

function positionClock() {
    const panel = document.querySelector(".login-wrapper");
    const rect = panel.getBoundingClientRect();

    clock.style.left = rect.left + rect.width / 2 + "px";
    clock.style.top = rect.top - 60 + "px"; 
    clock.style.transform = "translateX(-50%)";
}
function adjustClockOnError(hasError) {
    const panel = document.querySelector(".login-wrapper");
    const rect = panel.getBoundingClientRect();

    if (hasError) {
        clock.style.top = rect.top -100 + "px";
    } else {
        clock.style.top = rect.top = rect.top - 60 + "px";
    }
}

window.addEventListener("load", positionClock);
window.addEventListener("resize", positionClock);

const loginBtn = document.querySelector(".login-panel button");
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        loginBtn.click();
    }
});
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("login-error");

loginBtn.addEventListener("click", () => {
    const username = document.querySelector(".login-panel input[type='text']").value;
    const password = document.querySelector(".login-panel input[type='password']").value;

    if (username === "admin" && password === "admin") {

        adjustClockOnError(false);

        errorMsg.style.display = "none";

        loading.classList.add("active");

        setTimeout(() => {
            loading.classList.remove("active");

            const login = document.querySelector(".login-wrapper");
            const main = document.getElementById("main");

            login.classList.add("fade");

            setTimeout(() => {
                login.style.display = "none";

                main.style.display = "block";
                main.classList.add("fade-show");
                clock.style.display = "none";
            }, 500);

        }, 2000);

    } else {
    if (username === "admin" && password === "admin") {
    errorMsg.style.display = "none";
    adjustClockOnError(false);
} else {
    errorMsg.style.display = "block";
    adjustClockOnError(true);
}
    }

});

