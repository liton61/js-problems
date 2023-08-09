// Problem - 01
// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "Please provide a valid input !"
//     }
//     else {
//         const result = Math.pow(number, 3);
//         return result;
//     }
// }
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));

// Problem - 02
// function matchFinder(string1, string2) {
//     if(typeof string1 !== "string" || typeof string2 !== "string"){
//         return "Please provide a valid string !";
//     }
//     if(string1.includes(string2)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", "Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));

// Problem - 03
// function sortMaker(arr) {
//     let firstElement = arr[0];
//     let secondElement = arr[1];
//     if (firstElement < 0 || secondElement < 0) {
//         return "Invalid input";
//     }
//     else if (firstElement === secondElement) {
//         return "equal";
//     }
//     else {
//         return [Math.max(firstElement, secondElement), Math.min(firstElement, secondElement)];
//     }
// }
// console.log(sortMaker([0, 1]));


// Problem - 04
// function findAddress(obj) {
//     const street = obj.street || "--";
//     const house = obj.house || "--";
//     const society = obj.society || "--";
//     const fullAddress = street + "," + house + "," + society;
//     return fullAddress;
// }
// const address = {
//     street:10,
//     house:"15A",
//     society:"Earth Perfect"
// }
// console.log(findAddress(address));

// Problem - 05
// function canPay(changeArray, totalDue) {
//     let sum = 0;
//     if(changeArray == 0){
//         return "Please fill up empty array !";
//     }
//     for(let i = 0; i < changeArray.length; i++){
//         const element = changeArray[i];
//         sum = sum + element;
//     }
//     if(sum > totalDue){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(canPay([1,2,5],10));
// console.log(canPay([1,5,5],10 ));
// console.log(canPay([],10 ));


