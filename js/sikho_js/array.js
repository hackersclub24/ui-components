let data = [
  {
    email: "abhi@",
    password: "1234",
  },
  {
    email: "vijay@",
    password: "1234",
  },
  {
    email: "tahir@",
    password: "hello",
  },
  {
    email: "rohit@",
    password: "asha",
  },
  {
    email: "ankit@",
    password: 56,
  },
];
let email = prompt("enter your email", "ankit@");
let password = prompt("enter your password", 56);

let data2 = data.filter(function (e, i) {
  return e.email == email && e.password === password ? true : false;
});
console.log(data2);
