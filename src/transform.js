function groupAdultsByAgeRange (group) {
    
    const youngGroup = group.filter(person => person.age >= 18 && person.age <= 20);
    const adult1Group = group.filter(person => person.age > 20 && person.age <= 30);
    const adult2Group = group.filter(person => person.age > 30 && person.age <= 40);
    const adult3Group = group.filter(person => person.age > 40 && person.age <= 50);
    const oldGroup = group.filter(person => person.age > 50);

    const result = {};

    if (youngGroup.length > 0) {
        result['20 and younger'] = youngGroup
    }
    if (adult1Group.length > 0) {
        result['21-30'] = adult1Group
    }
    if (adult2Group.length > 0) {
        result['31-40'] = adult2Group
    }
    if (adult3Group.length > 0) {
        result['41-50'] = adult3Group
    }
    if (oldGroup.length > 0) {
        result['51 and older'] = oldGroup
    }

    return result;
}

console.log(groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 20}]))
console.log(groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}]))


module.exports = {groupAdultsByAgeRange};
