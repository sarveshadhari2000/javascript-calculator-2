$(document).ready(function() {

    var calcStr = "";
    var histStr = "";
    var total = "";
    var visible = false; //main display
    var history_visible = false; //history display
    var dpoint_active = true;
    var oper_active = true;

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
                histStr = ""
                total = "";
                visible = false;
            }
            
            oper_active = true;
            calcIt(data, data);
        }

        //DECIMAL
        if (data == "dpoint") {
            if (dpoint_active === false) {
                return 0;
            }
            if (visible || calcStr == 0 || histStr == 0) {
                calcStr = "0.";
                histStr = "0.";
                total = "0.";
                visible = false;
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
                dpoint_active = false;
            } else {
                calcIt(".", ".");
                dpoint_active = false;
            }
        }

        //OPERATORS
        if (data == "plus") {
             if (total == "" || oper_active == false) {
                return 0;
            }
            visible = false;
            dpoint_active = true;
            calcIt(" + ", "+");
            oper_active = false;
        }
        if (data == "minus") {
              if (total == "" || oper_active == false) {
                return 0;
            }
            visible = false;
            dpoint_active = true;
            oper_active = false;
            calcIt(" - ", "-");
            oper_active = false;
        }
        if (data == "mult") {
            if (total == "" || oper_active == false) {
                return 0;
            }
            visible = false;
            dpoint_active = true;
            oper_active = false;
            calcIt(" &#215; ", "*");
        }
        if (data == "divide") {
            if (total == "" || oper_active == false) {
                return 0;
            }
            visible = false;
            dpoint_active = true;
            oper_active = false;
            calcIt(" &#247; ", "/");
        }

        //EQUALS
        if (data == "equals") {
             if (total == "" || visible) {
                return 0;
            }
            visible = true;
            dpoint_active = true;
            histStr += " = \xa0" + eval(total);
            document.getElementById("display").innerHTML = eval(total);
            document.getElementById("history").innerHTML = histStr;
            total = document.getElementById("display").innerHTML;
            calcStr = total;
        }

        //CLEAR
        if (data == "clear") {
            calcStr = "";
            histStr = "";
            total = "";
            visible = false;
            history_visible = false;
            dpoint_active = true;
            document.getElementById("display").innerHTML = "0";
            document.getElementById("history").innerHTML = "0";
        }
        if (data == "delete") {
            if (visible == true || calcStr == "" || calcStr.length == 1) {
                calcStr = "0";
                histStr = "0";
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
                return 0;
            }
            calcStr = calcStr.slice(0, -1);
            histStr = histStr.slice(0, -1);
            total = total.slice(0, -1);
            console.log(calcStr);
            document.getElementById("display").innerHTML = calcStr;
            document.getElementById("history").innerHTML = histStr;

        }
        //ERRORS

        console.log(total);

        if (calcStr.length > 15 || total == "NaN") {
                document.getElementById("display").innerHTML = "ERROR";
        document.getElementById("history").innerHTML = "0";
        return 0;
            }
    }
});