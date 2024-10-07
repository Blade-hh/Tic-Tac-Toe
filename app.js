let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let body = document.querySelector("main");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const reset_btn = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    body.classList.remove("hide");
}

const disableBoxes = () => {

    for (let box of boxes) {
        box.disabled = true;
    }
    msgContainer.classList.remove("hide");
    body.classList.add("hide");


}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", function (onClick) {


        if (turnO) {

            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 == posval2 && posval2 == posval3) {
                console.log("winn!", posval1);
                msg.innerText = `Congratulations Winner is ${posval1}`;
                disableBoxes();

            }
        }
    }

}

resetBtn.addEventListener("click", reset_btn);
newGameBtn.addEventListener("click", reset_btn);




