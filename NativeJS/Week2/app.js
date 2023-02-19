// console.log('Hello')


// const a = [{
//     name: 'Viktor',
//     age: 32
// },
// {
//     name: 'Oleg',
//     age: 34
// }]


// const newA = {
//     name: "Ivan",
//     age: 24
// }


// const copy = [...a, newA]


// let copy2 = copy.map(c => c.name === "Viktor" ? {...c, name: "Julia"} : c)



// // DElete

// let delete1 = copy2.filter(c => c.name !== 'Julia')

// console.log(delete1)


let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


const getNames = (array) => {
    const result = []
    const getName = obj => obj.name
    for(let i = 0; i<array.length; i++){
    const res = getName(array[i])
    result[i] = res
    }
    return result
}
// console.log(getNames(students))




const addScores = (array) => {
    const result = []
    const scores = obj => {
        copy = {...obj}
        copy.scores = obj.scores + 10   
        return copy 
    }
        for(let i = 0; i<array.length; i++){
            const temp = scores(array[i])
            result[i] = temp
        }
        
        return result
    }

    // console.log(addScores(students))


    const selfMadeMap = (array, func) => {
        const result = []
        
            for(let i = 0; i<array.length; i++){
                const temp = func(array[i])
                result[i] = temp
            }
            return result
    }

    console.log(selfMadeMap(students, getNames))
    // console.log(selfMadeMap(students, addScores))


    const selfMadeFilter = (array, func ) => {
        const result = []
        for(let i = 0; i<array.length; i++){
            if(func(array[i]===true)){
                result.push(array[i])
            }
        }
        return result
    }


    console.log(selfMadeFilter(students, st => st.scores >= 100))



    const selfMadeFind = (array, func) => {
        for(let i = 0; i<array.length; i++){
            if(func(array[i]===true)){
                return array[i]
            }
    }
}

    console.log(selfMadeFind(students, st => st.name === 'Alex'))
    console.log(students.find( st => st.name === 'Alex'))




    const sefMadeSlice = (array, start, end) => {
        const result = []
        for(let i = start; i < end; i++){
            result.push(array[i])
        }
        return result
    }
    console.log(students.slice(0, 3))
    console.log(sefMadeSlice(students, 0, 3))
