const router = require("express").Router();
const mongoose = require("mongoose");

const Post = require('../models/Post')
const Comment = require("../models/Comment.js");

router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
});

router.get("/:postId", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.postId });
  res.send(post);
});

router.put("/:postId", async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    {
      _id: req.params.postId
    },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  res.send(post);
});

router.delete("/:postId", async (req, res) => {
  const post = await Post.findByIdAndRemove({
    _id: req.params.postId
  });
  res.send(post);
});

router.post("/", async (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.send(post);
});

// /Comments

// Create a Comment
router.post("/:postId/comment", async (req, res) => {
  //Find a POst
  const post = await Post.findOne({ _id: req.params.postId });

  //Create a Comment
  const comment = new Comment();
  comment.content = req.body.content;
  comment.post = post._id;
  await comment.save();

  // Associate Post with comment
  post.comments.push(comment._id);
  await post.save();

  res.send(comment);
});

//Read a Comment

router.get("/:postId/comment", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.postId }).populate(
    "comments"
  );
  res.send(post);
});


router.put("/comments/:commentId",async (req,res)=>{
    const comment = await Comment.findOneAndUpdate({
     _id: req.params.commentId
    },
    req.body,
    {new: true, runValidators:true}
    
    );
});


router.delete("/comment/:commentId",async(req,res)=>{
    await Comment.findByIdAndRemove(req.params.commentId);
    res.send({message:"Deleted "})
})
module.exports = router;