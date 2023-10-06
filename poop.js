const Fart = [
    {
        firstName: 'gabe',
        lastName: 'liberov',
        fartCount: 15,
        numbers: [1,2,3,4,5]
    },
    {
        firstName: 'jake',
        lastName: 'stroming',
        fartCount: 27,
        addFart: function (){

            this.fartCount++
        },
        numbers: [6,7,8,9,10],
    }
]
Fart.forEach((names) => {
    console.log(names.firstName, names.lastName, names.fartCount)
});
Fart.numbers.forEach((number) => {
    console.log(`this is number ${number}`)
})
/* const banana = {
    count: 25,
    addBanana: function(){
        return this.count++;
    }
}
banana.addBanana();
console.log(banana.count) */