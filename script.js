function compute() {

    p = document.getElementById("principal");
    
    if (p.value > 0) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById('result').innerText = "If you deposit " + principal + "\n, at an interest rate of " + rate + "%.\nYou will receive an amount of " + interest + ",\n in the year " + year;
    }
    else {
        alert("Please enter a postive number");
        p.focus();
    }
}



function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}