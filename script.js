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
            calcStr = "";
            calcStr += data;
            histStr += data;
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;

            //DECIMAL
        }
        if (data == "dpoint") {
            if (visible) {
                visible = false;
                calcStr = "";
                calcStr += ".";
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
            } else {
                calcStr += ".";
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
            }
        }

        //OPERATORS
        if (data == "plus") {
            visible = false;
            calcStr += "+";
            histStr += "+";
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;
        }
        if (data == "minus") {
            visible = false;
            calcStr += "-";
            histStr += "-";
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;
        }
        if (data == "mult") {
            visible = false;
            calcStr += "*";
            histStr += "*";
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;
        }
        if (data == "divide") {
            visible = false;
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
            document.getElementById("history").innerHTML = histStr + " = " + eval(histStr);
        }
        console.log(data);
        console.log(calcStr);
        console.log(histStr);
        console.log(visible);
    }
});