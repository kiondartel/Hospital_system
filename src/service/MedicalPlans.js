import axios from "axios";

export async function getAllPlans() {
  try {
    const response = await axios.get("http://localhost:3000/v1/planos");
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
