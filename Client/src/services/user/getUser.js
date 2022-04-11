import axios from "axios";

export const getUser = async (username) => {
    try {
        const res = await axios.get(`http://localhost:8080/users/${username}`);
        return res;


    } catch (error) {
        console.log(error);
    }
};