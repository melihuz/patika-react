import axios from "axios";

// export default async (number) => {
//   const { data: user } = await axios(
//     "https://jsonplaceholder.typicode.com/users/" + number
//   );
//   const { data: posts } = await axios(
//     "https://jsonplaceholder.typicode.com/posts?userId=" + number
//   );
//   user.posts = posts;
//   return user;
// };

const getData = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + number
    );
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + number
    );

    resolve({ user, posts: posts });
  });
};
export default getData;
