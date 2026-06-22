// let PromiseONE = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hi abhishek");
//         resolve("Abhishek");
        
//     },1000)
// })
// PromiseONE.then((name)=>{
//     console.log(name)
//     return name
// }).then((name)=>{
//     console.log(name)
// })
new fetch('https://jsonplaceholder.typicode.com/posts').then(function(data){
    return data.json();
}).then(function(data){
    console.log(typeof data);
})