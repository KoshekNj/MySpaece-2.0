import axios from "axios";

export const getComments = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/posts/comments/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
};