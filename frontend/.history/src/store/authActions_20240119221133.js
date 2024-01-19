import * as AuthApi from "../api/authRequest";

export default function login(formData) {
  return async (dipatch) => {
    disp;
    try {
      const { data } = await AuthApi.login(formData);
    } catch (err) {
      console.log(err);
    }
  };
}
