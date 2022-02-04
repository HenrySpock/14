// AJAX: Asynchronous JavaScript and XML - misnomer because we generally use JSON now 
// Traditional requests refreshed the whole browser:
// Entering a URL in the browser bar 
// clicking on a link
// Submitting a form 

// Browser makes request, Receives response, Replaces entire resource with result

// AJAX: 
// Originally, requests could not be made with JavaScript
// web request: 
// Made from JavaScript asynchronously 
// GET, POST or other 
// Receive response 
// Do whatever you want with result!

// PROS: 
// nice to not reload page for small amount of info 
// interactive websites 
// fewer full page loads from server 

// CONS: 
// depending on connection, sometimes experience isn't great
// Used to be Harder for SEO to index but it's getting better

// XMLHttpRequest gets very clunky on the 2nd request, using nested callbacks 
// Could also use fetch, but it's still quirky. 

// AJAX with Axios: 
// To prevent issues with files we need to start a server

// Axios is a third party library:
// Include it with CDN: 

// script <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// let data = axios.get('https://dog.ceo/api/breeds/list/all')

// This doesn't "work" the way we might expect, the variable stored is a promise

// Async/Await 
// First we set an asynchronous function:

// async function getData() {
//     const response = await axios.get('https://dog.ceo/api/breeds/list/all');
//     console.log(response.data.message)
//     for (let dog of Object.keys(response.data.message)) {
//         console.log(dog)
//     } 
// }

//   async function getLaunches(){
//       const res = axios.get('https://api.spacexdata.com/v4/launches/latest')
//       console.log(res.data);
//     //   for(launch of res.data){
//     //       console.log(launch.mission_name)
//     //   }
//     //   for(let launch of res.data){
//     //       console.log(launch.mission_name)
//     //   }
//   }

//   a way to handle bad requests (errors): 

// async function fetch(){
//     const res = await axios.get("https://dog.ceo/api/breeds/image/random")
//     console.log(res.data);
//     const img = document.querySelector("#dog")
//     img.src = res.data.message;
// }

// async function fetchByBreed(breed){
//     try{const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     const res = await axios.get(url);
//     const img = document.querySelector("#dog")
//     img.src = res.data.message;
//     } catch(e){
//         alert(`${breed} not found. Either you spelled it wrong, abbreviated it, or made it up.`)
//         fetch();
//         alert("Enjoy this other fine breed.")
//         }
//     }

// const form = document.querySelector('#searchform');
// const input = document.querySelector('#search');
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("SUBMIT!");
//     fetchByBreed(input.value);
//     input.value = '';
// });

// -

// axios.get(url) is the basic command already used, but there's a second parameter: 
// axios.get(url, [config])
// An object can be passed into the config

// axios.get("/resource", {params: {a: 1, b: 2}}); 

// async function getJoke(first, last) {
// let res = await axios.get (`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`);
// console.log(res);
// }

// async function getJoke(first, last) {
// let res = await axios.get (`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`);
// console.log(res.data.value.joke);
// }

async function getJoke(firstName, lastName) {
let res = await axios.get (`http://api.icndb.com/jokes/random`, {params: { firstName, lastName }});
console.log(res.data.value.joke);
}

getJoke("Butters", "Steele");

// The "params" object is replacing the query string. 

// POST:  the difficulty with teaching post is that most APIs require authentication to alter anything.

// axios.post(url, [data,] [config])
// url: location 
// data: to be posted, 1 or more items 
// config: 

// using reqres.in for learning post (or other api verbs)

async function getUsers(){
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res);
}

// async function createUser(){
//     const res = await axios.post('https://reqres.in/api/users');
//     console.log(res);
// } //this gives us a 201 status code, remember, 200 is "ok", 201 means "created", as in, successful post

async function createUser(){
    const res = await axios.post("https://reqres.in/api/users", {username: "ButtersTheChicken", email: "butters@gmail.com", age: 1 });
    console.log(res);
}  

// Hacker News: 

// async function getUsers(){
//     const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users')
//     console.log(res);
// }

async function getUsers(token){
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', { params: {
        token }});
    console.log(res);
}

async function signUp(name, username, password) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: {
    name, username, password }});
    console.log(res);
}

// signUp('SRonan', 'HSpock', 'SpoRo')

async function login(username, password) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: {
    username, password }});
    console.log(res);
    console.log(res.data.token);
    return res.data.token;
}

// login('HSpock', 'SpoRo');

async function getUsersWithAuth(){
    const token = await login('HSpock', 'SpoRo');
    getUsers(token)
}

async function createStory(){
    const token = await login('HSpock', 'SpoRo');
    const newStory = {
        token, 
        story: {
            author: 'Me',
            title: 'Me',
            url: 'http://me.com'
        }
    }
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
    console.log(res);
}