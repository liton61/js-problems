// Problem-01
function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please enter a number !";
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
}
console.log(cubeNumber(3));
console.log(cubeNumber(4));

// Problem-02
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please enter a string !";
    }
    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));

// Problem-03
function sortMaker(arr) {
    let firstElement = arr[0];
    let secondElement = arr[1];
    if (firstElement < 0 || secondElement < 0) {
        return "Invalid Input";
    }
    if (firstElement !== secondElement) {
        return [Math.max(firstElement, secondElement), Math.min(firstElement, secondElement)];
    }
    else {
        return "equal";
    }
}
console.log(sortMaker([2, ]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));

// Problem-04
function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    const fullAddress = street + "," + house + "," + society;
    return fullAddress;
}
const address = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
}
console.log(findAddress(address));

// Problem-04
function canPay(changeArray, totalDue) {
    let sum = 0;
    if (changeArray.length == 0 || changeArray == []) {
        return "Please enter an array !";
    }
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum = sum + element;
    }
    if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}
console.log(canPay([1,2,5],10));
console.log(canPay([1,5,5],10 ));
console.log(canPay([],10 ));


