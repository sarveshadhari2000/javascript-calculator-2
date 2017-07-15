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

        //show numbers in display as typed
        if (data >= 0 && data <= 9) {
            if (total) {
                calcStr = "";
                calcStr += data;
                total = false;
                document.getElementById("display").innerHTML = calcStr;
                return 1;
            } else {
                console.log(calcStr);
                document.getElementById("display").innerHTML = calcStr;
                return 1;
            }

        } else {
            console.log("Not a number");
        }
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