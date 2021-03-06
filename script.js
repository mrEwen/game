var banner = document.querySelector(".banner"),
    boxes = document.querySelectorAll(".box"),
    X_or_O = 0,
    replayBtn = document.querySelector(".replay");

function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    banner.innerHTML = b1.innerHTML + " wygrał";
    banner.style.fontSize = "30px";
    boxes.forEach(function (e) {
        e.addEventListener("click", replay);
    });
}

function getWinner() {

    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");

    // get all posibilites
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinnerBoxes(box1, box2, box3);

    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinnerBoxes(box4, box5, box6);

    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7, box8, box9);

    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1, box4, box7);

    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2, box5, box8);

    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3, box6, box9);

    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1, box5, box9);

    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3, box5, box7);

}

boxes.forEach(function (e) {
    e.addEventListener('click', function () {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_or_O % 2 === 0) {
                console.log(X_or_O);
                this.innerHTML = "X";
                banner.innerHTML = "Kolej na O";
                getWinner();
                X_or_O += 1;

            } else {
                console.log(X_or_O);
                this.innerHTML = "O";
                banner.innerHTML = "Kolej na X";
                getWinner();
                X_or_O += 1;
            }
        }

    });
});

function replay() {

    boxes.forEach(function (e) {
        e.classList.remove("win");
        e.innerHTML = "";
        banner.style.fontSize = "19px";
        banner.innerHTML = "Zagraj w kółko i krzyżyk";
        e.removeEventListener("click", replay);
        console.clear();
        X_or_O = 0;
    });

}
replayBtn.addEventListener("click", replay);
