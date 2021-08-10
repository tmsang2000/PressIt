import { combineReducers } from "redux";
import ApplicationReducer from "./application";
import LoadingReducer from "./loading";
import NotificationReducer from "./popUpNotification";
import AuthReducer from "./auth";

export default combineReducers({
    auth: AuthReducer,
    application: ApplicationReducer,
    loading: LoadingReducer,
    notification: NotificationReducer,
});