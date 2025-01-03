//Create String
let str = "Hello World!";
console.log(str)

//String Length
let str1 = "Adiba Maher";
console.log(str1, str1.length)

//String indices
let str2 = "Soas University of London"
console.log(str2, str2[0], str[1], str[2])

//Methods
let str3 = "Soas Universtity of London";
let newStr = str3.toUpperCase();
let newStr1 = str3.toLowerCase();
console.log(newStr);
console.log(newStr1);
console.log(str3.trim());
console.log(str3.slice(1, 7));
let str4 = "Data Science & Application";
let str5 = " from IITM";
console.log(str4.concat(str5));
let str6 = "Abiba";
console.log(str6.replace("b", "d")); ///replaceAll
console.log(str4.charAt(7))