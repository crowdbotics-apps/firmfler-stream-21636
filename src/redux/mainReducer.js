import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth26147131Reducer from '../features/EmailAuth26147131/redux/reducers';
import SignUp128147129Reducer from '../features/SignUp128147129/redux/reducers'
import SignIn21146729Reducer from '../features/SignIn21146729/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth26147131: EmailAuth26147131Reducer,
SignUp128147129: SignUp128147129Reducer,
SignIn21146729: SignIn21146729Reducer,

});