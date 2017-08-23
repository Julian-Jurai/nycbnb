
export const LOGINSIGNUP = "LOGINSIGNUP";
export const LOGOUT = "LOGOUT";
// export const SIGNUP = "SIGNUP";

// export const receiveSessionAction = (buttonAction) => {
//   debugger
//   return {
//     type: LOGINSIGNUP,
//     buttonAction
//   };
//
// }

// export const receiveSignUpAction = (buttonAction) => (
//   type: LOGOUT,
//   buttonAction,


// export const receiveSignUpAction = (buttonAction) => (
//   type: SIGNUP,
//   buttonAction,
// );


export const setSessionUI = (buttonAction) => {

  return {
    type: LOGINSIGNUP,
    buttonAction
  };
}

export const resetSessionUI = (buttonAction) => {

  return {
    type: LOGOUT,
    buttonAction
  };
}

// export const setSessionUI = (buttonAction) => (dispatch) => (
//   (buttonAction) => dispatch(receiveSessionAction(buttonAction))
// }
