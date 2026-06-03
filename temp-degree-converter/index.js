const mytextbox = document.getElementById("mytextbox");
const tofarhenheit = document.getElementById("tofarhenheit");
const tocelcius = document.getElementById("tocelcius");
const result = document.getElementById("result");
let temp;


function convert(mytextbox) {

    if (tofarhenheit.checked) {

        tofarhenheit = mytextbox.value  * 9/5 + 32;
        result.textContent = tofarhenheit + "F";
    }
    else if (tocelcius.checked) {
        
        tocelcius = mytextbox.value  -32 * 5/9;
        result.textContent = tocelcius + "C";
    }
    else{
        result.textContent = "please select unit";
    }
}