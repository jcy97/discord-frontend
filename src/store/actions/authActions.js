import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => {
      dispatch(setUserDetails(userDetails));
    },
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);

    if (response.error) {
      //에러 메세지 출력
      console.log(response?.exception?.response?.data);
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      //에러 메세지 출력
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};
