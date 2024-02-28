import {userName} from './module';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

console.log(`Hello, ${userName}!`);

let newUuid = uuidv4();
console.log(`Згенерований UUID:\n${newUuid}`);

let testEmail = 'test@gmail.com'; 
console.log(`test@gmail.com це пошта?: ${validator.isEmail(testEmail)}`)