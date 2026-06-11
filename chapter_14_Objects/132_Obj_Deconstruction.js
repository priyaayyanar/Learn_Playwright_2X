const user = { name: "Pranu", age: 10, city: "BLR" };

//Basic Deconstruction
const { name, age } = user;
console.log(user);
console.log(name); // without object name -> user.name
console.log(age);

// Rename variables
const { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// Deconstruction
const { height } = user;
console.log(height);

// Assigning Default values
const { country = "India" } = user;
console.log(country);
console.log(user);

// Nested objects
const data = {
    user:
    {
        name: "Pranu",
        address:
        {
            FlatNo: "#C1-Maruti Residency, BLR, India"
        }
    }
}

//const { user: { address: { FlatNo } } } = data;
//console.log(data);
console.log(data.user.address.FlatNo);