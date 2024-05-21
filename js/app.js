function alterarStatus(i) {

    var game = document.getElementById(`game-${i}`);
    var img = game.querySelector(".dashboard__item__img");
    var botao = game.querySelector(".dashboard__item__button");


    if (botao.classList.contains("dashboard__item__button--return")) {

        botao.classList.remove("dashboard__item__button--return");
        botao.innerText = "Alugar";
        img.classList.remove("dashboard__item__img--rented");

    } else {

        botao.classList.add("dashboard__item__button--return");
        botao.innerText = "Devolver";
        img.classList.add("dashboard__item__img--rented");
        
    };

};