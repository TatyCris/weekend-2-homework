function groupAdultsByAgeRange (group) {    
    const youngGroup = group.filter(person => person.age >= 18 && person.age <= 20);
    const adult1Group = group.filter(person => person.age > 20 && person.age <= 30);
    const adult2Group = group.filter(person => person.age > 30 && person.age <= 40);
    const adult3Group = group.filter(person => person.age > 40 && person.age <= 50);
    const oldGroup = group.filter(person => person.age > 50);

    const groups = [youngGroup, adult1Group, adult2Group, adult3Group, oldGroup];
    
    return groups.reduce((acc, group, index) => {
        if (group.length > 0 && index === 0) {
            return {
                ...acc,
                '20 and younger': group,
            };
        } else if (group.length > 0 && index == 1) {
            return {
                ...acc,
                '21-30': group
            };
        } else if (group.length > 0 && index == 2) {
            return {
                ...acc,
                '31-40': group
            };
        } else if (group.length > 0 && index == 3) {
            return {
                ...acc,
                '41-50': group
            };
        } else if (group.length > 0 && index == 4) {
            return {
                ...acc,
                '51 and older': group
            };
        }
        return acc;
    }, {});
}

module.exports = {groupAdultsByAgeRange};
