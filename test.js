const students = [
    {
        id: 1,
        firstName: 'jane',
        lastName: 'laduca',
        DOB: 2008,
        crippled: false,
        siblings: ['cait laduca'],
    },
    {
        id: 2,
        firstName: 'jake',
        lastName: 'stroming',
        DOB: 2008,
        crippled: false,
        siblings: ['daniel livak'],
    },
    {
        id: 3,
        firstName: 'gabe',
        lastName: 'liberov',
        DOB: 2008,
        crippled: true,
        siblings: ['sister liberov, rylan geykhman'],
    },
    {
        id: 4,
        firstName: 'rylan',
        lastName: 'geykhman',
        DOB: 2008,
        crippled: false,
        siblings: ['ginger freshman, nicole solstov'],
    },
    {
        id: 5,
        firstName: 'yan',
        lastName: 'sharma',
        DOB: 2008,
        crippled: false,
        siblings: ['yas sharma, manish sharma, manoosh sharma'],
    },
    {
        id: 6,
        firstName: 'michael',
        lastName: 'fried',
        DOB: 2008,
        crippled: false,
        siblings: ['veronica fried,'],
    },
    {
        id: 7,
        firstName: 'veronica',
        lastName: 'fried',
        DOB: 2008,
        crippled: true,
        siblings: ['michael fried'],
    },
    {
        id: 8,
        firstName: 'sam',
        lastName: 'francos',
        DOB: 2008,
        crippled: true,
        siblings: ['Maria Teresa García Ramírez de Arroyo, alina francos'],
    },
    {
        id: 9,
        firstName: 'erik',
        lastName: 'schou',
        DOB: 2008,
        crippled: true,
        siblings: ['crutches'],
    },
    {
        id: 10,
        firstName: 'mistor',
        lastName: 'whalen',
        DOB: 2008,
        crippled: false,
        siblings: ['doctor fruski'],
    }
    
]

students.forEach((students)=> {
    console.log('STUDENT NUMBER', students.id)  
    console.log(students.firstName, students.lastName);
    console.log('---------------');
    console.log('SIBBYS')
    students.siblings.forEach((sibbys)=> {
        console.log(sibbys)
    })
    console.log('---------------');
});
console.log('HERE ARE MY FAVORITE NON-CRIPPLES')
const cripples = students.filter((fart)=> {return fart.crippled === false})
console.log(cripples)

