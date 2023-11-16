let value = prompt("Nhap vao day 1 so");
let numbers = [ 1, 3 ,5 ,7 ,9];
for (i = 0; i <= numbers.length; i++) {
    if (value == numbers[i]){
        alert("Value " + numbers[i] + " found at " + i);
    }
}