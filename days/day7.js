const fetchUserData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    const users = data.users;

    const processedUsers = processUserData(users);
    const totalAge = summarizeAge(users);

    console.log("Processed Users:");
    processedUsers.forEach(user => console.log(`- ${user}`));

    console.log(`\nTotal Age of Male Users: ${totalAge}`);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const processUserData = users =>
  users
    .filter(({ gender }) => gender === 'male')
    .map(({ firstName, lastName, age }) => `Name: ${firstName} ${lastName}, Age: ${age}`);

const summarizeAge = users =>
  users
    .filter(({ gender }) => gender === 'male')
    .reduce((sum, { age }) => sum + age, 0);

fetchUserData();
