const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create Post
router.post("/", async (request, response) => {
  const newPost = new Post(request.body)
  try {
    const savedPost = await newPost.save()
    response.status(200).json(savedPost)
  } catch (error) {
    response.status(500).json(error)
  }
})

// Update
router.put("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id)
    if (post.username == request.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(request.params.id, {
          $set: request.body
        },
          { new: true }
        )
        response.status(200).json(updatedPost)
      } catch (error) {
        response.status(500).json(error)
      }
    } else {
      response.status(401).json("You can update only your post!")
    }
  } catch (error) {
    response.status(500).json(error)
  }
})

// delete post
router.delete("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id)
    if (post.username == request.body.username) {
      try {
        await post.delete()
        response.status(200).json("Post has been deleted")
      } catch (error) {
        response.status(500).json(error)
      }
    } else {
      response.status(401).json("You can delete only your post!")
    }
  } catch (error) {
    response.status(500).json(error)
  }
})
// Get post
router.get("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id)
    response.status(200).json(post)
  } catch (error) {
    response.status(500).json(error)
  }
})

// get all post
router.get("/", async (request, response) => {
  const username = request.query.user
  const catName = request.query.cat
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username })
    }
    else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName]
        }
      })
    } else {
      posts = await Post.find()
    }
    response.status(200).json(posts)
  } catch (error) {
    response.status(500).json(error)
  }
})

module.exports = router