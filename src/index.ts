let sales: number = 123_456_789;

let course = 'TypeScript';

let is_published: boolean = true;

function render(document: any) {
    console.log(document);
    
}

let animals: string[] = [];

animals = ['CaT', 'MONKEY', 'goose', 'hORsE'];

let lowerAnimals: string[] = animals.map(n => n.toLowerCase());

console.log(lowerAnimals);


let user: [number, string] = [1, 'Kakai'];

// user.push(1);

// PascalCase
const enum Size { Small = 7, Medium, Large }; 
// adding 'const' before an enum will generate more optimized code in the index.js file
// by default, first value will be 0, and the values after will always be one greater than the previous. 
// however, we can initialize the first number to a digit other than 0 and the rest will simply follow suit e.g. { Small = 4, Medium = 5, Large = 6 }
// we can also set our own values if we don't want this default behaviour e.g. { Small = 's', Medium = 'm', Large = 'l' }. 

let mySize: Size = Size.Medium;

console.log(mySize);







