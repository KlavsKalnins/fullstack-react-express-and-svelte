import { User } from "./types/user";
import Axios from "axios";

export const fetchUsers = async (): Promise<User[]> => {
  return await fetch("http://localhost:3001/users")
    .then((response) => response.json())
    .then((data) => data);
};

export const createUser = async (data: User): Promise<String> => {
  return Axios.post("http://localhost:3001/users", data)
    .then((res) => {
      return "200";
    })
    .catch((err) => {
      console.log(`Post error: ${err}`);
      return "error on create";
    });
};

export const updateUser = async (user: User): Promise<String> => {
  return Axios.put("http://localhost:3001/users/" + user._id + "/edit", user)
    .then((res) => {
      return "200";
    })
    .catch((err) => {
      console.log(`Post error: ${err}`);
      return "error on create";
    });
};

export const delUser = async (user: User): Promise<String> => {
  return Axios.delete("http://localhost:3001/users/" + user._id)
    .then((res) => {
      return "200";
    })
    .catch((err) => {
      console.log(`Post error: ${err}`);
      return "error on create";
    });
};
