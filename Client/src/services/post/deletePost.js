import axios from "axios";

export const deletePost = async (id) => {
  console.log(id);
  return await axios
    .delete(`http://localhost:8080/posts/post/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
