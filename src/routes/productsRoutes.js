import { Router } from "express"
import fs from 'fs'



const router = Router()

router.get('/',async(req,res)=>{

    const data = await fs.promises.readFile('products.json','utf-8')
    const products = JSON.parse(data)



    res.status(200).json(products)
})

router.get('/:id',async(req,res)=>{
    
    const {id} = req.params
    const data = await fs.promises.readFile('products.json','utf-8')
    const products = JSON.parse(data)
    const product = products.find(product => product.id === id)


    res.status(200).json(product)
})



export default router