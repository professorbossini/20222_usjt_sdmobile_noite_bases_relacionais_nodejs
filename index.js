const {
  Client
} = require('pg')

const client = new Client({
  user: '',
  host: 'motty.db.elephantsql.com',
  database: '',
  password: '',
  port: '5432'
});

teste = async ()  => {
  await client.connect()
  console.log('foi')
}

teste()

























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


