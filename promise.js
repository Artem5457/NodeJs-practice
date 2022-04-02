// PROMISE
const urls = [
  'https://jsonplaceholde.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
})).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
}).catch(() => console.log('error'));


// ASYNC AWAIT
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  console.log(data);
}

console.log(fetchUsers());

const getData = async function () {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())  
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
}

console.log(getData());

// Object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest } = animals;

console.log(tiger);

objectSpread(tiger, lion, rest);
