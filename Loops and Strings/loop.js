//for Loop
for(let count = 1; count <= 5; count++) {
    console.log("Hello World!");
}

//while Loop
let i = 1;
while(i<=5) {
    console.log("i =", i);
    i++;
}
let j = 1;
while (j <= 3) {
    console.log("Raju")
    j++;
}

//do-while Loop
let k = 17;
do {
    console.log("Mr. Raju");
    k++;
} while (k <= 11);

let x = 1;
do {
    console.log("x =", x);
    x++;
} while (x <= 5);

//for-of Loop
let str = "IITM"
for(let i of str) {
    console.log("i =", i);
}

let str1 = "JavaScript";
let size = 0;
for (let val of str1) {
    console.log("i =", val);
    size++;
}
console.log("Starting size =", size);

//for-in Loop
let student = {
    name: "Kashaf Ali",
    age: 20,
    cgpa: 8.5,
    isPass: true
};
for(let key in student) {
    console.log("key =", key, "value =", student[key]);
}