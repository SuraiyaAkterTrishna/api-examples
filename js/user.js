// load user by fetch
const loadUserFetch = () => {
  const url = `https://randomuser.me/api/?gender=female`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUser(data.results[0]))
    .catch((error) => console.log(error));
};
// load user by async await
const loadUserAsync = async () => {
  const url = `https://randomuser.me/api/?gender=female`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);
  } catch (err) {
    console.log(err);
  }
};
const displayUser = (user) => {
  console.log(user);
};
