import axios from "axios";

export const logInUser = async (values) => {
    return await axios
        .post(
            `http://localhost:8080/users/login`,
            {
                password: values.password,
                username: values.username,
            },
            { withCredentials: true }
        )
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
};