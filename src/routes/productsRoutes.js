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


router.post('/',async(req,res)=>{
    
    const body = req.body
    const data = await fs.promises.readFile('products.json','utf-8')
    const products = JSON.parse(data)
    if(products.some(product => product.code ===body.code)){
        return res.status(200).json({error:"producto ya existente"})
    }

    const newProduct = {
        id: crypto.randomUUID(),
        ...body
    }
    products.push(newProduct)
    await fs.promises.writeFile('products.json',JSON.stringify(products,null,2))
    res.json({message:"Producto creado exitosamente"})
})


export default router