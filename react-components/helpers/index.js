import { userData } from "../consts/user-data.js";

export const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userData);
    }, 3000);
  });
};
