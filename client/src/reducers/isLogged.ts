import { Action } from 'redux';

const loggedReducer = (state:boolean = false, action: Action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return false;
  }
};

export default loggedReducer;
