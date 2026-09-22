import express from 'express'
import generateCode from '../utils/generateCode.js'
import urlModel from '../models/urlmodel.js'

const router= express.Router()

router.post('/', async function (req,res){

    const{url} = req.body

    if(!url){
        return res.status(400).json({
            error: "please enter a url"
        })
    }

    if((url.startsWith('http://') == false) && (url.startsWith('https://') == false) ){
        return res.status(400).json({
            error:"Enter a valid url"
        })
    }

    const code = generateCode()

    const newUrl = await urlModel.create({
        originalUrl: url,
        shortCode: code
    })

    return res.status(201).json({
        message:"URL shortened successfully",
        data:{
            originalUrl: newUrl.originalUrl,
            shortCode: newUrl.shortCode
        }
    })




})

export default router