// for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)    
// }

// const greet = "greet"
// for (const element of greet) {
//     console.log(element)
// }


// Maps

const map = new Map() // always store unique value
map.set('In','India')
map.set('usa','united states of america')
map.set('Fr','france')
console.log(map)

for (const [key,value] of map) {
    console.log(key +"=>"+value)
    
}
const myobj = {
    "game1":"NFS",
    "game2":"spidermon"
}
// it will not work
// for (const [key,value] of myobj) {
//     console.log(key +"=>"+value) 
    
// }
//use forin for objs
for (const key in myobj) {
     console.log(key+"=>"+myobj[key])   

}