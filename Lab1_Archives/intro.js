function updateValue(id, val) {
    document.getElementById('displayValue' + id).innerText = val;
}

document.getElementById('quantity1').addEventListener('input', function() {
    updateValue(1, this.value);
});

document.getElementById('quantity2').addEventListener('input', function() {
    updateValue(2, this.value);
});

document.getElementById('quantity3').addEventListener('input', function() {
    updateValue(3, this.value);
});




