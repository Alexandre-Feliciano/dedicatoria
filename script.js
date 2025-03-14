document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrosel");
    let index = 0;

    function mudarImagem() {
        index++;
        if (index > 2) index = 0;
        carrossel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(mudarImagem, 3000);
});
