const students = [
    {
        firstName: 'jane',
        lastName: 'laduca',
        DOB: 2008,
        crippled: false,
        siblings: [1,2,3,4],
    },
    {
        firstName: 'jake',
        lastName: 'stroming',
        DOB: 2008,
        crippled: false,
        siblings: [5,6,7,8],
    },
    {
        firstName: 'gabe',
        lastName: 'liberov',
        DOB: 2008,
        crippled: true,
        siblings: [9,10,11,12],
    },
    {
        firstName: 'rylan',
        lastName: 'geykhman',
        DOB: 2008,
        crippled: false,
        siblings: [13,14,15,16],
    },
    {
        firstName: 'yan',
        lastName: 'sharma',
        DOB: 2008,
        crippled: false,
        siblings: [17,18,19,20],
    },
    {
        firstName: 'michael',
        lastName: 'fried',
        DOB: 2008,
        crippled: false,
        siblings: [21,22,23,24],
    },
    {
        firstName: 'veronica',
        lastName: 'fried',
        DOB: 2008,
        crippled: true,
        siblings: [25,26,27,28],
    },
    {
        firstName: 'sam',
        lastName: 'francos',
        DOB: 2008,
        crippled: true,
        siblings: [29,30,31,32],
    },
    {
        firstName: 'erik',
        lastName: 'schou',
        DOB: 2008,
        crippled: true,
        siblings: [33,34,35,36],
    },
    {
        firstName: 'mistor',
        lastName: 'whalen',
        DOB: 2008,
        crippled: false,
        siblings: [37,38,39,40],
    }
    
]

students.forEach((fullNames)=> {
    console.log(fullNames.firstName, fullNames.lastName);
});
students.forEach((numArr) => {
    numArr.siblings.forEach((numeros)=> {
        console.log(numeros)
    })
});
console.log('this array is for CRIPPLES')
const cripples = students.filter((fart)=> {return fart.crippled === true})
console.log(cripples)

