"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
function render(document) {
    console.log(document);
}
let animals = [];
animals = ["CaT", "MONKEY", "goose", "hORsE"];
let lowerAnimals = animals.map((n) => n.toLowerCase());
console.log(lowerAnimals);
let user = [1, "Kakai"];
let mySize = 8;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2023);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Kakai";
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
let metric = "cm";
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Habari!");
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map