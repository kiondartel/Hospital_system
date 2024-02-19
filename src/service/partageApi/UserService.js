import partageApi from "./baseHttpClient";

export const USERS_PATH = "/pacientes";

export class UserService {
  static async createUser(user) {
    return partageApi.post(USERS_PATH, user);
  }
}
