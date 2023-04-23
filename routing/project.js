import express from "express"
const router : express.Router()

router.get("/all",(req, res)=>{
    res.json({
        msg: "project get all"
    })
})

router.post("/create",(req, res)=>{
    res.json({
        msg:"create project"
    })
})

router.put("/",(req, res)=>{
    res.json({
        msg: "//project"
    })
})

router.delete("/",(req, res)=>{
    res.json({
        msg: "del project"
    })
})

export default router

