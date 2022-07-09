import api from "./core";

export const apis = {
  // user
  signUp: (payload) => api.put("/user/update/nickname", payload),
  dupCheck: (payload) => api.post("/user/signup/checkNickname", payload),
  getUser: () => api.get("/user/auth"),

  // mission CRUD
  getTodos: () => api.get("/api/category/missions"),
  addTodo: (payload) => api.post("api/category/missions", payload),
  updateTodo: (payload) => api.patch(`/todos/${payload.id}`, payload),
  completedTodo: (payload) =>
    api.put(`/api/missions/changeMissionState/${payload.missionId}`, {}),
  deleteTodo: (payload) => api.delete(`/todos/${payload.id}`),

  // post CRUD
  addPost: (payload) => api.post("/api/post", payload),
  getPost: () => api.get("/api/post"),
};

export default apis;

// 사용법
/*
    1. import 한다
    import apis from "../api/main";

    2. 아래처럼 쓴다
    const addTodo = async (payload) => {
    const addTodoDB = await apis.addTodo(payload);
    return addTodoDB;
    };
*/
