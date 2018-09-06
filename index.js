//var button1 = document.getElementById("button-1");//document пространство нашей страницы getElementById - получение элемента из страницы
//var button2 = document.getElementById("button-2");
//var button3 = document.getElementById("button-3");
//var button4 = document.getElementById("button-4");

var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";


function NumPressed (Num)
{
    if (FlagNewNum)
    {
        Fcalc.ReadOut.value = Num;
        FlagNewNum = false;
    }
    else
    {
        if (Fcalc.ReadOut.value === "0")
            Fcalc.ReadOut.value = Num;
        else
            Fcalc.ReadOut.value += Num;
    }
}

function Operation (Op)
{
    var Readout = Fcalc.ReadOut.value;
    if (FlagNewNum && PendingOp != "=")
    {
        Fcalc.ReadOut.value = Currents;
    }
    else
    {
        FlagNewNum = true;
        if ( '+' == PendingOp )
            Currents += parseFloat(Readout);
        else if ( '-' == PendingOp )
            Currents -= parseFloat(Readout);
        else if ( '/' == PendingOp )
            Currents /= parseFloat(Readout);
        else if ( '*' == PendingOp )
            Currents *= parseFloat(Readout);
        else
            Currents = parseFloat(Readout);
        Fcalc.ReadOut.value = Currents;
        PendingOp = Op;
    }
}






heading = document.getElementById("heading");

//changeColor = function (color) {
//    return function (event) {
//        heading.style.color = color;
//    }
};
// button1.onclick = changeColor("red");
// button2.onclick = changeColor("green");
//button3.onclick = changeColor("blue");
increment = function (event) {
    var i = parseInt(event.target.innerHTML);
    event.target.innerHTML = i + 1;

}
;
buttons = document.getElementsByClassName("increment-button");
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", increment)
}

button1.addEventListener("click", );
button2.addEventListener("click", changeColor("green"));
button3.addEventListener("click", changeColor("blue"));
button4.addEventListener("click", changeColor("darkgrey"));
console.log(button);