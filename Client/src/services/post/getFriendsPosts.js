import axios from "axios";

export const getPosts = async (user) => {
    try {

        const res = await axios.get(`http://localhost:8080/posts/friends/${user}`);
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}