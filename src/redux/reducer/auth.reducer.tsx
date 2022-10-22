import { authConstant, LogoutConstant } from "../constant/auth.constant";
const initState = {
  token: null,
  authenticate: false,
  authenticating: false,
  error: "",
  userData: null,
  userProfile: false,
};

export const authReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case authConstant.LOGIN_SUCCESS:
      state = {
        ...state,

        token: payload,
        authenticate: true,
        userData: payload.userData,
      };
      break;
    case authConstant.LOGIN_FAILED:
      state = {
        ...state,
        authenticate: false,
        error: payload,
      };
      break;
    case LogoutConstant:
      state = {
        ...initState,
        userProfile: false,
      };
  }
  return state;
};
