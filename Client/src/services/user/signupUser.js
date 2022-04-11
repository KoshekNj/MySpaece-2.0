import axios from "axios";

export const signUpUser = async (values) => {
    return await axios
        .post(
            `http://localhost:8080/users/register`,
            {
                username: values.username,
                password: values.password,
                email: values.email,
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