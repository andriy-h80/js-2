export function getAllUsers() {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
}

export function getUserByName(firstName) {
  return fetch(
    `https://dummyjson.com/users/filter?key=firstName&value=${firstName}`
  ).then((res) => res.json());
}

export function getUserByID(id) {
  return fetch(`https://dummyjson.com/users/filter?key=id&value=${id}`).then(
    (res) => res.json()
  );
}

export function getPostsByUserId(userId) {
  return fetch(`https://dummyjson.com/posts/user/${userId}`).then((res) =>
    res.json()
  );
}

export function addNewUser(newUser) {
  return fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  }).then((res) => res.json());
}
