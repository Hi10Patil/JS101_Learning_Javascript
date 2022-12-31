
//Problem 4: Given stored username and password and input username and password, Print aif the user can login or not.

let username = "hiten";
let password = 123;
let iusername = "sachin";
let ipassword = 456;

if (username === iusername && password === ipassword) {
  console.log("login");
}
else {
  console.log("invalid username and password")
}

if (username !== iusername && password !== ipassword) {
  console.log("login");
}
else {
  console.log("invalid username and password")
}

if (username === iusername && password !== ipassword) {
  console.log("login");
}
else {
  console.log("invalid username and password")
}

if (username !== iusername && password === ipassword) {
  console.log("login");
}
else {
  console.log("invalid username and password")
}