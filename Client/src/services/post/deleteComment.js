import axios from "axios";

export const deleteComment = async (id) => {
  console.log(id);
  return await axios
    .delete(`http://localhost:8080/posts/comments/${id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
