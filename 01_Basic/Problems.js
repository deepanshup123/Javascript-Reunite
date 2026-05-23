/**
let n = 6;

for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j < n; j++) {
        pattern += "*"
    }
    console.log(pattern);
    
} 
 */

/**
let n = 4;

for (let i = 0; i < n; i++) {
    let pattern = ""
    for (let j = 0; j < n; j++) {
        if (i == 0 || i == n-1) {
            pattern += "* "
        }else{
            if (j == 0 || j == n-1) {
                pattern += "* "
            } else {
                pattern += "  "
            }
        }
    }
    console.log(pattern);
}

After this AI code below

let n = 7;

for (let i = 0; i < n; i++) {
    let pattern = ""
    for (let j = 0; j < n; j++) {
        if (i == 0 || i == n-1 || j == 0 || j == n-1) {
            pattern += "* "
        }else{
            pattern += "  "
        }
    }
    console.log(pattern);   
}

*/

/** 
let n = 4;

for (let i = 0; i < n; i++) {
    let pattern = ""
    for (let j = 0; j < i; j++) {
        pattern += " "
    }
    for (let k = 0; k < n; k++) {
        pattern += "*"
    }
    console.log(pattern);
    
}

Below code is after submitimg the code AI to reduce the efficiency.

let n = 4;

for (let i = 0; i < n; i++) {
    console.log(" ".repeat(i) + "*".repeat(n));
}

*/

