import axios from "axios";

export const createComment = async (values) => {
    return await axios
        .post(
            `http://localhost:8080/posts/comment`,
            values
        )
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
};