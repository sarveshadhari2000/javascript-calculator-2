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
        switch (key) {
            case 'zero': key = 0;
                break;
            case 'one': key = 1;
                break;
            case 'two': key = 2;
                break;
            case 'three': key = 3;
                break;
            case 'four': key = 4;
                break;
            case 'five': key = 5;
                break;
            case 'six': key = 6;
                break;
            case 'seven': key = 7;
                break;
            case 'eight': key = 8;
                break;
            case 'nine': key = 9;
                break;
        }
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

    function deleteOne() {
        calcStr = calcStr.slice(0, -1);
        histStr = histStr.slice(0, -1);
        total = total.slice(0, -1);
        console.log(calcStr);
        console.log(histStr);

        document.getElementById("display").innerHTML = calcStr;
        document.getElementById("history").innerHTML = histStr;
    }

    function compute(data) {
        //NUMBERS
        if (calcStr === "" && data === 0) {
            return 0;
        }

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
        if (data == "decimal") {
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
        if (data == "add") {
             if (total == "" ) {
                return 0;
            }
            if (oper_active == false) {
                deleteOne();
            }
            visible = false;
            dpoint_active = true;
            calcIt(" + ", "+");
            oper_active = false;
        }
        if (data == "subtract") {
              if (total == "") {
                return 0;
            }
            if (oper_active == false) {
                deleteOne();
            }
            visible = false;
            dpoint_active = true;
            oper_active = false;
            calcIt(" - ", "-");
            oper_active = false;
        }
        if (data == "multiply") {
            if (total == "") {
                return 0;
            }
            if (oper_active == false) {
                deleteOne();
            }
            visible = false;
            dpoint_active = true;
            oper_active = false;
            calcIt(" &#215; ", "*");
        }
        if (data == "divide") {
            if (total == "") {
                return 0;
            }
            if (oper_active == false) {
                deleteOne();
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

        //DELETE
        if (data == "delete") {
            if (visible == true || calcStr == "" || calcStr.length == 1) {
                calcStr = "0";
                histStr = "0";
                document.getElementById("display").innerHTML = calcStr;
                document.getElementById("history").innerHTML = histStr;
                return 0;
            }

            deleteOne();

        }
        //ERRORS

        if (calcStr.length > 25 || total == "NaN") {
                document.getElementById("display").innerHTML = "Error";
        document.getElementById("history").innerHTML = "0";
        return 0;
            }
    }
});