
export const LOGINSIGNUP = "LOGINSIGNUP";
export const LOGOUT = "LOGOUT";


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
