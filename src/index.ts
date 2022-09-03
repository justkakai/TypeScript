let sales: number = 123_456_789;

let course = "TypeScript";

let is_published: boolean = true;

function render(document: any) {
  console.log(document);
}

let animals: string[] = [];

animals = ["CaT", "MONKEY", "goose", "hORsE"];

let lowerAnimals: string[] = animals.map((n) => n.toLowerCase());

console.log(lowerAnimals);

let user: [number, string] = [1, "Kakai"];

// user.push(1);

// PascalCase
const enum Size {
  Small = 7,
  Medium,
  Large,
}
// adding 'const' before an enum will generate more optimized code in the index.js file
// by default, first value will be 0, and the values after will always be one greater than the previous.
// however, we can initialize the first number to a digit other than 0 and the rest will simply follow suit e.g. { Small = 4, Medium = 5, Large = 6 }
// we can also set our own values if we don't want this default behaviour e.g. { Small = 's', Medium = 'm', Large = 'l' }.

let mySize: Size = Size.Medium;

console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000, 2023);
// the default value is 2022, and this will be used if no second argument is provided while calling the function
// however, we have provided a second argument here (2023) so it will override the default value of 2022!

// TYPE ALIASES (PascalCase!)

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.name = "Kakai";

console.log(employee);

/*********************** Techniques used for combining types: Union Types & Intersection ***********************/

// UNION TYPES (for giving a variable or function parameter more than one type)

function kgToLbs(weight: number | string): number {
  // Narrowing (we want to narrow down the union type into a more specific type)
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

// INTERSECTION TYPES

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable; // intersection type

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
}; // type intersection in action!
