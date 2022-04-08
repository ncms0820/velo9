import { fakeDbNew, fakeDbOld } from "./db";

class DbService {
  // http GET 'http://localhost:8080/?tagSelect=false&content=&page=0&sortValue=old'
  getDb(sort) {
    let db = "";
    if (sort === "new") {
      db = fakeDbNew;
    } else if (sort === "old") {
      db = fakeDbOld;
    } else {
      db = fakeDbNew;
    }
    return db;
  }
}

export default DbService;
