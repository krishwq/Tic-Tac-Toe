let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winpattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];
const resetbtn=()=>{
    turnO=true;
    enabledbtn();
    msgContainer.classList.add("hide");
   for(box of boxes){
    box.classList.remove("green");
    box.classList.add("white");
   }

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.classList.remove("white");
            box.classList.add("blue");
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.classList.remove("white");
            box.classList.add("red");
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});
const disabledbtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
    reset.disabled=true;

}
const enabledbtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    reset.disabled=false;
    
}
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbtn();
};
const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
                boxes[pattern[0]].classList.add("green");
                boxes[pattern[1]].classList.add("green");
                boxes[pattern[2]].classList.add("green");
                break;
            }
        }
    }
};
reset.addEventListener("click",resetbtn);
newbtn.addEventListener("click",resetbtn);
