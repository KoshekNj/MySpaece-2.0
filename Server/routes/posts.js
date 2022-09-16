const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");
//Getting all posts from user
router.get("/:author", async (req, res) => {
  try {
    const posts = await (
      await Post.find({ author: req.params.author })
    ).reverse();
    const allPosts = await Promise.all(
      posts.map(async (posts) => {
        const comments = (await Comment.find({ postId: posts._id })).length;
        return {
          _id: posts._id,
          author: posts.author,
          title: posts.title,
          text: posts.text,
          date: posts.date,
          comment: comments,
        };
      })
    );

    return res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

//Getting a signle post

router.get("/post/:id", async (req, res) => {
  try {
    const post = await await Post.findOne({ _id: req.params.id });
    const comments = (await Comment.find({ postId: req.params.id })).length;
    const assambledPost = {
      author: post.author,
      title: post.title,
      text: post.text,
      date: post.date,
      comment: comments,
    };

    return res.status(200).json(assambledPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

//Delete a single post

router.delete("/post/:id", async (req, res) => {
  try {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

//Post a comment

router.post("/comment", async (req, res) => {
  try {
    const newComment = new Comment({
      postId: req.body.postId,
      userId: req.body.userId,
      text: req.body.text,
      date: req.body.date,
    });

    const comment = await newComment.save();

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get all comments

router.get("/comments/:id", async (req, res) => {
  try {
    const comments = await (
      await Comment.find({ postId: req.params.id })
    ).reverse();
    const assembledComments = await Promise.all(
      comments.map(async (comment) => {
        const user = await User.findById(comment.userId);
        const date = comment.date;
        const text = comment.text;
        const { _id } = comment;
        const { username, profilePic } = user;
        return { username, profilePic, text, date, _id };
      })
    );
    return res.status(200).json(assembledComments);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

//Delete a comment

router.delete("/comments/:id", async (req, res) => {
  try {
    await Comment.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

//Getting all posts from users friends
router.get("/friends/:user", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.user });

    const allPosts = await Promise.all(
      user.friends.map(async (friend) => {
        return await Post.find({
          author: friend,
        });
      })
    );

    // allPosts.map((posts) => {
    //   console.log("post id aaa", posts, typeof posts, posts[0]._id);
    // });

    const allPostsAssambled = await Promise.all(
      allPosts.flat().map(async (posts) => {
        const comments = (await Comment.find({ postId: posts._id })).length;
        const user = await await User.find({ username: posts.author });
        const { _id } = posts._id;
        const author = posts.author;
        const title = posts.title;
        const text = posts.text;
        const date = posts.date;
        const comment = comments;
        const profilePic = user[0].profilePic;
        return {
          _id,
          author,
          title,
          text,
          date,
          comment,
          profilePic,
        };
      })
    );

    res.status(200).json(allPostsAssambled);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

//Create post

router.post("/create", async (req, res) => {
  try {
    const post = new Post({
      author: req.body.author,
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
    });

    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Put a like on a post

router.put("/post/:id", async (req, res) => {
  try {
    const post = await await Post.findOne({ _id: req.params.id });
    post.likes = req.params.likes;
    post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;
