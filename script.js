$(document).ready(function() {

    var calcStr = "";
    var histStr = "";
    var total = "";
    var visible = false; //main display
    var history_visible = false; //history display

    //get data when calculator key is clicked
    document.getElementById('keypad').addEventListener('click', getKey);

    function getKey(k) {
        var key = k.target.id;
        compute(key);
    }

    //display and calulate
    function calcIt(show, func) {
        calcStr += show;
        histStr += show;
        total += func;
        document.getElementById("display").innerHTML = calcStr;
        document.getElementById("history").innerHTML = histStr;
    }

    function compute(data) {
        //NUMBERS
        if (data >= 0 && data <= 9) {
            if (visible) {
                calcStr = "";
                visible = false;
            }

            calcIt(data, data);
        }

        //DECIMAL
        if (data == "dpoint") {
            if (visible) {
                calcStr += ".";
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
            } else {
                calcIt(".", ".");
            }
        }

        //OPERATORS
        if (data == "plus") {
            calcIt(" + ", "+");
        }
        if (data == "minus") {
            calcIt(" - ", "-");
        }
        if (data == "mult") {
            calcIt(" &#215; ", "*");
        }
        if (data == "divide") {
            calcIt(" &#247; ", "/");
        }

        //EQUALS
        if (data == "equals") {
            visible = true;
            histStr += " = \xa0" + eval(total);
            document.getElementById("display").innerHTML = eval(total);
            document.getElementById("history").innerHTML = histStr;
            total = document.getElementById("display").innerHTML;
        }

        //CLEAR
        if (data == "clear") {
            calcStr = "";
            histStr = "";
            total = "";
            visible = false;
            history_visible = false;
            document.getElementById("display").innerHTML = "0";
            document.getElementById("history").innerHTML = "0";
        }
    }
});