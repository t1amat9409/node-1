//Imaginary mongoose models
const {User, File, Post} = require("./model");

const ReturnDataExample = {
  files: [],
  posts: [],
  user: []
}

//HELLWAY
const getUserData = (_id) => {
  const Data = {}; 
  User.findOne({_id}, (error, user)=>{
    if(error){
      return {
        ...err,
        userError: true
      }
    }
    Data.user = user; //Set User For
    Post.find({author:_id}, (err, posts)=>{
      if(err){
        return {
          ...err,
          postsError: true
        }
      }
      Data.posts = posts; //Set Posts For
      return File.find({author:_id},(file_err, files)=>{
        if(file_err){
          return {
            ...file_err,
            filesError: true
          }
        }
        Data.files = files; //Set Files For
        return Data;
      })
    })
  })
}

//NICEWAY
const getUserDataNice = async (_id) => {
  try{
    const user = await User.findOne({_id});
    const posts = await Post.find({author:_id});
    const files = await File.find({author:_id});
    return {
      user,
      files,
      posts
    }
  } catch(err){
    //run with error here
    return {
      ...err
    }
  }
}
