import { Client }  from 'pg'

async function query(queryObject) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password:process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DB

    })
    try{
      await client.connect()
      const result = await client.query(queryObject)
      return result;
    }
    catch(error){
      console.log(error);
    }
    finally{
      await client.end()
    }
    
    return result
}

export default {
  query:query
}