var user_number =document.getElementById("user_number");
var random_number =document.getElementById("random_number");
var result_wl =document.getElementById("result_wl");
var turns_t =document.getElementById("turns");
var win_w =document.getElementById("win");
var loss_l =document.getElementById("loss");
var info_box_result =document.getElementById("info_box_result")
var msg =document.getElementById("msg")

var turns = 10;
var win = 0;
var loss = 0;



function tryyourluck(userNumber) {
    var randomNumber = Math.random() * 6;
    var ceil = Math.ceil(randomNumber);
    console.log(ceil);
    user_number.innerText = userNumber;
    random_number.innerText = ceil;
    turns_t.innerText = --turns;

    if (ceil === userNumber){
        result_wl.innerText = "You won";
        info_box_result.style.backgroundColor = "green";
        result_wl.style.color = "white";
        win_w.innerText = ++win;
    } else {
        result_wl.innerText = "you loss";
        info_box_result.style.backgroundColor ="red";
        result_wl.style.color = "white";
        loss_l.innerText = ++loss;
    }
    checkResult()
}


function checkResult() {
    if (turns == 0) {
        if (win >= 3) {
            msg.innerText = "congratulations ! You Are Win";
        } else {
            msg.innerText = "Sorry ! You Are Loss"
        }
        turns = 10;
        win = 0;
        loss = 0;
        turns_t.innerText = turns;
        win_w.innerText = win;
        loss_l.innerText = loss;
    } 
}















