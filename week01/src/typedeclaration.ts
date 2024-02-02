import axios from "axios";

// 5. use axios library to make a get request to a URL
// 6. use the catch syntax to handle errors
axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    const user = response.data;
    console.log(user);
    displayUser(user);
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    const people = response.data;
    console.log(people);
  })
  .catch((error) => {
    console.log(error);
  });

// 7. create a function that takes a user object as parameter and console.log's the user's info like this: "Name:", "Username:" "Email:" "
function displayUser(user: User) {
  console.log("Name: ", user.name);
  console.log("Username: ", user.username);
  console.log("Email: ", user.email);
}

// 8 typescript is not able to infer the type of the user object, so we need to define the type of the user object
type User = {
  name: string;
  username: string;
  email: string;
};

// 9. how can you make typescript infer the type of the user object in the response?
// By using the generic type parameter <T> in the axios.get method, eg axios.get<User>(URL)