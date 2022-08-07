import { combineReducers } from "redux";
import users from "./users";
import drons from "./drons";
import drons_on_tasks from "./drons_on_tasks";

export default combineReducers({
    users,
    drons,
    drons_on_tasks
});