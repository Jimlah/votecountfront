import http from "../http-common";

class ElectionDataService {
  getAll() {
    return http.get("/elections");
  }

  get(id) {
    return http.get(`/elections/${id}`);
  }

  create(data) {
    return http.post("/elections", data);
  }

  update(id, data) {
    return http.put(`/elections/${id}`, data);
  }

  delete(id) {
    return http.delete(`/elections/${id}`);
  }
}

export default new ElectionDataService();
