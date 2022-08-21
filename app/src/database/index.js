import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Decode8474:SnoFqwHt776yxF0O@cluster-computacao-nuve.yuwjg37.mongodb.net/?retryWrites=true&w=majority').then(() => {
  console.log('Banco de dados conectado com sucesso');
}).catch(() => {
  console.log('Erro ao conectar no banco de dados');
  throw new Error('database_connection_error');
})
mongoose.Promise = global.Promise;

export default mongoose;
