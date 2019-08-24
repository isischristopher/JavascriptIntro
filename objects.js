
const bouncer = (age) => {
    if (age>= 21) {
        console.log('DRINK (at the bar)')
    } else {
        console.log('SHAME')
    }
    }
    bouncer(12);
    bouncer(93);

    const me = 'Isis';
    console.log(me.length);

    const myObject = {
        name: 'isis',
        age: '24'
    }
    console.log(myObject['name']);
    console.log(myObject.name);


    // Challenge
    const findEmployeeStatus = (employee) => {
        if (employee.name.charAt(0).toLowerCase() === 'm'){
            employee.status = 'vip'
        } else {
            employee.status = 'peasant'
        }
        console.log(`${employee.name} is a total ${employee.status}`)
       // return employee;

    }
 

    const person = {
        name: prompt(),
        status: ''
    }
    //const findEmployeeStatus: (employee: any) => any


    findEmployeeStatus(person)
    findEmployeeStatus({
        name: 'martin',
        status: ''
    })
   // findEmployeeStatus({
     //   name: prompt('Enter employee name'),
       // status: ''
   // })