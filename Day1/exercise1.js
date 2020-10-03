var dis1 = document.querySelector("#display1")
var dis2 = document.querySelector("p span")
var result = 1;
nums.addEventListener("change",function() {
        var numbers = document.getElementById("nums").value;
        if (numbers % 2 === 0) {
        dis1.textContent = "It's an even number";
        } else {
        dis1.textContent = "It's not an even number";
        }
        // for (var i=1; i<=numbers; i++) {
        /* result = result * i;
        }
        dis2.textcontent = result;
*/});