const Fart = [
    {
        firstName: 'gabe',
        lastName: 'liberov',
        numbers: [1,2,3,4,5]
    },
    {
        firstName: 'jake',
        lastName: 'stroming',
        numbers: [6,7,8,9,10]
    }
]
Fart.forEach((names) => {
    console.log(names.firstName, names.lastName)
});
Fart.forEach((number) => {
    console.log(number.numbers )
});


