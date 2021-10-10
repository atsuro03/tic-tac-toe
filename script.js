//勝敗判定

let bool = true;
function judge(bool) {
    if(bool) return "win";
    else return "lose";
}

let winAndLose = document.getElementById("winAndLose");

let result = "<div>";
result += `
    <h4 class="text-center">勝敗</h4>
    <div class="d-flex justify-content-around">
`;


let player1 = `
    <div>
        <p>Player1</p>
        <p>${judge(bool)}</p>
    </div>
`; 

let player2 = `
    <div>
        <p>Player2</p>
        <p>${judge(bool)}</p>
    </div>
`;

result += `
            ${player1}
            ${player2}
        </div>
    </div>
`;

const data = [
    [0, 1, 2], 
    [1, 0, 2], 
    [0, 1, 2]
];

function drawSymbol(data) {
    switch(data) {
        case 0:
            return "";
        case 1:
            return "〇";
        case 2:
            return "✕";
    }
}

let square_outer = document.createElement("div");
square_outer.classList.add("bg-light", "my-2");
for(let i = 0; i < 3; i++) {
    let square = document.createElement("div");
    square.classList.add("d-flex", "judtify-content-center", "row-2");
    let square_inner = "";
    for(let j = 0; j < 3; j++) {
        square_inner += `
            <div class="square col-md-4 col-3">
                <div class="border log-square text-center" id="${i + "-" + j}">${drawSymbol(data[i][j])}</div>
            </div>
        `;
    }
    square.innerHTML = square_inner;
    square_outer.append(square);
}


winAndLose.innerHTML = result;
winAndLose.append(square_outer);
console.log(square_outer);
