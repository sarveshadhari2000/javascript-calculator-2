$(document).ready(function() {

    var calcStr = "";
    var histStr = "";
    var visible = false; //main display
    var history_visible = false; //history display

    //get data when calculator key is clicked
    document.getElementById('keypad').addEventListener('click', getKey);

    function getKey(k) {
        var key = k.target.id;
        compute(key);
    }

    function compute(data) {
        //NUMBERS
        if (data >= 0 && data <= 9) {
            if (visible || history_visible) {
                calcStr = "";
                histStr = "";
                visible = false;
                history_visible = false;
            }

            calcStr += data;
            histStr += data;
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;
            console.log(data);

            //DECIMAL
        }
        if (data == "dpoint") {
            if (visible) {
                calcStr += ".";
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
            } else {
                calcStr += ".";
                histStr += ".";
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
            }
        }

        //OPERATORS
        if (data == "plus") {
            calcStr += "+";
            histStr += "+";
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;
        }
        if (data == "minus") {
            calcStr += "-";
            histStr += "-";
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;
        }
        if (data == "mult") {
            calcStr += "*";
            histStr += "*";
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;
        }
        if (data == "divide") {
            calcStr += "/";
            histStr += "/";
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;

        }

        //EQUALS
        if (data == "equals") {
            visible = true;
            history_visible = true;
            document.getElementById("display").innerHTML = eval(histStr);
            document.getElementById("history").innerHTML = histStr + " = " + eval(calcStr);
        }

        //CLEAR
        if (data == "clear") {
            calcStr = "";
            histStr = "";
            visible = false;
            history_visible = false;
            document.getElementById("display").innerHTML = "0";
            document.getElementById("history").innerHTML = "0";
        }

        console.log(calcStr);
        console.log(histStr);
        console.log(visible);
    }
});