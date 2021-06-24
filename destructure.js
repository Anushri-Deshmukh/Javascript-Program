let student={ 
    name:'anu',
    age:24,
    course:'mmbs',
    address:{
        street:'js rord',
        city:'ngp',
        state:'mh'
    },
    hobibies:{
        regular:{
            id:1,
            regHob:['rb','pc','pf','tv']
        },
        occassionl:{
            id:1,
            occHob:['pc','travelling','party']
        }
    }
};
let {street,city,state}=student.address;
console.log(`street:${ street} city:${city},state:${state} `);