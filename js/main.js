const a = [1,2,3,4,5,6,7,8,9,10]

let b = a.map((item)=>{
    if(item % 2 == 0){
        return item
    }
})

console.log(b);



let f = 0
let c = a.map((item)=>{
    f = f + 1
    if(f % 2 == 1){
        return item
    }
})
console.log(c);