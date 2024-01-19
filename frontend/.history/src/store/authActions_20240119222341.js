export function login(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      const response = await fetch("http://localhost:8080/auth/login", {
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

export function signUp(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      const response = await fetch("http://localhost:8080/auth/signup", {
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
