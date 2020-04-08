let artistProfile = {
    name: 'Tau Perkington',
    age: 27,
    available: true
};

let allProfiles = [artistProfile]; // new Array containing the above object

artistProfile.available = false; // changing the object

console.log(allProfiles) // will show { name: 'Tau Perkington', age: 27, available: false }

let guests = ['Will Alexander', 'Sarah Kate', 'Audrey Simon'];
let howManyGuests = guests.length; // 3

guests.push('Tau Perkington'); // adds 'Tau Perkington' to the end of our guests array
guests.unshift('Tau Perkington'); // 'Tau Perkington' is added at the beginning of the guests array
guests.pop(); // removes the last element from the array