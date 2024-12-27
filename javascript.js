



let sum = (function () {

    let suma = 0;
    return function (a) {
        suma += a;
        return suma;
    }

})();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));