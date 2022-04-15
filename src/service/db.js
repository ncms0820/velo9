import axios from "axios";

export const fakeDbNew = axios
  .get("http://localhost:8080")
  .then((resolve) => {
    return resolve.data;
  })
  .catch((error) => console.log(error.message));

export const fakeDbOld = axios
  .get("http://localhost:8080")
  .then((resolve) => {
    return resolve.data;
  })
  .catch((error) => console.log(error.message));
