export default async function fetchQuery() {
  const endpoints = [
    "/posts",
    "/comments",
    "/albums",
    "/photos",
    "/todos",
    "/users",
  ];

  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

  return await fetch(
    `https://jsonplaceholder.typicode.com${endpoint}?_limit=10`
  ).then((response) => response.json());
}
