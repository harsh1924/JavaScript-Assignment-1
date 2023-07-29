let arr = [1, 2, 3, "Harsh", 123, "Gear 5"];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
        console.log("First String Found: " + arr[i]);
        break;
    }
}
