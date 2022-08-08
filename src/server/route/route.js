const express = require('express')
const router = express.Router()

const {creatBlog,getBlog,updateBlog,deleteBlog} = require('../controller/blogController')

router.post('/create',creatBlog)
router.get('/getBlog',getBlog)
router.post('/updateBlog/:id',updateBlog)
router.delete('/deleteblog/:id',deleteBlog)




module.exports =router