import axios from "axios";

export const getFriends = async (user) => {
    try {
        const res = await axios.get(`http://localhost:8080/users/friends/${user}`);
        return res;
    }
    catch (error) {
        console.log(error);
    }
};

