import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('Banco de dados conectado com sucesso');
}).catch((err) => {
  console.log('Erro ao conectar no banco de dados');
  throw new Error(err);
})
mongoose.Promise = global.Promise;

export default mongoose;
