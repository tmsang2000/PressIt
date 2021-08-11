import { combineReducers } from "redux";
import ApplicationReducer from "./application";
import NotificationReducer from "./popUpNotification";
import AuthReducer from "./auth";

export default combineReducers({
    auth: AuthReducer,
    application: ApplicationReducer,
    notification: NotificationReducer,
});