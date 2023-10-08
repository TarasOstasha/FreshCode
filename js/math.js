//const sum = (a,b) => a + b;
// export default sum;

// named export **************************
//export const mySum = (a,b) => a + b;
//export const PI = 3.14;


//export const dob = (a, b) => a * b;

// const sum = (a,b) => a + b;
// const dob = (a, b) => a * b;
// const PI = 3.14;

// export { sum, dob, PI };


// default + named exports --------------------------
export const sum = (a,b) => a + b;
export const PI = 3.14;

class Test {
    constructor(name) {
        this.name = name;
    }
}

export default Test;