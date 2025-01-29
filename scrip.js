document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelector(".hearts");
    let scale = 1;

    setInterval(() => {
        scale = scale === 1 ? 1.2 : 1;
        hearts.style.transform = `scale(${scale})`;
    }, 500);
});
