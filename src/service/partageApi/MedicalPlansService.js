import partageApi from "./baseHttpClient";

export const PLANS_PATH = "/planos";

export class PlansService {
  static async getAllPlans() {
    return partageApi.get(PLANS_PATH);
  }
  static async createPlan(payload) {
    return partageApi.post(PLANS_PATH, payload);
  }
}
