import { combineReducers } from "redux";

// Reducers
import SiteReducer from "./SiteReducer";
import FinanceReducer from "./FinanceReducer";

const rootReducer = combineReducers({
    site: SiteReducer,
    finance: FinanceReducer
});

export default rootReducer;