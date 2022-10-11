// const dotenv = require ('dotenv')
// dotenv.config()
require('dotenv').config()

const {
  USER_DB,
  HOST_DB,
  DATABASE_DB,
  PASSWORD_DB,
  PORT_DB} = process.env
const {
  Client
} = require('pg')
const express = require('express')
const app = express()
app.use(express.json())

function obterClienteDB (){
  return new Client({
    user: USER_DB,
    host: HOST_DB,
    database: DATABASE_DB,
    password: PASSWORD_DB,
    port: PORT_DB
  });
}
// 20222_usjt_sdmobile_noite_nodejs_bases_relacionais
//GET http://localhost:3000/medicos
app.get('/medicos', async (req, res) =>{
  let client = obterClienteDB()
  client.connect()
  const { rows } = await client.query('SELECT * FROM tb_medico')
  console.log(rows)
  await client.end()
  res.json(rows)
})


//GET http://localhost:3000/pacientes
app.get('/pacientes', (req, res) => {
  let client = obterClienteDB()
  client.connect()
  let status
  let resultadoFinal
  client.query('SELECT * FROM tb_paciente')
  .then(result => {
    console.log(result)
    resultadoFinal = result
    status = 200
    // res.send(result.rows)
  })
  .catch(err => {
    console.log(err)
    status = 500
    // res.status(500).end()
  })
  .finally(() => {
    client.end()
    .then(() => res.status(status).send(resultadoFinal))
  })
})

app.post('/medicos', async (req, res) => {
  //abrir uma conexão com o banco
  let client = obterClienteDB()
  client.connect()
  //obter os dados da requisição
  // const crm = req.body.crm
  // const nome = req.body.nome
  const {crm, nome} = req.body
  // não faça assim
  //montar o comando SQL
  // const sql = 
  // "INSERT INTO tb_medico (crm, nome) VALUES ( " + crm + ", '" + nome + "');"
  const sql = "INSERT INTO tb_medico (crm, nome) VALUES ($1, $2)" 
  //executar o comando
  const result = await client.query(sql, [crm, nome])
  console.log(result)
  //fechar a conexão
  await client.end()
  //responder ao cliente
  res.end()
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


