//import mySum from './math.js';

// named import -------------------------
//import { mySum, PI } from './math.js';


//import { dob } from './math.js';

//import { sum, dob, PI } from './math.js';
// console.log(dob(10,5));
// console.log(sum(10,5))
// console.log(PI)

// import * as MyMath from './math.js';
// console.log(MyMath)

// console.log(MyMath.dob(10,5));
// console.log(MyMath.sum(10,5))
// console.log(MyMath.PI)

import Test1, {sum, PI} from './math.js';
const test = new Test1('test');
console.log(test, PI)