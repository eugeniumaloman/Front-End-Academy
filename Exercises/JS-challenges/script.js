// Challenge 1
const Mark1 = {
    weight: 78,
    height: 1.69,
    BMI: function calculateBMI() {
        return this.weight / this.height ** 2;
    }
}
const John1 = {
    weight: 92, 
    height: 1.95,
    BMI: function calculateBMI() {
        return this.weight / this.height ** 2;
    }
}

const Mark2 = {
    weight: 95, 
    height: 1.88,
    BMI: function calculateBMI() {
        return this.weight / this.height ** 2;
    }
}
const John2 = {
    weight: 85, 
    height: 1.76,
    BMI: function calculateBMI() {
        return this.weight / this.height ** 2;
    }
}

let markHigherBMI1 = Boolean(Mark1.BMI() > John1.BMI());
let markHigherBMI2 = Boolean(Mark2.BMI() > John2.BMI());

console.log("Challenge 1 results:");
console.log(markHigherBMI1, markHigherBMI2);

// Challenge 2
console.log("");
console.log("Challenge 2.1 results: ");

markHigherBMI1
    ? console.log("Mark's BMI is higher than John's!")
    : console.log("John's BMI is higher than Mark's!");

markHigherBMI2
    ? console.log("Mark's BMI is higher than John's!")
    : console.log("John's BMI is higher than Mark's!");

console.log("");
console.log("Challenge 2.2 results: ");

markHigherBMI1
    ? console.log(`Mark's BMI ${Mark1.BMI()} is higher than John's ${John1.BMI()}!`)
    : console.log(`John's BMI ${John1.BMI()} is higher than John's ${Mark1.BMI()}!`)

markHigherBMI2
    ? console.log(`Mark's BMI ${Mark2.BMI()} is higher than John's ${John2.BMI()}!`)
    : console.log(`John's BMI ${John2.BMI()} is higher than John's ${Mark2.BMI()}!`)
