// import { greeting } from './helper';
// import { multiply } from './helper';
// import { greeting, multiply } from './helper';
//
// console.log(greeting);
// console.log(multiply(2, 5));

// import * as helper from './helper';
// console.log(helper.greeting);
// console.log(helper.multiply(2, 5));

import navigation, { greeting, multiply } from './navigation';
console.log(navigation());
console.log(greeting);
console.log(multiply(2, 5));