import axios from "axios";

export const getPosts = async (username) => {
    try {
        const res = await axios.get(`http://localhost:8080/posts/${username}`);
        return res.data;
    } catch (error) {
        return error;
    }
};