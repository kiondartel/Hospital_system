import { UserService } from "../../service/partageApi/UserService";
import { setListUsers } from "../Reducers/useListRuducer";

export const getAllUsers = () => async (dispatch) => {
  try {
    const users = await UserService.listUsers();
    dispatch(setListUsers(users));
  } catch (err) {
    console.log(err);
  }
};
