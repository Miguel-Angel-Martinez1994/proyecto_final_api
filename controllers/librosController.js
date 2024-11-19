const {
    getLibrosModel,
    crearLibrosModel,
    editarLibroModel,
    borrarLibroModel,
    getLibroPorCategoria,
    getLibroById
}=require("../models/libroModels")


const obtenerLibros=async(req,res)=>{
    let respuesta;
    const page = req.params.page ? req.params.page : 0;
    try{
        respuesta=await getLibrosModel(page)

        if(!respuesta){
            return res.status(400).json({
                ok:false,
                msg:"erro al ver libros"
            }) 
        }

        return res.status(200).json({
            ok:true,
            total_pages:respuesta.length,
            respuesta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"ERROR al ver libros"
        })
    }
}

const crearLibro=async(req,res)=>{
    let newLibro=req.body
    try{
        const respuesta =await crearLibrosModel(newLibro)

        if(!respuesta){
            return res.status(400).json({
                ok:false,
                msg:"error al crear libro"
            })
        }

        return res.status(200).json({
            ok:true,
            respuesta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"ERROR al crear libro"
        })
    }
}

const editarLibro=async(req,res)=>{
    const {id}=req.params
    let body=req.body

    const peliculaeditada={...body,id}

    try{
        const resultado=await editarLibroModel(peliculaeditada)

        if(!resultado){
            return res.status(400).json({
                ok:false,
                msg:"error al editar libro"
            })
        }

        return res.status(200).json({
            ok:true,
            resultado
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"ERROR al editar libro"
        })
    }
}

const borrarLibro=async(req,res)=>{
    const {id}=req.params

    try{
        const respuesta =await borrarLibroModel(id)

        if(!respuesta){
            return res.status(400).json({
                ok:false,
                msg:"error al borrar libro"
            })
        }

        return res.status(200).json({
            ok:true,
            respuesta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"ERROR al borrar libro"
        })
    }
}

const obtenerLibroPorCategoria=async(req,res)=>{
    const {categoria_id}=req.params
    try{
        const respuesta =await getLibroPorCategoria(categoria_id)

        if(!respuesta){
            return res.status(400).json({
                ok:false,
                msg:"error al buscar por categoria"
            })
        }

        return res.status(200).json({
            ok:true,
            respuesta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"ERROR al buscar por categoria"
        })
    }
}

const obtenerLibroPorId=async(req,res)=>{
    const {id}=req.params
    try{
        const respuesta =await getLibroById(id)

        if(!respuesta){
            return res.status(400).json({
                ok:false,
                msg:"error al buscar por ID"
            })
        }

        return res.status(200).json({
            ok:true,
            respuesta
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:"ERROR al buscar por ID"
        })
    }
}

module.exports={
    obtenerLibros,
    crearLibro,
    editarLibro,
    borrarLibro,
    obtenerLibroPorId,
    obtenerLibroPorCategoria
}