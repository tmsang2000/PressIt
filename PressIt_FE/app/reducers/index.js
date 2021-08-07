import { combineReducers } from "redux";
import ApplicationReducer from "./application";
import LoadingReducer from "./loading";
import NotificationReducer from "./popUpNotification";

export default combineReducers({
    application: ApplicationReducer,
    loading: LoadingReducer,
    notification: NotificationReducer,
});