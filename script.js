$(document).ready(function() {

    //get data when calculator key is pushed
    document.getElementById('keypad').addEventListener('click', getKey);

    function getKey(k) {

        console.log(k.target.id);
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