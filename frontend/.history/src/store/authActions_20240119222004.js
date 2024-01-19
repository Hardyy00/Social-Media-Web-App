import * as AuthApi from "../api/authRequest";

export default function login(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      const response = await fetch("http://localhost:8080/authlogin", {
        method: "POST",
        headers: "application/json",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Error");
      }

      const resData = await response.json();

      return resData;
    };

    const data = fetchData(formData);

    dispatch();
  };
}
