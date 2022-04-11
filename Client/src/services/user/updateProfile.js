import axios from "axios";

export const updateProfile = async (username, values, gif, pic) => {

    await axios
        .put(
            `http://localhost:8080/users/${username}`,
            {
                username: username,
                profilePic: pic,
                age: values.age,
                country: values.country,
                gender: values.gender,
                description: values.description,
                band: values.band,
                singer: values.singer,
                song: values.song,
                gif: gif,

            }
        )
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err);
            alert("Error when posting");
        });
};