console.log('Hello')


const a = [{
    name: 'Viktor',
    age: 32
},
{
    name: 'Oleg',
    age: 34
}]


const newA = {
    name: "Ivan",
    age: 24
}


const copy = [...a, newA]


let copy2 = copy.map(c => c.name === "Viktor" ? {...c, name: "Julia"} : c)



// DElete

let delete1 = copy2.filter(c => c.name !== 'Julia')

console.log(delete1)