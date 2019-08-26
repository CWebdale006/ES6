"use strict"; 

var a = 'Test1'; 
let b = 'Test2'; 

() => console.log(Hi gab pay attention gab); 

const testVar = () => {
    const a = 30; 
    if (true) {
        let a = 50; 
        console.log(a); 
        a = 30; 
    }
    console.log(`other A: ${a}`); 
}

console.log(`Logged: ${a}`); 

testVar(); 