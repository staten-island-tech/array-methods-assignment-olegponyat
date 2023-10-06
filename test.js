const students = [
    {
        firstName: 'jane',
        lastName: 'laduca',
        graduated: false,
        siblings: ['cait'],
        age: function () {
            return year - this.DOB;
        }
    },
    {
        firstName: 'jake',
        lastName: 'stroming',
        graduated: false,
        siblings: [null],
        age: function () {
            return year - this.DOB;
        }
    },
    {
        firstName: 'gabe',
        lastName: 'liberov',
        graduated: false,
        siblings: [],
        age: function () {
            return year - this.DOB;
        }
    },
    {
        firstName: 'rylan',
        lastName: 'geykhman',
        graduated: false,
        siblings: ['one', 'two', 'three'],
        age: function () {
            return year - this.DOB;
        }
    },
    {
        firstName: 'sam',
        lastName: 'francos',
        graduated: false,
        siblings: ['alina'],
        age: function () {
            return year - this.DOB;
        }
    }   
]

const graduates = students.filter((student) => student.graduated === false)
/* students.forEach((name) => {
    console.log(name.firstName, name.lastName)
}); */