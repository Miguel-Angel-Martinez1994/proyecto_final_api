const {connect}=require("../helpers/connect")
const {libros}=require("./queries")

const getLibrosModel=async(paginacion)=>{
    try{
        const rs =await connect(libros.getLibros,[paginacion])
        return rs
    }catch(error){
        console.log(error)
    }
}

const crearLibrosModel=async(newLibro)=>{
    //titulo,idioma,titulo_original,autor,sinopsis,categoria_id
    const {titulo,idioma,titulo_original,autor,sinopsis,categoria_id}=newLibro

    try{
        const rs =await connect(libros.createLibro,[titulo,idioma,titulo_original,autor,sinopsis,categoria_id])
        return rs
    }catch(error){
        console.log(error)
    }
}

const editarLibroModel=async(updateLibro)=>{
    const {titulo,idioma,titulo_original,autor,sinopsis,categoria_id,id}=updateLibro

    try{
        const rs =await connect(libros.updateLibro,[titulo,idioma,titulo_original,autor,sinopsis,categoria_id,id])
        return rs
    }catch(error){
        console.log(error)
    }
}

const borrarLibroModel=async(id)=>{
    try{
        const rs=await connect(libros.deleteLibro,[id])
        return rs
    }catch(error){
        console.log(error)
    }
}

module.exports={
    getLibrosModel,
    crearLibrosModel,
    editarLibroModel,
    borrarLibroModel
}