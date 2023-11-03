
const express = require("express")

const router = express.Router()

router.get("/",(req,res)=>{
    console.log(req.query.filePath)
    res.download(req.query.filePath)
})

module.exports = router