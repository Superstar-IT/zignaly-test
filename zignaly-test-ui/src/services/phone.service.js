import http from "../http-common";

class PhoneDataService {
  getAll() {
    return http.get("/phones")
      .then((res) => res.data);
  }
}

export default new PhoneDataService();