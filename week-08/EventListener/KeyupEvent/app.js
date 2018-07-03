document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector("h1");
    window.addEventListener("keyup", function(e) {
        h1.innerText = "Last pressed key code is: " + e.code;
    });
});
