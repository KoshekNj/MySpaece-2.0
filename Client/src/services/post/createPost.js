import axios from "axios";

export const createPost = async (values) => {
    return await axios
        .post(
            `http://localhost:8080/posts/create`,
            values
        )
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
};