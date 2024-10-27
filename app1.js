let longUserObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: {
        name: "New York",
        population: 8_550_000,
      },
      state: "NY",
    },
    hobbies: {
      sports: "basketball",
      music: "classical",
    },
    friends: {
      friend1: { name: "Alice", age: 25 },
      friend2: { name: "Bob", age: 35 },
    },
  };
  
  let{
  
    firstName,
    lastName,
    age,
    address:{
      street,
      city:{
        name:name6,
        population,
  
      },
      state,
  
    },
    hobbies:{
      sports,
      music,
    },
    friends:{
      friend1,
      friend2
    }
  
  
  }=longUserObject;
  
  console.log(
  
    firstName,
    lastName,
    age,
    street,
    name6,
    population,
    state,
    sports,
    music,
    friend1,
    friend2,
  
  
  );