import axios from "axios";

export const getPostById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/posts/post/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
};