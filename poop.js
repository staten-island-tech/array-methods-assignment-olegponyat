const date = new Date();
let year = date.getFullYear();
const Fart = [
{
    firstName: 'gabe',
    lastName: 'liberov',
    DOB: 1999,
    graduated: false,
    age: function poopy() {
        return year - this.DOB;
    },
    siblings: []
},{
    firstName: 'jake',
    lastName: 'stroming',
    DOB: 1999,
    graduated: false,
    age: function poopy() {
        return year - this.DOB;
    },
    siblings: []
}
];
Fart.forEach(name) => {
    console.log(Fart.firstName)
}
