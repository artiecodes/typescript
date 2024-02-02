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
function displayUser(user) {
    console.log("Name: ", user.name);
    console.log("Username: ", user.username);
    console.log("Email: ", user.email);
}
