const {
  Client
} = require('pg')
const express = require('express')
const app = express()
app.use(express.json())
const client = new Client({
  user: '',
  host: 'motty.db.elephantsql.com',
  database: '',
  password: '',
  port: '5432'
});
//GET http://localhost:3000/medicos
app.get('/medicos', async (req, res) =>{
  client.connect()
  const { rows } = await client.query('SELECT * FROM tb_medico')
  console.log(rows)
  res.send('ok')
})
app.listen(3000, () => console.log('Executando...'))










// teste = async ()  => {
//   await client.connect()
//   console.log('foi')
// }

// teste()

























// const f = () => {
//   //demora bastante...
//   return Promise.resolve(1)
// }

// //const r = f()
// // r
// // .then((res) => console.log(res))
// // .catch((err) => console.logerr)

// teste = async () => {
//   try{
//     const r = await f()
//     console.log(r)
//     res.send(r)
//   }
//   catch (err){
//     console.log(err)
//   }
// }


