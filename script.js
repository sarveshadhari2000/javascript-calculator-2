$(document).ready(function() {

    var calcStr = "";
    var total = false;

    //get data when calculator key is clicked
    document.getElementById('keypad').addEventListener('click', getKey);

    function getKey(k) {
        var key = k.target.id;
        compute(key);
    }

    function compute(data) {
        //NUMBERS
        if (data >= 0 && data <= 9) {
            if (total) {
                calcStr = "";
                calcStr += data;
                total = false;
                document.getElementById("display").innerHTML = calcStr;

            } else {
                calcStr += data;
                document.getElementById("display").innerHTML = calcStr;

            }
            //DECIMAL
        }
        if (data == "dpoint") {
            if (total) {
                calcStr = "";
                calcStr += ".";
                total = false;
                document.getElementById("display").innerHTML = calcStr;

            } else {
                calcStr += ".";
                document.getElementById("display").innerHTML = calcStr;

            }
        }

        //OPERATORS
        if (data == "plus") {
            total = false;
            calcStr += "+";
            document.getElementById("display").innerHTML = calcStr;
        }
        if (data == "minus") {
            total = false;
            calcStr += "-";
            document.getElementById("display").innerHTML = calcStr;
        }
        if (data == "mult") {
            total = false;
            calcStr += "&#215;";
            document.getElementById("display").innerHTML = calcStr;
        }
        if (data == "divide") {
            total = false;
            calcStr += "&#247;";
            document.getElementById("display").innerHTML = calcStr;
        }
        if (data == "percent") {
            total = false;
            calcStr += "%";
            document.getElementById("display").innerHTML = calcStr;
        }

        console.log(data);
        console.log(calcStr);
        console.log(total);


    }



});

/*
window.onload = function() {
    //define numbers



    //operator functions
    function add(first, second) {
        return first + second;
    }

    function subtract(first, second) {
        return first - second;
    }

    function multiply(first, second) {
        return first * second;
    }

    function divided(first, second) {
        return first / second;
    }

    function percent(first) {
        return first / 100;
    }


    percent(1, 2);
}
*/