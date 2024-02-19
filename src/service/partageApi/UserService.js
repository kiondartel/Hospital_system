import BaseHttpClient from "./baseHttpClient";

export const USERS_PATH = "/pacientes";

export class UserService {
  static async create(user) {
    return BaseHttpClient.post(USERS_PATH, user);
  }
}
