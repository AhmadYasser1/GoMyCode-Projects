let plusButton = document.getElementsByClassName("plus");

let minusButton = document.getElementsByClassName("minus");

let totalNumber = document.getElementsByClassName("total");

let grandTotal = document.getElementById("grandtotal");

let heart = document.getElementsByClassName("fa-heart");

let trash = document.getElementsByClassName("fa-trash-alt");

for (i = 0; i < trash.length; i++) {
    trash[i].onclick = function(e) {
        let betengan = e.target.parentElement.parentElement;
        betengan.remove();
        calculate_sum();
    }
}

for (i = 0; i < heart.length; i++) {
    heart[i].onclick = function(e) {
        e.target.classList.toggle("far");
        e.target.classList.toggle("fas");
    }
}

function calculate_sum() {
    let sum = 0;
    for (let total_value of totalNumber) {
        sum += parseInt(total_value.innerHTML);
    }
    grandTotal.innerHTML = "$" + sum;
}


let timesTotal = function (i) {
    let lingerieQuantity = document.getElementById(`lingerie-${i}`);
    let b = document.getElementById(`dollarBill-${i}`);
    let totalNumber = document.getElementById(`total-${i}`);
    totalNumber.innerHTML = parseInt(lingerieQuantity.innerHTML) * parseInt(b.innerHTML);
}

function increase (i) {
    let lingerieQuantity = document.getElementById(`lingerie-${i}`);
    lingerieQuantity.innerHTML = parseInt(lingerieQuantity.innerHTML) + 1;
    timesTotal(i);
    calculate_sum();
}

function decrease (i) {
    let lingerieQuantity = document.getElementById(`lingerie-${i}`);
    if (parseInt(lingerieQuantity.innerText) > 0 ) {
        lingerieQuantity.innerHTML = parseInt(lingerieQuantity.innerHTML) - 1;
        timesTotal(i);
        calculate_sum();
    }
}

for (let i in plusButton) {
    plusButton[i].onclick = function() {
        increase(i)
    }
}

for (let i in minusButton) {
    minusButton[i].onclick = function() {
        decrease(i)
    }
}

timesTotal()