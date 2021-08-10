var person = {
  firstName: 'Kenneth',
  lastName: 'Wang',
  hobby: 'coding'
};

console.log(person);

var FullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", FullName);

person.job = 'developer';
console.log("The person's current job is: ", person.job);

person.previousJob = 'CBO';
console.log("The person's previous job is: ", person.previousJob);

console.log('The complete person object: ', person);
