const {Pool}=require('pg')



const pool=new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
})

const connect =async(consulta,arrayVariables=[])=>{
    let client,result;
    try{
        client =await pool.connect();
        const resp=await client.query(consulta,arrayVariables);
        result=resp.rows;
    }catch(error){
        throw error
    }finally{
        client.release()
    }
    return result
}


module.exports={
    connect
}